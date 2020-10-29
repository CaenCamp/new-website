import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import {campPropType} from '../../utils/caenCampPropTypes';
import Date from './date';

const Item = styled.div`
    border: 1px solid ${({theme}) => theme.greyLight};
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);
    a {
        display: flex;
        flex-direction: row;
        align-items: left;
        @media (max-width: ${props => props.theme.mobileSize}) {
            flex-direction: column;
        }
    }
    @media (max-width: ${props => props.theme.mobileSize}) {
        margin: 0.5rem;
        padding: 0.2rem;
    }
`;

const Description = styled.div`
    margin-left: 2rem;
`;

const Title = styled.h3`
    font-size: 2rem;
    margin: 0;
    padding: 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        font-size: 1.4rem;
        margin: 0.8rem 0;
    }
`;

const Resume = styled.p`
    color: ${({theme}) => theme.black};
    margin: 1rem 0;
    padding: 0;
    font-style: italic;
`;

const Image = styled.img`
    margin: 0.5rem;
    height: auto;
    width: auto;
    max-width: 8rem;
    max-height: 8rem;
`;

export const CampListItem = ({camp}) => (
    <Item className="codingItem">
        <Link to={`/coding-caen-camp/${camp.slug}`}>
            <Image src={`/ccc/${camp.image}`} />
            <Description>
                <Title>
                    #{camp.edition}: {camp.title}
                </Title>
                <Date date={camp.date} />
                <Resume>{camp.description}</Resume>
            </Description>
        </Link>
    </Item>
);

CampListItem.propTypes = {
    camp: campPropType,
};
