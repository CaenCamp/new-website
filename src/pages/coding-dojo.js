import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import { Content, SingleColumn } from '../components/Content';
import { formatDojoWithCraftsmen } from '../utils/formatters';
import { DojoListItem } from '../components/dojos/listItem';

export const DojoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: left;
`;

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
                <SingleColumn>
                    <DojoContainer>
                        {dojos.map(dojo => (
                            <DojoListItem key={dojo.id} dojo={dojo} />
                        ))}
                    </DojoContainer>
                </SingleColumn>
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
                        date
                        description
                        tags
                        edition
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
                        picture
                        slug
                    }
                }
            }
        }
    }
`;
