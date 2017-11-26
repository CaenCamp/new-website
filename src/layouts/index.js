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
                {children()}
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
    }
`;

export default TemplateWrapper;
