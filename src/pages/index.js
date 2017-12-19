import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import { formatTalkWithSpeakers } from '../utils/formatters';
import SideMenu from '../components/SideMenu';

export default ({ data }) => {
    const talks = data.talks.edges.map(talk =>
        formatTalkWithSpeakers(talk.node, data.speakers.edges),
    );

    let lastTalk = null;
    if (talks.length) {
        lastTalk = talks[0];
    }

    return (
        <div>
            <Helmet title="CaenCamp">
                <meta
                    name="description"
                    content="Welcome on the new CaenCamp site"
                />
            </Helmet>
            <Content id="homeContent">
                <LeftColumn>
                    <h1 className="welcome">Welcome to our new website.</h1>
                    <h2 className="lasttalk">Dernier talk</h2>
                    <h4>
                        Edition {lastTalk.edition}:{' '}
                        <a href={`/talks/${lastTalk.slug}`}>{lastTalk.title}</a>
                    </h4>
                    <p>{lastTalk.description}</p>
                    {lastTalk.speakers.length > 0 ? 'par ' : ''}
                    {lastTalk.speakers.length > 0 &&
                        lastTalk.speakers.map(speaker => (
                            <a href={`/speakers/{speaker.slug}`}>
                                {speaker.firstName} {speaker.lastName}
                            </a>
                        ))}
                    <h4>
                        <a className="linkToTalks" href="/talks">
                            Tous les talks
                        </a>
                    </h4>
                </LeftColumn>
                <SideMenu />
            </Content>
        </div>
    );
};

export const query = graphql`
    query LastTalkQuery {
        talks: allMarkdownRemark(
            limit: 1
            sort: { order: DESC, fields: [frontmatter___edition] }
            filter: { fileAbsolutePath: { glob: "**/talks/**" } }
        ) {
            edges {
                node {
                    frontmatter {
                        edition
                        title
                        slug
                        description
                        speakers
                    }
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
                        slug
                    }
                }
            }
        }
    }
`;
