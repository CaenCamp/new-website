import React from 'react';

import { RightColumn } from '../components/Content';

export default () => (
    <RightColumn>
        <a className="linkToCallForPaper" href="/call-for-paper">
            Proposer un talk
        </a>
        <a className="linkToWelcomeUs" href="/welcome-us">
            Accueillez-nous !
        </a>
        <a className="linkToCodingDojo" href="/coding-dojo">
            Le Dojo
        </a>
    </RightColumn>
);
