module.exports = {
    siteMetadata: {
        title: `The CaenCamp blog`,
        siteUrl: 'http://www.caencamp.fr/',
    },
    plugins: [
        `gatsby-plugin-react-next`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography.js`,
            },
        },
    ],
};
