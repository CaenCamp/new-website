import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

const formatTalkWithSpeakers = (talk, speakers) => ({
    id: talk.node.id,
    ...talk.node.frontmatter,
    speakers: talk.node.frontmatter.speakers
        .map(speaker => {
            const findedSpeaker = speakers.find(
                sp => sp.node.frontmatter.slug === speaker,
            );
            if (findedSpeaker) {
                return `${findedSpeaker.node.frontmatter.firstName} ${
                    findedSpeaker.node.frontmatter.lastName
                }`;
            } else {
                return null;
            }
        })
        .filter(sp => sp !== null),
});

export default ({ data }) => {
    const talks = data.talks.edges.map(talk =>
        formatTalkWithSpeakers(talk, data.speakers.edges),
    );

    return (
        <div>
            <Helmet title="CaenCamp: les talks">
                <meta
                    name="description"
                    content="Retrouvez tous les talks des CaenCamp"
                />
            </Helmet>
            <Content id="talksContent">
                <LeftColumn>
                    <h1>Tous les talks</h1>
                    <ul>
                        {talks.map(talk => (
                            <li key={talk.id}>
                                Edition {talk.edition}:{' '}
                                <a href={`/talks/${talk.slug}`}>{talk.title}</a>{' '}
                                par {`${talk.speakers}`}
                            </li>
                        ))}
                    </ul>
                </LeftColumn>
                <SideMenu />
            </Content>
        </div>
    );
};

export const query = graphql`
    query TalksQuery {
        talks: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___edition] }
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
