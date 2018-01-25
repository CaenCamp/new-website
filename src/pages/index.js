import { Helmet } from 'react-helmet';
import React from 'react';
import isPast from 'date-fns/is_past';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.css';

import { Content, SingleColumn } from '../components/Content';
import { formatTalkWithSpeakers } from '../utils/formatters';
import TalkListItem from '../components/talks/listItem';
import CaenCamp from '../components/CaenCamp';

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

    let lastTalk = null;
    let nextTalk = null;
    if (isPast(new Date(talks[0].date))) {
        lastTalk = talks[0];
    } else {
        lastTalk = talks[1];
        nextTalk = talks[0];
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
                <SingleColumn>
                    <CaenCamp
                        talks={talks[0].edition}
                        speakers={data.speakers.edges.length}
                        dojos={data.dojos.edges.length}
                        partners="3"
                    />
                    {nextTalk && (
                        <TalksContainer>
                            <h2>Prochain talk</h2>
                            <TalkListItem talk={nextTalk} />
                        </TalksContainer>
                    )}
                    {lastTalk && (
                        <TalksContainer>
                            <h2>Dernier talk</h2>
                            <TalkListItem talk={lastTalk} />
                        </TalksContainer>
                    )}
                </SingleColumn>
            </Content>
        </div>
    );
};

export const query = graphql`
    query LastTalkQuery {
        talks: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___edition] }
            filter: { fileAbsolutePath: { glob: "**/talks/**" } }
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
        dojos: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/dojos/**" } }
        ) {
            edges {
                node {
                    id
                }
            }
        }
    }
`;
