import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import favicon from '../../../static/favicon/favicon-16x16.png';
import FooterContent from '../../components/Footer';
import HeaderContent from '../../components/Header';
import theme, { GlobalStyle } from '../../utils/theme';

const Container = styled.div`
    height: 100%;
    width: 100%;
    margin-top: 33px;
`;

export const MaxWidthContent = styled.div`
    max-width: 900px;
    margin: auto;
`;

const Header = styled.header`
`;

const Content = styled.section`
`;
const Footer = styled.footer`
`;

class TemplateWrapper extends Component {
    render() {
        const { children } = this.props;

        return (
            <StaticQuery
                query={graphql`
                    query HomeQuery {
                        site {
                            siteMetadata {
                                title
                                baseline
                                socialLinks {
                                    title
                                    url
                                }
                            }
                        }
                        nextMeetup: allMeetupEvent(
                            limit: 1
                            filter: { status: { eq: "upcoming" } }
                        ) {
                            edges {
                                node {
                                    name
                                    link
                                    yes_rsvp_count
                                }
                            }
                        }
                    }
                `}
                render={data => (
                    <ThemeProvider theme={theme}>
                        <>
                            <GlobalStyle />
                            <Container>
                                <Helmet>
                                    <link
                                        rel="icon"
                                        href={favicon}
                                        type="image/x-icon"
                                    />
                                </Helmet>
                                <Header>
                                    <HeaderContent />
                                </Header>
                                <Content>{children}</Content>
                                <Footer>
                                    <FooterContent
                                        socialLinks={
                                            data.site.siteMetadata.socialLinks
                                        }
                                    />
                                </Footer>
                            </Container>
                        </>
                    </ThemeProvider>
                )}
            />
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.object,
};

export default TemplateWrapper;
