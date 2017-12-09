import React from 'react';
import { storiesOf } from '@storybook/react';

import { TalkListItem } from '../src/components/talks/listItem';

storiesOf('Talks Components', module).add('List item with speaker', () => (
    <TalkListItem
        talk={{
            title: 'Fake talk',
            edition: 1,
            slug: 'fake-slug',
            speakers: [
                {
                    firstName: 'John',
                    lastName: 'Doe',
                    slug: 'john-doe',
                },
            ],
        }}
    />
));

storiesOf('Talks Components', module).add('List item without speaker', () => (
    <TalkListItem
        talk={{
            title: 'Fake talk',
            edition: 1,
            slug: 'fake-slug',
            speakers: [],
        }}
    />
));
