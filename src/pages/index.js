import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import isBefore from 'date-fns/isBefore';
import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';

import { Content, SingleColumn } from '../components/Content';
import {
    formatTalkWithLightningsAndSpeakers,
} from '../utils/formatters';
import TalkListItem from '../components/talks/listItem';
import CaenCamp from '../components/CaenCamp';
import Layout from '../components/layout';

const TalksContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: left;
`;

export default ({ data }) => {
    const talks = data.talks.edges.map(talk =>
        formatTalkWithLightningsAndSpeakers(
            talk.node,
            data.speakers.edges,
            data.lightnings.edges,
        ),
    );

    let lastTalk = null;
    let nextTalk = null;
    if (!isBefore(new Date(), new Date(talks[0].date))) {
        lastTalk = talks[0];
    } else {
        lastTalk = talks[1];
        nextTalk = talks[0];
    }
    nextTalk = talks[0];
    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp">
                    <meta
                        name="description"
                        content="Welcome on the new CaenCamp site"
                    />
                </Helmet>
                <Content id="homeContent">
                    <SingleColumn>
                        <CaenCamp
                            lightnings={data.lightnings.edges.length}
                            speakers={data.speakers.edges.length}
                            talks={talks[0].edition}
                        />
                        {nextTalk && (
                            <TalksContainer>
                                <h2>Prochain talk</h2>
                                <TalkListItem talk={nextTalk} />
                            </TalksContainer>
                        )}
                    </SingleColumn>
                </Content>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query LastTalkQuery {
        talks: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___edition] }
            filter: {
                fileAbsolutePath: { glob: "**/talks/**" }
                frontmatter: { published: { eq: true } }
            }
        ) {
            edges {
                node {
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
        cccs: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {
                fileAbsolutePath: { glob: "**/ccc/**" }
                frontmatter: { published: { eq: true } }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        date
                        description
                        edition
                        image
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
                }
            }
        }
        devops: allMarkdownRemark(
            filter: {
                fileAbsolutePath: { glob: "**/ccd/**" }
                frontmatter: { published: { eq: true } }
            }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        date
                        description
                        edition
                        meetupId
                        talks {
                            title
                            speakers
                        }
                    }
                }
            }
        }
    }
`;
