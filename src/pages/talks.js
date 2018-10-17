import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';
import 'url-search-params-polyfill';

import { Content, SingleColumn } from '../components/Content';
import { formatTalkWithSpeakers } from '../utils/formatters';
import TalkListItem from '../components/talks/listItem';
import Tags from '../components/talks/Tags';

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
        .map(talk => formatTalkWithSpeakers(talk.node, data.speakers.edges))
        .map(talk => {
            talk.tags = talk.video ? ['video', ...talk.tags] : talk.tags;
            tags = tags.concat(talk.tags);
            return talk;
        })
        .filter(talk => !currentTag || talk.tags.indexOf(currentTag) !== -1)
    ;
    tags = Array.from(new Set(tags));

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
                    <TagList>
                        <Tags tags={tags} currentTag={currentTag} />
                    </TagList>
                    <TalksContainer>
                        {talks.map(talk => (
                            <TalkListItem key={talk.id} talk={talk} currentTag={currentTag} />
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
