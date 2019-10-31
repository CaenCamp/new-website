import React from 'react';
import MinimalView from './MinimalView';

const speaker = {
    firstName: 'Alexis',
    lastName: 'Janvier',
    slug: 'alexis-janvier',
    picture: 'alexis-janvier.jpg',
    resume: 'Happy Worker @ Marmelab',
};

export default {
    component: MinimalView,
    title: 'Speakers|MinimalView',
};

export const Classical = () => <MinimalView speaker={speaker} />;
