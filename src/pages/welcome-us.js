import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';
import { formatMeetup } from '../utils/formatters';

export default ({ nextMeetup }) => {
    if (nextMeetup) {
        nextMeetup = formatMeetup(nextMeetup);
    }

    return (
        <div>
            <Helmet title="CaenCamp: soutenez-nous">
                <meta name="description" content="Accueillez les CaenCamp" />
            </Helmet>
            <Content id="welcomeUsContent">
                <LeftColumn>
                    <h1>Accueillez nous</h1>
                </LeftColumn>
                <SideMenu meetup={nextMeetup} />
            </Content>
        </div>
    );
};
