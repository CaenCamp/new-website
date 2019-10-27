import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import { DojoListItem } from '../components/dojos/listItem';
import { formatSpeakerWithAll } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import BackToList from '../components/BackToList';
import Layout from '../components/layout';
import Links from '../components/speakers/Links';
import TalkListItem from '../components/talks/listItem';
import DevopsListItem from '../components/ccds/listItem';

const SpeakerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin: 4rem 0;
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 0 1rem;
`;

const SpeakerBio = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0;
    padding: 0;
`;

export const Name = styled.h1`
    font-size: 2rem;
    text-align: left;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.black};
`;

const TalksContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DojoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default ({ data }) => {
    const speaker = formatSpeakerWithAll(
        data.rawSpeaker,
        data.talks.edges,
        data.lightnings.edges,
        data.dojos.edges,
        data.devops.edges,
    );
    return (
        <Layout>
            <SingleColumn>
                <Helmet>
                    <title>
                        {speaker.firstName} {speaker.lastName}
                    </title>
                    <meta name="description" content="A trouver" />
                    <meta name="keywords" content="A voir" />
                </Helmet>
                <BackToList path="/speakers" />
                <SpeakerContainer>
                    <SpeakerBio>
                        <Profile src={`/speakers/${speaker.picture}`} />
                        <Links links={speaker.links} />
                    </SpeakerBio>
                    <SpeakerBio>
                        <Name>
                            {speaker.firstName} {speaker.lastName}
                        </Name>
                        <div
                            dangerouslySetInnerHTML={{ __html: speaker.html }}
                        />
                    </SpeakerBio>
                </SpeakerContainer>

                {speaker.talks.length > 0 && (
                    <TalksContainer>
                        <h2>
                            <i className="fa fa-bullhorn" aria-hidden="true" />{' '}
                            {speaker.talks.length === 1
                                ? 'Son Talk'
                                : 'Ses Talks'}
                        </h2>
                        {speaker.talks.map(lightning => (
                            <TalkListItem
                                key={lightning.id}
                                talk={{
                                    ...lightning,
                                    speakers: [],
                                }}
                            />
                        ))}
                    </TalksContainer>
                )}

                {speaker.devops.length > 0 && (
                    <TalksContainer>
                        <h2>
                            {speaker.devops.length === 1
                                ? 'Son Devops'
                                : 'Ses Devops'}
                        </h2>
                        {speaker.devops.map(edition => (
                            <DevopsListItem
                                key={edition.id}
                                edition={{
                                    ...edition,
                                    talks: edition.talks.map(t => ({
                                        ...t,
                                        speakers: [],
                                    })),
                                }}
                            />
                        ))}
                    </TalksContainer>
                )}

                {speaker.lightning.length > 0 && (
                    <TalksContainer>
                        <h2>
                            <i className="fa fa-bolt" aria-hidden="true" />{' '}
                            {speaker.lightning.length === 1
                                ? 'Son Lightning Talk'
                                : 'Ses Lightning Talks'}
                        </h2>
                        {speaker.lightning.map(talk => (
                            <TalkListItem
                                key={talk.id}
                                talk={{
                                    ...talk,
                                    speakers: [],
                                }}
                            />
                        ))}
                    </TalksContainer>
                )}

                {speaker.dojos.length > 0 && (
                    <DojoContainer>
                        <h2>
                            {speaker.dojos.length === 1
                                ? 'Son Dojo'
                                : 'Ses Dojos'}
                        </h2>
                        {speaker.dojos.map(dojo => (
                            <DojoListItem
                                key={dojo.id}
                                dojo={{
                                    ...dojo,
                                    craftsmen: [],
                                }}
                            />
                        ))}
                    </DojoContainer>
                )}
            </SingleColumn>
        </Layout>
    );
};

export const query = graphql`
    query SpeakerBySlug($slug: String!) {
        rawSpeaker: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                firstName
                lastName
                picture
                resume
                links {
                    title
                    url
                }
                slug
            }
        }
        talks: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { glob: "**/talks/**" }
                frontmatter: { published: { eq: true } }
            }
            sort: { order: DESC, fields: [frontmatter___edition] }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        edition
                        title
                        slug
                        speakers
                        date
                        tags
                        description
                        video
                    }
                }
            }
        }
        lightnings: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { glob: "**/lightnings/**" }
                frontmatter: { published: { eq: true } }
            }
            sort: { order: DESC, fields: [frontmatter___edition] }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        edition
                        title
                        slug
                        speakers
                        date
                        tags
                        description
                    }
                }
            }
        }
        dojos: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/dojos/**" } }
            sort: { order: DESC, fields: [frontmatter___edition] }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        craftsmen
                        date
                        description
                        tags
                        edition
                    }
                }
            }
        }
        devops: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/ccd/**" } }
            sort: { order: DESC, fields: [frontmatter___edition] }
        ) {
            edges {
                node {
                    id
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
            }
        }
    }
`;
