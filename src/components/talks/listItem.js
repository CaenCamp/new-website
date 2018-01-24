import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { talkPropType } from '../../utils/caenCampPropTypes';
import Calendar from './Calendar';
import MinimalView from '../speakers/MinimalView';
import Tags from './Tags';

export const Item = styled.div`
    border: 1px solid ${({ theme }) => theme.greyLight};
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);
    a {
        display: flex;
        flex-direction: row;
        align-items: left;
    }
`;

const Description = styled.div`
    margin-left: 2rem;
`;

const Title = styled.h3`
    font-size: 2rem;
    margin: 0;
    padding: 0;
`;

const Resume = styled.p`
    color: ${({ theme }) => theme.black};
    margin: 1rem 0;
    padding: 0;
    font-style: italic;
`;

const Speakers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
`;

export const TalkListItem = ({ talk }) => (
    <Item>
        <Link to={`/talks/${talk.slug}`}>
            <Calendar date={talk.date} edition={talk.edition} />
            <Description>
                <Title>{talk.title}</Title>
                <Speakers>
                    {talk.speakers.length > 0 &&
                        talk.speakers.map(speaker => (
                            <MinimalView speaker={speaker} />
                        ))}
                </Speakers>
                <Resume>{talk.description}</Resume>
                <Tags tags={talk.video ? ['video', ...talk.tags] : talk.tags} />
            </Description>
        </Link>
    </Item>
);

TalkListItem.propTypes = {
    talk: talkPropType,
};
