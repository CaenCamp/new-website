import { Helmet } from 'react-helmet';
import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Content, SingleColumn } from '../components/Content';
import CCC from '../components/CodingCaenCamp';
import { formatGraphContent } from '../utils/formatters';
import { CampListItem } from '../components/cccs/list-item';

export const Thanks = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

export default ({ data }) => {
    const cccs = data.cccs.edges.map(camp => formatGraphContent(camp.node));
    return (
        <div>
            <Helmet title="CaenCamp: les Coding Caen Camp (CCC)">
                <meta
                    name="description"
                    content="Affutez vos skills aux Coding Caen Camp"
                />
            </Helmet>
            <Content id="dojoContent">
                <SingleColumn>
                    <CCC />
                    {cccs &&
                        cccs.map(camp => (
                            <CampListItem key={camp.id} camp={camp} />
                        ))}
                    <Thanks>
                        <p>
                            Un grand merci à Emmanuelle et Sylvain de{' '}
                            <a href="https://www.hey-coworking.com/">
                                HEY! coworking
                            </a>{' '}
                            pour avoir accepter de nous accueillir une fois par
                            mois.
                        </p>
                    </Thanks>
                </SingleColumn>
            </Content>
        </div>
    );
};

export const query = graphql`
    query CccsQuery {
        cccs: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { fileAbsolutePath: { glob: "**/ccc/**" } }
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
                        image
                    }
                }
            }
        }
    }
`;
