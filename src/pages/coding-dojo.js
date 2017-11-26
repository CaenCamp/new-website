import React from 'react';
import { Helmet } from 'react-helmet';

import { Content, LeftColumn } from '../components/Content';
import SideMenu from '../components/SideMenu';

export default ({ data }) => (
    <div>
        <Helmet title="CaenCamp: les coding dojos">
            <meta
                name="description"
                content="Affutez vos skills au Dojo des CaenCamp"
            />
        </Helmet>
        <Content id="dojoContent">
            <LeftColumn>
                <h1>Le Dojo</h1>
                <ul>
                    {data.dojos.edges.map(dojo => (
                        <li key={dojo.node.id}>
                            <a
                                href={`/coding-dojo/${
                                    dojo.node.frontmatter.slug
                                }`}
                            >
                                {dojo.node.frontmatter.title}
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
    query DojosQuery {
        dojos: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fileAbsolutePath: { glob: "**/dojos/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`;
