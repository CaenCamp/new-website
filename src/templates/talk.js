import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { formatTalkWithSpeakers, formatMeetup } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import SpeakerTalk from '../components/speakers/SpeakerTalk';
import Calendar from '../components/talks/Calendar';
import Tags from '../components/talks/Tags';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.black};
`;

const TalkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin: 4rem 0;
`;

const DateAndSpeakers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 2rem;
    text-align: left;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.black};
`;

const renderMeetupLink = meetupId => {
    if (meetupId === null || meetupId === '') {
        return '';
    }

    return (
        <small>
            {` - `}
            <a
                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${meetupId}/`}
            >
                Meetup
            </a>
        </small>
    );
};

const renderMeetupRSVP = meetup => {
    if (meetup === null || meetup.yes_rsvp_count === null) {
        return '';
    }

    return <p>{meetup.yes_rsvp_count} participants</p>;
};

export default ({ data }) => {
    const talk = formatTalkWithSpeakers(data.rawTalk, data.speakers.edges);
    const meetup = formatMeetup(data.meetup);

    return (
        <SingleColumn>
            <Helmet>
                <title>{talk.title}</title>
                <meta name="description" content={talk.description} />
                <meta name="keywords" content={`${talk.tags}`} />
            </Helmet>
            <StyledLink to="/talks">
                <i className="fa fa-list-alt" aria-hidden="true" /> Retour à la
                liste
            </StyledLink>
            <TalkContainer>
                <DateAndSpeakers>
                    <Calendar date={talk.date} edition={talk.edition} />
                    {talk.speakers.map(speaker => (
                        <SpeakerTalk key={speaker.slug} speaker={speaker} />
                    ))}
                </DateAndSpeakers>
                <Description>
                    <Title>{talk.title}</Title>
                    <Tags tags={talk.tags} />
                    <div dangerouslySetInnerHTML={{ __html: talk.html }} />
                </Description>
            </TalkContainer>
            {renderMeetupLink(talk.meetupId)}
            {renderMeetupRSVP(meetup)}
        </SingleColumn>
    );
};

export const query = graphql`
    query TalkBySlug($slug: String!, $meetupId: String) {
        rawTalk: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                meetupId
                date
                tags
                description
                speakers
                edition
            }
        }
        speakers: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/speakers/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        firstName
                        lastName
                        links {
                            title
                            url
                        }
                        picture
                        resume
                        slug
                    }
                }
            }
        }
        meetup: allMeetupEvent(
            limit: 1
            filter: { id: { eq: $meetupId }, status: { eq: "past" } }
        ) {
            edges {
                node {
                    name
                    yes_rsvp_count
                }
            }
        }
    }
`;
