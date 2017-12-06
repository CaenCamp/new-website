import React from 'react';
import { storiesOf } from '@storybook/react';

import { TalkListItem } from '../src/components/talks/listItem';

storiesOf('CaenCamp Components', module).add('Talks components', () => (
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
