import Helmet from 'react-helmet';
import React from 'react';

import { formatSpeakerWithTalksAndDojos } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import { TalkListItem } from '../components/talks/listItem';
import { DojoListItem } from '../components/dojos/listItem';

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
            <a href="/call-for-paper">&lt;- Retour à la liste des speakers</a>

            <h1>
                {speaker.firstName} {speaker.lastName}
            </h1>

            <div dangerouslySetInnerHTML={{ __html: speaker.html }} />

            {speaker.links.length > 0 && (
                <div>
                    <h2>Ses Liens</h2>
                    <ul>
                        {speaker.links.map(link => (
                            <li key={link.title}>
                                <a href={link.url}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {speaker.talks.length > 0 && (
                <div>
                    <h2>Ses talks</h2>
                    <ul>
                        {speaker.talks.map(talk => (
                            <TalkListItem
                                key={talk.id}
                                talk={{
                                    ...talk,
                                    speakers: [],
                                }}
                            />
                        ))}
                    </ul>
                </div>
            )}

            {speaker.dojos.length > 0 && (
                <div>
                    <h2>Ses Dojos</h2>
                    <ul>
                        {speaker.dojos.map(dojo => (
                            <DojoListItem
                                key={dojo.id}
                                dojo={{
                                    ...dojo,
                                    craftsmen: [],
                                }}
                            />
                        ))}
                    </ul>
                </div>
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
                links {
                    title
                    url
                }
                slug
            }
        }
        talks: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/talks/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        edition
                        title
                        slug
                        speakers
                    }
                }
            }
        }
        dojos: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/dojos/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        craftsmen
                    }
                }
            }
        }
    }
`;
