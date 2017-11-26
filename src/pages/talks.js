import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default () => (
    <div>
        <Helmet title="CaenCamp: les talks">
            <meta
                name="description"
                content="Retrouvez tous les talks des CaenCamp"
            />
        </Helmet>
        <Content id="talksContent">
            <LeftColumn>
                <h1>Tous les talks</h1>
            </LeftColumn>
            <SideMenu />
        </Content>
    </div>
);
