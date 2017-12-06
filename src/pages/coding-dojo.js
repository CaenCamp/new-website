import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import { formatDojoWithCraftsmen } from '../utils/formatters';
import SideMenu from '../components/SideMenu';

export default ({ data }) => {
    const dojos = data.dojos.edges.map(dojo =>
        formatDojoWithCraftsmen(dojo.node, data.craftsmen.edges),
    );
    return (
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
                        {dojos.map(dojo => (
                            <li key={dojo.id}>
                                <a href={`/coding-dojo/${dojo.slug}`}>
                                    {dojo.title}
                                </a>{' '}
                                avec{' '}
                                {dojo.craftsmen.map(
                                    craftman =>
                                        `${craftman.firstName} ${
                                            craftman.lastName
                                        }, `,
                                )}
                            </li>
                        ))}
                    </ul>
                </LeftColumn>
                <SideMenu />
            </Content>
        </div>
    );
};

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
                        craftsmen
                    }
                }
            }
        }
        craftsmen: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/speakers/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        firstName
                        lastName
                        slug
                    }
                }
            }
        }
    }
`;
