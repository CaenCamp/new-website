import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import isBefore from 'date-fns/isBefore';
import React from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';

import { Content, SingleColumn } from '../components/Content';
import {
    formatGraphContent,
    formatDevopsWithSpeakers,
    formatTalkWithLightningsAndSpeakers,
} from '../utils/formatters';
import TalkListItem from '../components/talks/listItem';
import { CampListItem } from '../components/cccs/listItem';
import Hero from '../components/Hero';
import DevopsListItem from '../components/ccds/listItem';
import CaenCamp from '../components/CaenCamp';
import Layout, { MaxWidthContent } from '../components/layouts/fullPageLayout';
import Button from '../components/Button';

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
    const cccs = data.cccs.edges.map(camp => formatGraphContent(camp.node));
    let lastCamp = null;
    let nextCamp = null;
    if (!isBefore(new Date(), new Date(cccs[0].date))) {
        lastCamp = cccs[0];
    } else {
        lastCamp = cccs[1];
        nextCamp = cccs[0];
    }

    const ccds = data.devops.edges.map(camp =>
        formatDevopsWithSpeakers(camp.node, data.speakers.edges),
    );
    let lastDevops = null;
    let nextDevops = null;
    if (!isBefore(new Date(), new Date(ccds[0].date))) {
        lastDevops = ccds[0];
    } else {
        lastDevops = ccds[1];
        nextDevops = ccds[0];
    }

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
                        <Hero>
                            {nextTalk && (
                                <TalksContainer>
                                    <h2>Prochain talk</h2>
                                    <TalkListItem talk={nextTalk} />
                                </TalksContainer>
                            )}
                            {nextDevops && (
                                <TalksContainer>
                                    <h2>Prochain CaenCamp Devops</h2>
                                    <DevopsListItem edition={nextDevops} />
                                </TalksContainer>
                            )}
                            {nextCamp && (
                                <TalksContainer>
                                    <h2>Prochain coding caen camp</h2>
                                    <CampListItem camp={nextCamp} />
                                </TalksContainer>
                            )}

                            {!nextCamp && !nextTalk && !nextDevops && (
                                <>
                                    <h2>Toi aussi deviens speaker !</h2>
                                    <Button to="/call-for-speakers">
                                        Proposer un sujet de talk
                                    </Button>
                                </>
                            )}
                        </Hero>
                        <MaxWidthContent>
                            <CaenCamp
                                cccs={data.cccs.edges.length}
                                dojos={data.dojos.edges.length}
                                lightnings={data.lightnings.edges.length}
                                partners="3"
                                speakers={data.speakers.edges.length}
                                talks={talks[0].edition}
                            />
                            {lastTalk && (
                                <TalksContainer>
                                    <h2>Dernier talk</h2>
                                    <TalkListItem talk={lastTalk} />
                                </TalksContainer>
                            )}
                            {lastDevops && (
                                <TalksContainer>
                                    <h2>Dernier CaenCamp Devops</h2>
                                    <DevopsListItem edition={lastDevops} />
                                </TalksContainer>
                            )}
                            {lastCamp && (
                                <TalksContainer>
                                    <h2>Dernier coding caen camp</h2>
                                    <CampListItem camp={lastCamp} />
                                </TalksContainer>
                            )}
                        </MaxWidthContent>
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
