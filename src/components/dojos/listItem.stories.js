import React from 'react';
import { DojoListItem } from './listItem';

const camp = {
    edition: 42,
    meetupId: 12000,
    image: 'hacktoberfest2019.png',
    title: 'This is an awesome talk !',
    slug: 'edition-5-versioning-avec-git',
    date: '2020-10-09 18:30',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet neque ligula, eu auctor nisl consequat et. Cras dapibus urna at velit accumsan mollis. Mauris vitae eros sollicitudin, pretium metus nec, faucibus urna. ',
    craftsmen: [
        {
            firstName: 'Clément',
            lastName: 'Le Biez',
            slug: 'clement-lebiez',
            picture: 'clement-lebiez.jpg',
        },
        {
            firstName: 'Alexis',
            lastName: 'Janvier',
            slug: 'alexis-janvier',
            picture: 'alexis-janvier.jpg',
        },
    ],
    tags: ['lorem', 'ipsum']
};

export default {
    component: DojoListItem,
    title: 'Dojo|ListItem',
};

export const Classical = () => <DojoListItem dojo={camp} />;
