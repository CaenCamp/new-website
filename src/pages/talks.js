import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby'
import styled from 'styled-components';

import { Content, SingleColumn } from '../components/Content';
import { formatTalkWithSpeakers } from '../utils/formatters';
import TalkListItem from '../components/talks/listItem';

const TalksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: left;
`;

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
                <SingleColumn>
                    <TalksContainer>
                        {talks.map(talk => (
                            <TalkListItem key={talk.id} talk={talk} />
                        ))}
                    </TalksContainer>
                </SingleColumn>
            </Content>
        </div>
    );
};

export const query = graphql`
    query TalksQuery {
        talks: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___edition] }
            filter: {
                fileAbsolutePath: { glob: "**/talks/**" }
                frontmatter: { published: { eq: true } }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        date
                        description
                        edition
                        slug
                        speakers
                        tags
                        title
                        video
                        meetupId
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
                        links {
                            title
                            url
                        }
                        picture
                        slug
                    }
                }
            }
        }
    }
`;
