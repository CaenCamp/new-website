import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components';

import { formatSpeakerWithTalksAndDojos } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import TalkListItem from '../components/talks/listItem';
import { DojoListItem } from '../components/dojos/listItem';
import Links from '../components/speakers/Links';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.black};
`;

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
    const speaker = formatSpeakerWithTalksAndDojos(
        data.rawSpeaker,
        data.talks.edges,
        data.dojos.edges,
    );
    return (
        <SingleColumn>
            <Helmet>
                <title>
                    {speaker.firstName} {speaker.lastName}
                </title>
                <meta name="description" content="A trouver" />
                <meta name="keywords" content="A voir" />
            </Helmet>
            <StyledLink to="/speakers">
                <i className="fa fa-list-alt" aria-hidden="true" /> Retour à la
                liste
            </StyledLink>
            <SpeakerContainer>
                <SpeakerBio>
                    <Profile src={`/speakers/${speaker.picture}`} />
                    <Links links={speaker.links} />
                </SpeakerBio>
                <SpeakerBio>
                    <Name>
                        {speaker.firstName} {speaker.lastName}
                    </Name>
                    <div dangerouslySetInnerHTML={{ __html: speaker.html }} />
                </SpeakerBio>
            </SpeakerContainer>

            {speaker.talks.length > 0 && (
                <TalksContainer>
                    <h2>
                        {speaker.talks.length === 1 ? 'Son Talk' : 'Ses Talks'}
                    </h2>
                    {speaker.talks.map(talk => (
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
                        {speaker.dojos.length === 1 ? 'Son Dojo' : 'Ses Dojos'}
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
    }
`;
