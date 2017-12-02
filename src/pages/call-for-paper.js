import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default ({ data }) => (
    <div>
        <Helmet title="CaenCamp: proposez un talk">
            <meta name="description" content="Participez CaenCamp" />
        </Helmet>
        <Content id="callForPaperContent">
            <LeftColumn>
                <h1>Participez !</h1>
                <h1>Ils ont fait les CaenCamp.s</h1>
                <ul>
                    {data.speakers.edges.map(speaker => (
                        <li key={speaker.node.id}>
                            <a href={`/talks/${speaker.node.frontmatter.slug}`}>
                                {speaker.node.frontmatter.firstName}{' '}
                                {speaker.node.frontmatter.lastName}
                            </a>
                        </li>
                    ))}
                </ul>
            </LeftColumn>
            <SideMenu />
        </Content>
    </div>
);

export const query = graphql`
    query SpeakersQuery {
        speakers: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___lastName] }
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
                    }
                }
            }
        }
    }
`;
