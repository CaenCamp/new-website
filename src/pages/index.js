import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn, RightColumn } from '../components/Content';

export default () => (
    <div>
        <Helmet title="CaenCamp">
            <meta
                name="description"
                content="Welcome on the new CaenCamp site"
            />
        </Helmet>
        <Content>
            <LeftColumn>
                <p className="welcome">Welcome to our new website.</p>
            </LeftColumn>
            <RightColumn>Colonne de droite</RightColumn>
        </Content>
    </div>
);
