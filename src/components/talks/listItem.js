import Link from 'gatsby-link';
import React, { Component } from 'react';
import styled from 'styled-components';
import isBefore from 'date-fns/is_before';

import Calendar from './Calendar';
import MinimalView from '../speakers/MinimalView';
import Tags from './Tags';

const Item = styled.div`
    border: 1px solid ${({ theme }) => theme.greyLight};
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);
    display: flex;
    flex-direction: row;
    align-items: left;
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-direction: column;
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
    a {
        color: ${({ theme }) => theme.black};
    }
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

const Registration = styled.div`
    margin-left: 2rem;
    a {
        color: ${({ theme }) => theme.blue};
        text-align: center;
        font-variant: small-caps;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 0 2rem;
        -webkit-transition: color 0.2s;
        &:hover {
            color: crimson;
        }
        @media (max-width: ${props => props.theme.mobileSize}) {
            padding: 0;
        }
        i {
            @media (max-width: ${props => props.theme.mobileSize}) {
                display: none;
            }
        }
    }
`;

export default class ListItem extends Component {
    handleClick = event => {
        event.stopPropagation();
        event.nativeEvent.stopImmediatePropagation();
    };

    render() {
        const { talk, currentTag } = this.props;
        return (
            <Item>
                <Calendar date={talk.date} edition={talk.edition} />
                <Description>
                    <Title><Link to={`/talks/${talk.slug}`}>{talk.title}</Link></Title>
                    <Speakers>
                        {talk.speakers.length > 0 &&
                            talk.speakers.map(speaker => (
                                <MinimalView
                                    speaker={speaker}
                                    key={speaker.slug}
                                />
                            ))}
                    </Speakers>
                    <Resume>{talk.description}</Resume>
                    <Tags tags={talk.tags} currentTag={currentTag} />
                </Description>
                {isBefore(new Date(), new Date(talk.date)) &&
                    talk.meetupId && (
                        <Registration>
                            <a
                                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${
                                    talk.meetupId
                                }/`}
                                onClick={this.handleClick}
                            >
                                <i className="fa fa-meetup fa-5x" />
                                <p>Inscrivez-vous !</p>
                            </a>
                        </Registration>
                    )}
            </Item>
        );
    }
}
