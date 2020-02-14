module.exports = {
    siteMetadata: {
        title: `CaenCamp`,
        baseline: 'Ici la baseline des Caencamp quand nous en aurons une.',
        socialLinks: [
            {
                title: 'Envelope',
                url: 'http://eepurl.com/gEWFkv',
            },
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
        sponsors: [
            {
                name: 'Sii',
                website: 'http://www.groupe-sii.com/fr',
                logo: 'sii.jpg',
            },
            {
                name: 'Imagile',
                website: 'https://www.imagile.fr/',
                logo: 'imagile.jpg',
            },
        ],
        venues: [
            {
                name: 'Le Dôme',
                website: 'http://ledome.info/',
                logo: 'dome.jpg',
            },
            {
                name: 'Forum Digital',
                website: 'http://forum-digital.fr/',
                logo: 'forum-digital.jpg',
            },
            {
                name: 'Hey! coworking',
                website: 'https://www.hey-coworking.com/',
                logo: 'hey.jpg',
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
