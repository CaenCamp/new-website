import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Hello from '../components/hello';

class TemplateWrapper extends Component {
    render() {
        const { children } = this.props;

        return (
            <section>
                <Hello who="CaenCamp" />
                {children()}
            </section>
        );
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
