module.exports = {
    siteMetadata: {
        title: `CaenCamp`,
        baseline: 'Ici la baseline des Caencamp quand nous en aurons une.',
        socialLinks: [
            {
                title: 'Twitter',
                url: 'https://twitter.com/caencamp',
            },
            {
                title: 'GitHub',
                url: 'https://github.com/CaenCamp',
            },
            {
                title: 'Meetup',
                url: 'https://www.meetup.com/CaenCamp',
            },
            {
                title: 'YouTube',
                url: 'https://www.youtube.com/channel/UCLX4DP_fDCZ4fsgbUZsGaUw',
            },
            {
                title: 'Rss',
                url: 'https://www.meetup.com/fr-FR/CaenCamp/events/rss/',
            },
        ],
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/content`,
                name: 'contents',
            },
        },
        'gatsby-plugin-react-helmet',
    ],
};
