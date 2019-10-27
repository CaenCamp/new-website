import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import { Content, SingleColumn } from '../components/Content';
import CCD from '../components/CaenCampDevops';
import { formatDevopsWithSpeakers } from '../utils/formatters';
import DevopsListItem from '../components/ccds/listItem';

export const Thanks = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export default ({ data }) => {
    const ccds = data.ccds.edges.map(camp =>
        formatDevopsWithSpeakers(camp.node, data.devops.edges),
    );
    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp: les CaenCamp Devops (CCD)">
                    <meta
                        name="description"
                        content="Meetup Devops et Sysadmin"
                    />
                </Helmet>
                <Content id="devopsContent">
                    <SingleColumn>
                        <CCD />
                        {ccds &&
                            ccds.map(camp => (
                                <DevopsListItem key={camp.id} edition={camp} />
                            ))}
                    </SingleColumn>
                </Content>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query CcdsQuery {
        ccds: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fileAbsolutePath: { glob: "**/ccd/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        slug
                        date
                        description
                        edition
                        meetupId
                        talks {
                            title
                            speakers
                        }
                    }
                }
            }
        }
        devops: allMarkdownRemark(
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
