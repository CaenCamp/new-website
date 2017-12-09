import React from 'react';
import { storiesOf } from '@storybook/react';

import { DojoListItem } from '../src/components/dojos/listItem';

storiesOf('Dojos Components', module).add('List item with craftman', () => (
    <DojoListItem
        dojo={{
            title: 'Dojo Title',
            slug: 'dojo-slug',
            craftsmen: [
                {
                    firstName: 'John',
                    lastName: 'Doe',
                },
            ],
        }}
    />
));

storiesOf('Dojos Components', module).add('List item without craftman', () => (
    <DojoListItem
        dojo={{
            title: 'Dojo Title',
            slug: 'dojo-slug',
            craftsmen: [],
        }}
    />
));
