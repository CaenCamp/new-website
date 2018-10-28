import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

import { formatTalkWithLightningsAndSpeakers } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import { SpeakerListItem } from '../components/speakers/listItem';
import BackToList from '../components/BackToList';
import Calendar from '../components/talks/Calendar';
import Layout from '../components/layout';
import SpeakerTalk from '../components/speakers/SpeakerTalk';
import Tags from '../components/talks/Tags';
import MinimalView from '../components/speakers/MinimalView';

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
    margin-bottom: 5rem;
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
const Picture = styled.img`
    margin: 1rem auto;
    height: auto;
    width: auto;
    max-width: 15rem;
    max-height: 15rem;
`;
const Speakers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin-bottom: 0.5rem;
`;

const Talk = ({ talk, type }) => (
    <Description>
        <Title>
            {type === 'talk' &&
                talk.lightnings &&
                !!talk.lightnings.length && (
                    <React.Fragment>
                        <i className="fa fa-bullhorn" aria-hidden="true" />{' '}
                    </React.Fragment>
                )}
            {type === 'lightning' && (
                <React.Fragment>
                    <i className="fa fa-bolt" aria-hidden="true" />{' '}
                </React.Fragment>
            )}
            {talk.title}
        </Title>
        <Speakers>
            {talk.speakers.length > 0 &&
                talk.speakers.map(speaker => (
                    <MinimalView speaker={speaker} key={speaker.slug} />
                ))}
        </Speakers>
        <Tags tags={talk.tags} />
        <div dangerouslySetInnerHTML={{ __html: talk.html }} />
        {talk.video && (
            <VideoContainer>
                <StyledReactPlayer
                    url={talk.video}
                    width="100%"
                    height="100%"
                    controls="true"
                />
            </VideoContainer>
        )}
        {!talk.video &&
            talk.picture && <Picture src={`/talks/${talk.picture}`} />}
    </Description>
);

export default ({ data }) => {
    const talk = formatTalkWithLightningsAndSpeakers(
        data.rawTalk,
        data.speakers.edges,
        data.lightnings.edges,
    );

    return (
        <Layout>
            <SingleColumn>
                <Helmet>
                    <title>{talk.title}</title>
                    <meta name="description" content={talk.description} />
                    <meta name="keywords" content={`${talk.globalTags}`} />
                </Helmet>
                <BackToList path="/talks" />
                <TalkContainer>
                    <DateAndSpeakers>
                        <Calendar date={talk.date} edition={talk.edition} />
                        {talk.globalSpeakers.map(speaker => (
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
                    <div>
                        <Talk talk={talk} type="talk" />
                        {!!talk.lightnings.length &&
                            talk.lightnings.map(lightning => (
                                <Talk
                                    key={lightning.id}
                                    talk={lightning}
                                    type="lightning"
                                />
                            ))}
                    </div>
                    <DateAndSpeakersMobile>
                        <Calendar date={talk.date} edition={talk.edition} />
                        {talk.meetupId && (
                            <MeetupLink
                                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${
                                    talk.meetupId
                                }/`}
                            >
                                <i className="fa fa-meetup fa-5x" />
                            </MeetupLink>
                        )}
                        {talk.globalSpeakers.map(speaker => (
                            <SpeakerListItem
                                key={speaker.slug}
                                speaker={speaker}
                            />
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
                picture
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
        lightnings: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { glob: "**/lightnings/**" }
                frontmatter: { published: { eq: true } }
            }
        ) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        edition
                        title
                        slug
                        speakers
                        date
                        tags
                        description
                        picture
                        video
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
