import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Hello from '../components/Hello';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1024px;
`;

class TemplateWrapper extends Component {
    render() {
        const { children } = this.props;

        return (
            <Container>
                <Hello who="CaenCamp" />
                {children()}
            </Container>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
