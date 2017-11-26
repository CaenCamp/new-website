const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark(
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
            }
        `).then(result => {
            result.data.allMarkdownRemark.edges.map(({ node }) => {
                createPage({
                    path: `talks/${node.frontmatter.slug}`,
                    component: path.resolve(`./src/templates/talk.js`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.frontmatter.slug,
                    },
                });
            });
            resolve();
        });
    });
};
