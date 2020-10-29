import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import {speakerPropType} from '../../utils/caenCampPropTypes';
import Links from './Links';

export const Item = styled.div`
    border: 1px solid ${({theme}) => theme.greyLight};
    height: 290px;
    width: 190px;
    margin: 1rem 1rem 1rem 0;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: ${props => props.theme.mobileSize}) {
        width: 100%;
        height: auto;
    }
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 115px;
    height: 115px;
    margin-bottom: 0.8rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        width: 75px;
        height: 75px;
    }
`;

export const Name = styled.h3`
    font-size: 1.2rem;
    text-align: center;
    padding: 0;
    margin: 0.3rem 0;
`;

export const Introduction = styled.p`
    text-align: center;
    font-size: 1rem;
    padding: 0;
    margin: 0.2rem 0 0;
    color: ${({theme}) => theme.black};
`;

export const SpeakerListItem = ({speaker}) => (
    <Item className="speakerItem">
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
