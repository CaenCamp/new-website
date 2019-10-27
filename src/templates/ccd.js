import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import { formatDevopsWithSpeakers } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import { SpeakerListItem } from '../components/speakers/listItem';
import BackToList from '../components/BackToList';
import Calendar from '../components/talks/Calendar';
import Layout from '../components/layout';
import SpeakerTalk from '../components/speakers/SpeakerTalk';

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

const MeetupLink = styled.a`
    color: ${({ theme }) => theme.black};
    @media (max-width: ${props => props.theme.mobileSize}) {
        text-align: center;
        font-weight: bold;
        font-size: 1.5rem;
    }
`;

export default ({ data }) => {
    const edition = formatDevopsWithSpeakers(
        data.rawEdition,
        data.speakers.edges,
    );
    const speakers = edition.talks
        .map(talk => talk.speakers)
        .reduce((acc, spt) => [...acc, ...spt], []);

    return (
        <Layout>
            <SingleColumn>
                <Helmet>
                    <title>{edition.title}</title>
                    <meta name="description" content={edition.description} />
                </Helmet>
                <BackToList path="/caen-camp-devops" />
                <TalkContainer>
                    <DateAndSpeakers>
                        <Calendar
                            date={edition.date}
                            edition={edition.edition}
                        />
                        {speakers.map(speaker => (
                            <SpeakerTalk key={speaker.slug} speaker={speaker} />
                        ))}
                        {edition.meetupId && (
                            <MeetupLink
                                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${edition.meetupId}/`}
                            >
                                <i className="fa fa-meetup fa-5x" />
                            </MeetupLink>
                        )}
                    </DateAndSpeakers>
                    <div>
                        <Description>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: edition.html,
                                }}
                            />
                        </Description>
                    </div>
                    <DateAndSpeakersMobile>
                        <Calendar
                            date={edition.date}
                            edition={edition.edition}
                        />
                        {edition.meetupId && (
                            <MeetupLink
                                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${edition.meetupId}/`}
                            >
                                <i className="fa fa-meetup fa-5x" />
                            </MeetupLink>
                        )}
                        {speakers.map(speaker => (
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
    query DevopsBySlug($slug: String!) {
        rawEdition: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                slug
                date
                description
                edition
                meetupId
                talks {
                    title
                    speakers
                }
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
                        picture
                        slug
                    }
                }
            }
        }
    }
`;
