import React from 'react';

import { CodeContainer, Title } from './aboutCode';

export default () => (
    <CodeContainer>
        <Title>Open Collective</Title>
        <p>
            Vous accepteriez d'aider aux dépenses des CaenCamp ? Rendez-vous sur
            notre page{' '}
            <a href="https://opencollective.com/caencamp">open collective</a>
            <object
                type="image/svg+xml"
                data="https://opencollective.com/caencamp/tiers/entreprise.svg?avatarHeight=36&width=600"
            >
                open collective
            </object>
        </p>
    </CodeContainer>
);
