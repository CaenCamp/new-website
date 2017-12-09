import React from 'react';
import { storiesOf } from '@storybook/react';

import { SpeakerListItem } from '../src/components/speakers/listItem';

storiesOf('Speakers Components', module).add('List item', () => (
    <SpeakerListItem
        speaker={{
            firstName: 'John',
            lastName: 'Doe',
            slug: 'john-doe',
        }}
    />
));
