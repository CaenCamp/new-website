import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default ({ data }) => (
    <div>
        <Helmet title="CaenCamp: les talks">
            <meta
                name="description"
                content="Retrouvez tous les talks des CaenCamp"
            />
        </Helmet>
        <Content id="talksContent">
            <LeftColumn>
                <h1>Tous les talks</h1>
                <ul>
                    {data.talks.edges.map(talk => (
                        <li key={talk.node.id}>
                            Edition {talk.node.frontmatter.edition}:{' '}
                            <a href={`talks/${talk.node.frontmatter.slug}`}>
                                {talk.node.frontmatter.title}
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
    query TalksQuery {
        talks: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___edition] }
            filter: { fileAbsolutePath: { glob: "**/talks/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        edition
                        title
                        slug
                    }
                }
            }
        }
    }
`;
