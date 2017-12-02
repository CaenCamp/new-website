import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default ({ data }) => {
    const rawSpeakers = data.talks.edges.reduce(
        (all, talk) => [...all, ...talk.node.frontmatter.speakers],
        [],
    );
    const speakers = Array.from(new Set(rawSpeakers)).sort();

    return (
        <div>
            <Helmet title="CaenCamp: les talks">
                <meta
                    name="description"
                    content="Tous les speakers des CaenCamp"
                />
            </Helmet>
            <Content id="speakersContent">
                <LeftColumn>
                    <h1>Tous les speakers</h1>
                    <ul>
                        {speakers.map(speaker => (
                            <li key={speaker}>{speaker}</li>
                        ))}
                    </ul>
                </LeftColumn>
                <SideMenu />
            </Content>
        </div>
    );
};

export const query = graphql`
    query SpeakersQuery {
        talks: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___edition] }
            filter: { fileAbsolutePath: { glob: "**/talks/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        speakers
                    }
                }
            }
        }
    }
`;
