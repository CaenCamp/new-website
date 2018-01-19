import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import {
    formatSpeakerWithTalksAndDojos,
    formatMeetup,
} from '../utils/formatters';
import { SpeakerListItem } from '../components/speakers/listItem';
import SideMenu from '../components/SideMenu';

export default ({ data, nextMeetup }) => {
    const speakers = data.speakers.edges.map(speaker =>
        formatSpeakerWithTalksAndDojos(speaker.node),
    );

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
