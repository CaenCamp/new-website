module.exports = {
    siteMetadata: {
        title: `The CaenCamp blog`,
        siteUrl: 'http://www.caencamp.fr/',
    },
    plugins: [
        `gatsby-plugin-react-next`,
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
};
