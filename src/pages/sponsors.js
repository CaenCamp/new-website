import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { Content, SingleColumn } from '../components/Content';
import Layout from '../components/layout';
import { SponsorListItem } from '../components/sponsors/listItem';

export const SponsorContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: top;
    justify-content: left;
`;
export default ({ data }) => {
    const sponsors = data.site.siteMetadata.sponsors;
    const venues = data.site.siteMetadata.venues;
    return (
        <Layout>
            <div>
                <Helmet title="CaenCamp: les sponsors">
                    <meta
                        name="description"
                        content="Ils nous soutiennent. On leur dit un grand merci !"
                    />
                </Helmet>
                <Content id="welcomeUsContent">
                    <SingleColumn>
                        <h1>Les sponsors des CaenCamp.s</h1>
                        <p>
                            Ils nous soutiennent ! Nous les remercions
                            chaleureusement !
                        </p>
                        <SponsorContainer>
                            {sponsors.length > 0 &&
                                sponsors.map(sponsor => (
                                    <SponsorListItem
                                        key={sponsor.name}
                                        sponsor={sponsor}
                                    />
                                ))}
                        </SponsorContainer>
                        <p>
                            Ils nous accueillent ! Nous les remercions tout
                            aussi chaleureusement !
                        </p>
                        <SponsorContainer>
                            {venues.length > 0 &&
                                venues.map(sponsor => (
                                    <SponsorListItem
                                        key={sponsor.name}
                                        sponsor={sponsor}
                                    />
                                ))}
                        </SponsorContainer>
                    </SingleColumn>
                </Content>
            </div>
        </Layout>
    );
};
export const query = graphql`
    query {
        site {
            siteMetadata {
                sponsors {
                    name
                    website
                    logo
                }
                venues {
                    name
                    website
                    logo
                }
            }
        }
    }
`;
