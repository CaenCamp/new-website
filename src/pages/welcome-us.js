import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import { formatMeetup } from '../utils/formatters';
import Layout from '../components/layout';
import SideMenu from '../components/SideMenu';

export default ({ nextMeetup }) => {
    if (nextMeetup) {
        nextMeetup = formatMeetup(nextMeetup);
    }

    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp: soutenez-nous">
                    <meta
                        name="description"
                        content="Accueillez les CaenCamp"
                    />
                </Helmet>
                <Content id="welcomeUsContent">
                    <LeftColumn>
                        <h1>Accueillez nous</h1>
                    </LeftColumn>
                    <SideMenu meetup={nextMeetup} />
                </Content>
            </div>
        </Layout>
    );
};
