module.exports = {
    siteMetadata: {
        title: `CaenCamp`,
        baseline: 'Ici la baseline des Caencamp quand nous en aurons une.',
        socialLinks: [
            {
                title: 'Meetup',
                url: 'https://www.meetup.com/CaenCamp',
            },
            {
                title: 'GitHub',
                url: 'https://github.com/CaenCamp',
            },
            {
                title: 'Twitter',
                url: 'https://twitter.com/caencamp',
            },
            {
                title: 'YouTube',
                url: 'https://www.youtube.com/channel/UCLX4DP_fDCZ4fsgbUZsGaUw',
            },
            {
                title: 'Trello',
                url: 'https://slack.com/intl/fr-fr',
            },
            {
                title: 'Facebook',
                url: 'https://www.facebook.com/CaenCamp/',
            },
        ],
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
