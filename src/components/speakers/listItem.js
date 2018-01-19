import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { speakerPropType } from '../../utils/caenCampPropTypes';
import Links from './Links';

export const Item = styled.div`
    border: 1px solid ${({ theme }) => theme.greyLight};
    height: 260px;
    width: 180px;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 115px;
    height: 115px;
`;

export const Name = styled.h3`
    font-size: 1.6rem;
    text-align: center;
`;

export const Introduction = styled.p`
    text-align: center;
    font-size: 1rem;
    padding: 0;
    margin: 1rem 0;
    color: ${({ theme }) => theme.black};
`;

export const SpeakerListItem = ({ speaker }) => (
    <Item>
        <Link to={`/speakers/${speaker.slug}`}>
            <Profile src={`/speakers/${speaker.picture}`} />
            <Name>
                {speaker.firstName} {speaker.lastName}
            </Name>
            <Introduction>{speaker.resume}</Introduction>
            <Links links={speaker.links} />
        </Link>
    </Item>
);

SpeakerListItem.propTypes = {
    speaker: speakerPropType,
};
