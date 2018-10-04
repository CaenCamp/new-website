import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import Layout from '../components/layout';
import { formatTalkWithSpeakers } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import SpeakerTalk from '../components/speakers/SpeakerTalk';
import { SpeakerListItem } from '../components/speakers/listItem';
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
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-direction: column;
        margin: 1rem 0;
    }
`;

const DateAndSpeakers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-right: 2rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        display: none;
    }
`;
const DateAndSpeakersMobile = styled.div`
    display: none;
    @media (max-width: ${props => props.theme.mobileSize}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
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

const VideoContainer = styled.div`
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
    margin-bottom: 1rem;
`;
const StyledReactPlayer = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
`;
export const MeetupLink = styled.a`
    color: ${({ theme }) => theme.black};
    @media (max-width: ${props => props.theme.mobileSize}) {
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
    }
`;

export default ({ data }) => {
    const talk = formatTalkWithSpeakers(data.rawTalk, data.speakers.edges);

    return (
        <Layout>
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
                        {talk.meetupId && (
                            <MeetupLink
                                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${
                                    talk.meetupId
                                }/`}
                            >
                                <i className="fa fa-meetup fa-5x" />
                            </MeetupLink>
                        )}
                    </DateAndSpeakers>
                    <Description>
                        <Title>{talk.title}</Title>
                        <Tags tags={talk.tags} />
                        {talk.video && (
                            <VideoContainer>
                                <StyledReactPlayer
                                    url={talk.video}
                                    width="100%"
                                    height="100%"
                                />
                            </VideoContainer>
                        )}
                        <div dangerouslySetInnerHTML={{ __html: talk.html }} />
                    </Description>
                    <DateAndSpeakersMobile>
                        <Calendar date={talk.date} edition={talk.edition} />
                        {talk.meetupId && (
                            <MeetupLink
                                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${
                                    talk.meetupId
                                }/`}
                            >
                                <i className="fa fa-meetup" />
                            </MeetupLink>
                        )}
                        {talk.speakers.map(speaker => (
                            <SpeakerListItem key={speaker.slug} speaker={speaker} />
                        ))}
                    </DateAndSpeakersMobile>
                </TalkContainer>
            </SingleColumn>
        </Layout>
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
                video
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
