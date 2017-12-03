import Helmet from 'react-helmet';
import React from 'react';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

import { SingleColumn } from '../components/Content';
import { formatTalkWithSpeakers } from '../utils/formatters';

export default ({ data }) => {
    const talk = formatTalkWithSpeakers(data.rawTalk, data.speakers.edges);
    return (
        <SingleColumn>
            <Helmet>
                <title>{talk.title}</title>
                <meta name="description" content={talk.description} />
                <meta name="keywords" content={`${talk.tags}`} />
            </Helmet>
            <a href="/talks">&lt;- Tous les talks</a>
            <div>
                <h1>{talk.title}</h1>
                <p>{format(talk.date, 'DD MMMM YYYY', { locale })}</p>
                <p>{`${talk.tags}`}</p>
                <p>{talk.description}</p>
                <h3>Speakers</h3>
                <ul>
                    {talk.speakers.map(speaker => (
                        <li key={speaker.slug}>
                            <a href={`/speakers/${speaker.slug}`}>
                                {speaker.firstName} {speaker.lastName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div dangerouslySetInnerHTML={{ __html: talk.html }} />
        </SingleColumn>
    );
};

export const query = graphql`
    query TalkBySlug($slug: String!) {
        rawTalk: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
                description
                speakers
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
                        slug
                    }
                }
            }
        }
    }
`;
