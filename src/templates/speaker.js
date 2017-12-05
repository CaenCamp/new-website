import Helmet from 'react-helmet';
import React from 'react';

import { SingleColumn } from '../components/Content';
import { formatSpeakerWithTalks } from '../utils/formatters';

export default ({ data }) => {
    const speaker = formatSpeakerWithTalks(data.rawSpeaker, data.talks.edges);
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
                            <li key={talk.id}>
                                Edition {talk.edition}:{' '}
                                <a href={`/talks/${talk.slug}`}>{talk.title}</a>
                            </li>
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
    }
`;
