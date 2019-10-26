import React from 'react';
import TalkListItem from './listItem';

const talk = {
    edition: 42,
    meetupId: 12000,
    title: 'This is an awesome talk !',
    slug: 'edition-5-versioning-avec-git',
    date: '2020-10-09 18:30',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet neque ligula, eu auctor nisl consequat et. Cras dapibus urna at velit accumsan mollis. Mauris vitae eros sollicitudin, pretium metus nec, faucibus urna. ',
    tags: ['lorem', 'ipsum'],
    speakers: [
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
};

export default {
    component: TalkListItem,
    title: 'Talk|ListItem',
};

export const Classical = () => <TalkListItem talk={talk} />;
