import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default () => (
    <div>
        <Helmet title="CaenCamp: les coding dojos">
            <meta
                name="description"
                content="Affutez vos skills au Dojo des CaenCamp"
            />
        </Helmet>
        <Content>
            <LeftColumn>
                <h1>Le Dojo</h1>
            </LeftColumn>
            <SideMenu />
        </Content>
    </div>
);
