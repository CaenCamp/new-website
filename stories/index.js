import React from 'react';
import { storiesOf } from '@storybook/react';

import Hello from '../src/components/Hello';

storiesOf('CaenCamp Components', module).add('Hello component', () => (
    <Hello who="CaenCamp storybook" />
));
