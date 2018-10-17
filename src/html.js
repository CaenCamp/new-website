import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
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
                    <link
                        href="https://fonts.googleapis.com/css?family=Work+Sans"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Roboto"
                        rel="stylesheet"
                    />
                    <script src="https://use.fontawesome.com/4e1eab6f03.js" />
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
}
