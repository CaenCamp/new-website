import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import favicon from '../../static/favicon/favicon-16x16.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1024px;
`;

class TemplateWrapper extends Component {
    render() {
        const { children, data } = this.props;

        return (
            <Container>
                <Helmet>
                    <link rel="icon" href={favicon} type="image/x-icon" />
                </Helmet>
                <Header
                    title={data.site.siteMetadata.title}
                    baseLine={data.site.siteMetadata.baseline}
                />
                {children({
                    ...this.props,
                    nextMeetup: data.nextMeetup || null,
                })}
                <Footer socialLinks={data.site.siteMetadata.socialLinks} />
            </Container>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export const query = graphql`
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
`;

export default TemplateWrapper;
