import React from 'react';

import { talkPropType } from '../../utils/caenCampPropTypes';

export const TalkListItem = ({ talk }) => (
    <li>
        Edition {talk.edition}: <a href={`/talks/${talk.slug}`}>{talk.title}</a>{' '}
        par{' '}
        {talk.speakers.map(
            speaker => `${speaker.firstName} ${speaker.lastName}, `,
        )}
    </li>
);

TalkListItem.propTypes = {
    talk: talkPropType,
};
