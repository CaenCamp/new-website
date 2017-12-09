import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import { formatTalkWithSpeakers } from '../utils/formatters';
import { TalkListItem } from '../components/talks/listItem';
import SideMenu from '../components/SideMenu';

export default ({ data }) => {
    const talks = data.talks.edges.map(talk =>
        formatTalkWithSpeakers(talk.node, data.speakers.edges),
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
                            <TalkListItem key={talk.id} talk={talk} />
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
