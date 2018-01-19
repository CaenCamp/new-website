import React from 'react';
import PropTypes from 'prop-types';

module.exports = class HTML extends React.Component {
    static propTypes = {
        headComponents: PropTypes.node,
        preBodyComponents: PropTypes.node,
        body: PropTypes.node,
        postBodyComponents: PropTypes.node,
    };

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, width=device-width"
                    />
                    {this.props.headComponents}
                </head>
                <body>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
};
