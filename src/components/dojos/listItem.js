import React from 'react';

import { dojoPropType } from '../../utils/caenCampPropTypes';

export const DojoListItem = ({ dojo }) => (
    <li>
        <a href={`/coding-dojo/${dojo.slug}`}>{dojo.title}</a>
        {dojo.craftsmen.length > 0 ? ' avec ' : ''}
        {dojo.craftsmen.length > 0 &&
            dojo.craftsmen.map(
                craftman => `${craftman.firstName} ${craftman.lastName}, `,
            )}
    </li>
);

DojoListItem.propTypes = {
    dojo: dojoPropType,
};
