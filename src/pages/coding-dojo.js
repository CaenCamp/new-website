import { Helmet } from 'react-helmet';
import React from 'react';

import { Content, LeftColumn } from '../components/Content';
import { formatDojoWithCraftsmen } from '../utils/formatters';
import SideMenu from '../components/SideMenu';
import { DojoListItem } from '../components/dojos/listItem';

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
                            <DojoListItem key={dojo.id} dojo={dojo} />
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
