import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

import favicon from '../../static/favicon/favicon-16x16.png';
import FooterContent from '../components/Footer';
import HeaderContent from '../components/Header';
import theme from '../utils/theme';

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 5rem 1fr auto;
    grid-template-areas:
        'h h h h h h h h h h h h'
        '. . c c c c c c c c . .'
        'f f f f f f f f f f f f';
    @media (max-width: ${props => props.theme.mobileSize}) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 0.2rem 1fr auto;
        grid-template-areas:
            'h h h'
            'c c c'
            'f f f';
    }
`;

const Header = styled.header`
    grid-area: h;
    z-index: 9;
    position: 1;
`;

const Content = styled.section`
    grid-area: c;
    z-index: 8;
    position: 2;
    padding: 3rem 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        padding: 5rem 0;
    }
`;
const Footer = styled.footer`
    grid-area: f;
    position: 3;
`;

class TemplateWrapper extends Component {
    render() {
        const { children } = this.props;

        return (
            <StaticQuery
                query={graphql`
                    query AboutQuery {
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
                render={data => (<ThemeProvider theme={theme}>
                    <div>
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
                            <Content>
                                {children({
                                    ...this.props,
                                    nextMeetup: data ? data.nextMeetup : null,
                                })}
                            </Content>
                            <Footer>
                                <FooterContent
                                    socialLinks={data.site.siteMetadata.socialLinks}
                                />
                            </Footer>
                        </Container>
                    </div>
                </ThemeProvider>)
                }
                />
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
