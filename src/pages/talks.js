import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';
import 'url-search-params-polyfill';

import { Content, SingleColumn } from '../components/Content';
import { formatTalkWithLightningsAndSpeakers } from '../utils/formatters';
import Layout from '../components/layout';
import Tags from '../components/talks/Tags';
import TalkListItem from '../components/talks/listItem';

const TagList = styled.div`
    @media (max-width: ${props => props.theme.mobileSize}) {
        display: none;
    }
`;

const TalksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: left;
`;

export default ({ data, location }) => {
    let tags = [];

    const params = new URLSearchParams(location.search);
    const currentTag = params.get('tag');

    const talks = data.talks.edges
        .map(talk =>
            formatTalkWithLightningsAndSpeakers(
                talk.node,
                data.speakers.edges,
                data.lightnings.edges,
            ),
        )
        .map(talk => {
            talk.tags = talk.video ? ['video', ...talk.tags] : talk.tags;
            talk.globalTags = talk.video
                ? ['video', ...talk.globalTags]
                : talk.globalTags;
            tags = tags.concat(talk.tags);
            return talk;
        })
        .filter(
            talk => !currentTag || talk.globalTags.indexOf(currentTag) !== -1,
        );
    tags = Array.from(new Set(tags));

    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp: les talks">
                    <meta
                        name="description"
                        content="Retrouvez tous les talks des CaenCamp"
                    />
                </Helmet>
                <Content id="talksContent">
                    <SingleColumn>
                        <TagList className="tagsList">
                            <Tags tags={tags} currentTag={currentTag} />
                        </TagList>
                        <TalksContainer className="talksContainer">
                            {talks.map(talk => (
                                <TalkListItem
                                    key={talk.id}
                                    talk={talk}
                                    currentTag={currentTag}
                                />
                            ))}
                        </TalksContainer>
                    </SingleColumn>
                </Content>
            </div>
        </Layout>
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
        lightnings: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { glob: "**/lightnings/**" }
                frontmatter: { published: { eq: true } }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        edition
                        title
                        description
                        tags
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
