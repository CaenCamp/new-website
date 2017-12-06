import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import { formatSpeakerWithTalksAndDojos } from '../utils/formatters';
import { SpeakerListItem } from '../components/speakers/listItem';
import SideMenu from '../components/SideMenu';

export default ({ data }) => {
    const speakers = data.speakers.edges.map(formatSpeakerWithTalksAndDojos);
    return (
        <div>
            <Helmet title="CaenCamp: proposez un talk">
                <meta name="description" content="Participez CaenCamp" />
            </Helmet>
            <Content id="callForPaperContent">
                <LeftColumn>
                    <h1>Participez !</h1>
                    <h1>Ils ont fait les CaenCamp.s</h1>
                    <ul>
                        {speakers.map(speaker => (
                            <SpeakerListItem
                                key={speaker.id}
                                speaker={speaker}
                            />
                        ))}
                    </ul>
                </LeftColumn>
                <SideMenu />
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
