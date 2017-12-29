import React from 'react';

import { RightColumn } from '../components/Content';

const renderNextMeetup = meetup => {
    let meetupContent = (
        <div className="nextMeetup__content">Aucune rencontre à venir</div>
    );

    if (meetup) {
        meetupContent = (
            <div className="nextMeetup__content">
                <div className="nextMeetup__content__name">{meetup.name}</div>
                <div className="nextMeetup__content__rsvp">
                    {meetup.yes_rsvp_count} participants
                </div>
                <a
                    href={meetup.link}
                    target="_blank"
                    className="nextMeetup__content__link"
                >
                    S'inscrire
                </a>
            </div>
        );
    }

    return (
        <div className="nextMeetup">
            <h5 className="nextMeetup__title">Prochaine rencontre</h5>
            {meetupContent}
        </div>
    );
};

export default ({ meetup }) => {
    return (
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
            {renderNextMeetup(meetup)}
        </RightColumn>
    );
};
