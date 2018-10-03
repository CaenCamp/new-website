import { Helmet } from 'react-helmet';
import React from 'react';

import Layout from '../components/layout';
import { Content, SingleColumn } from '../components/Content';

export default () => {
    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp: soutenez-nous">
                    <meta name="description" content="Accueillez les CaenCamp" />
                </Helmet>
                <Content id="welcomeUsContent">
                    <SingleColumn>
                        <h1>Ils nous ont accueilli</h1>
                    </SingleColumn>
                </Content>
            </div>
        </Layout>
    );
};
