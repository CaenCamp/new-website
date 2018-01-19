import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import { Content, SingleColumn } from '../components/Content';
import { formatSpeakerWithTalksAndDojos } from '../utils/formatters';
import { SpeakerListItem } from '../components/speakers/listItem';

export const SpeakerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: left;
`;

export default ({ data }) => {
    const speakers = data.speakers.edges.map(speaker =>
        formatSpeakerWithTalksAndDojos(speaker.node),
    );

    return (
        <div>
            <Helmet title="CaenCamp: proposez un talk">
                <meta name="description" content="Participez CaenCamp" />
            </Helmet>
            <Content id="callForPaperContent">
                <SingleColumn>
                    <h1>Ils ont fait les CaenCamp.s</h1>
                    <SpeakerContainer>
                        {speakers.map(speaker => (
                            <SpeakerListItem
                                key={speaker.id}
                                speaker={speaker}
                            />
                        ))}
                    </SpeakerContainer>
                </SingleColumn>
            </Content>
        </div>
    );
};

export const query = graphql`
    query SpeakersQuery {
        speakers: allMarkdownRemark(
            sort: { order: ASC, fields: [frontmatter___lastName] }
            filter: { fileAbsolutePath: { glob: "**/speakers/**" } }
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
