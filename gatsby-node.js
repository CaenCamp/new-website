const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    const talkTemplate = path.resolve(`src/templates/talk.js`);
    const dojoTemplate = path.resolve(`src/templates/dojo.js`);

    return graphql(`
        query AllSingleContents {
            talks: allMarkdownRemark(
                filter: { fileAbsolutePath: { glob: "**/talks/**" } }
            ) {
                edges {
                    node {
                        frontmatter {
                            slug
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
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.talks.edges.forEach(({ node }) => {
            createPage({
                path: `talks/${node.frontmatter.slug}`,
                component: talkTemplate,
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.frontmatter.slug,
                },
            });
        });

        result.data.dojos.edges.forEach(({ node }) => {
            createPage({
                path: `coding-dojo/${node.frontmatter.slug}`,
                component: dojoTemplate,
                context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.frontmatter.slug,
                },
            });
        });
    });
};
