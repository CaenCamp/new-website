import React from 'react';
import { SpeakerListItem } from './listItem';


const speaker = {
    firstName: "Alexis",
    lastName: "Janvier",
    slug: "alexis-janvier",
    picture: "alexis-janvier.jpg",
    resume: "Happy Worker @ Marmelab"
};

export default {
    component: SpeakerListItem,
    title: 'Speakers|ListItem',
};

export const Classical = () => <SpeakerListItem speaker={speaker} />;

