const path = require(`path`);
const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({ boundActionCreators }) => {
    const { createNode } = boundActionCreators;
    const url = `https://api.meetup.com/CaenCamp/events?scroll=future_or_past`;
    const data = await axios.get(url);

    data.data.forEach((event, i) => {
        const meetupEventNode = {
            ...event,
            children: [],
            parent: `__SOURCE__`,
            content: JSON.stringify(event),
            internal: {
                type: `MeetupEvent`,
                contentDigest: crypto
                    .createHash(`md5`)
                    .update(JSON.stringify(event))
                    .digest(`hex`),
            },
            order: i,
        };

        createNode(meetupEventNode);
    });

    return;
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    const talkTemplate = path.resolve(`src/templates/talk.js`);
    const dojoTemplate = path.resolve(`src/templates/dojo.js`);
    const speakerTemplate = path.resolve(`src/templates/speaker.js`);
    const cccTemplate = path.resolve(`src/templates/ccc.js`);

    return graphql(`
        query AllSingleContents {
            talks: allMarkdownRemark(
                filter: { fileAbsolutePath: { glob: "**/talks/**" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                            meetupId
                        }
                    }
                }
            }
            dojos: allMarkdownRemark(
                filter: { fileAbsolutePath: { glob: "**/dojos/**" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            speakers: allMarkdownRemark(
                filter: { fileAbsolutePath: { glob: "**/speakers/**" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
            ccc: allMarkdownRemark(
                filter: { fileAbsolutePath: { glob: "**/ccc/**" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.talks.edges.forEach(({ node }) => {
            createPage({
                path: `/talks/${node.frontmatter.slug}`,
                component: talkTemplate,
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.frontmatter.slug,
                    meetupId: node.frontmatter.meetupId,
                },
            });
        });

        result.data.dojos.edges.forEach(({ node }) => {
            createPage({
                path: `/coding-dojo/${node.frontmatter.slug}`,
                component: dojoTemplate,
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.frontmatter.slug,
                },
            });
        });

        result.data.speakers.edges.forEach(({ node }) => {
            createPage({
                path: `/speakers/${node.frontmatter.slug}`,
                component: speakerTemplate,
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.frontmatter.slug,
                },
            });
        });

        result.data.ccc.edges.forEach(({ node }) => {
            createPage({
                path: `/coding-caen-camp/${node.frontmatter.slug}`,
                component: cccTemplate,
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.frontmatter.slug,
                },
            });
        });
    });
};
