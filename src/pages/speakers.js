import {graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import {Content, SingleColumn} from '../components/Content';
import {formatSpeakerWithTalksLightningsAndDojos} from '../utils/formatters';
import Layout from '../components/layout';
import {
    SpeakerListItem,
    Item,
    Profile,
    Name,
    Introduction,
} from '../components/speakers/listItem';

export const SpeakerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: left;
`;

export default ({data}) => {
    const speakers = data.speakers.edges.map(speaker =>
        formatSpeakerWithTalksLightningsAndDojos(speaker.node),
    );

    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp: proposez un talk">
                    <meta name="description" content="Participez CaenCamp" />
                </Helmet>
                <Content id="callForPaperContent">
                    <SingleColumn>
                        <SpeakerContainer>
                            {speakers.map(speaker => (
                                <SpeakerListItem
                                    key={speaker.id}
                                    speaker={speaker}
                                />
                            ))}
                            <Item>
                                <Link to="/call-for-speakers">
                                    <Profile src="/speakers/you.jpg" />
                                    <Name>Vous</Name>
                                    <Introduction>
                                        Rejoignez les autres speakers ! Proposez
                                        un sujet de talk.
                                    </Introduction>
                                </Link>
                            </Item>
                        </SpeakerContainer>
                    </SingleColumn>
                </Content>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query SpeakersQuery {
        speakers: allMarkdownRemark(
            sort: {order: ASC, fields: [frontmatter___lastName]}
            filter: {fileAbsolutePath: {glob: "**/speakers/**"}}
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        firstName
                        lastName
                        slug
                        resume
                        picture
                        links {
                            title
                            url
                        }
                    }
                }
            }
        }
    }
`;
