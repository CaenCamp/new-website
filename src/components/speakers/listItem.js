import React from 'react';

import { speakerPropType } from '../../utils/caenCampPropTypes';

export const SpeakerListItem = ({ speaker }) => (
    <li>
        <a href={`/speakers/${speaker.slug}`}>
            {speaker.firstName} {speaker.lastName}
        </a>
    </li>
);

SpeakerListItem.propTypes = {
    speaker: speakerPropType,
};
