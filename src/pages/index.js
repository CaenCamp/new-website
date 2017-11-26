import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default () => (
    <div>
        <Helmet title="CaenCamp">
            <meta
                name="description"
                content="Welcome on the new CaenCamp site"
            />
        </Helmet>
        <Content id="homeContent">
            <LeftColumn>
                <h1 className="welcome">Welcome to our new website.</h1>
                <p>
                    <a className="linkToTalks" href="/talks">
                        Tous les talks
                    </a>
                </p>
            </LeftColumn>
            <SideMenu />
        </Content>
    </div>
);
