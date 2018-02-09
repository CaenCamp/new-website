import React from 'react';
import Link from 'gatsby-link';

import { CodeContainer, Title } from './aboutCode';

export default () => (
    <CodeContainer>
        <Title>Call for speakers</Title>
        <p>
            Faites vivre les CaenCamp.s grâce à votre expérience:{' '}
            <Link to="/call-for-speakers">proposez un sujet de talk !</Link>
        </p>
    </CodeContainer>
);
