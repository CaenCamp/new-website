import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default () => (
    <div>
        <Helmet title="CaenCamp: soutenez-nous">
            <meta name="description" content="Accueillez les CaenCamp" />
        </Helmet>
        <Content id="welcomeUsContent">
            <LeftColumn>
                <h1>Accueillez nous</h1>
            </LeftColumn>
            <SideMenu />
        </Content>
    </div>
);
