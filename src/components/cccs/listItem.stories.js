import React from 'react';
import { CampListItem } from './listItem';

const camp = {
    edition: 42,
    meetupId: 12000,
    image: 'hacktoberfest2019.png',
    title: 'This is an awesome talk !',
    slug: 'edition-5-versioning-avec-git',
    date: '2020-10-09 18:30',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet neque ligula, eu auctor nisl consequat et. Cras dapibus urna at velit accumsan mollis. Mauris vitae eros sollicitudin, pretium metus nec, faucibus urna. ',
};

export default {
    component: CampListItem,
    title: 'CCC|ListItem',
};

export const Classical = () => <CampListItem camp={camp} />;
