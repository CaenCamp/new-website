import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import { formatMeetup } from '../utils/formatters';
import SideMenu from '../components/SideMenu';

export default ({ nextMeetup }) => {
    if (nextMeetup) {
        nextMeetup = formatMeetup(nextMeetup);
    }

    return (
        <div>
            <Helmet title="CaenCamp: proposez un talk">
                <meta name="description" content="Participez CaenCamp" />
            </Helmet>
            <Content id="callForPaperContent">
                <LeftColumn>
                    <h1>Participez !</h1>
                </LeftColumn>
                <SideMenu meetup={nextMeetup} />
            </Content>
        </div>
    );
};
