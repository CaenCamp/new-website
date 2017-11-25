import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default () => (
    <div>
        <Helmet title="CaenCamp: proposez un talk">
            <meta name="description" content="Participez CaenCamp" />
        </Helmet>
        <Content>
            <LeftColumn>
                <h1>Participez !</h1>
            </LeftColumn>
            <SideMenu />
        </Content>
    </div>
);
