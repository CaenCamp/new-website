import React from 'react';
import { Helmet } from 'react-helmet';

export default () => (
    <div>
        <Helmet title="CaenCamp">
            <meta
                name="description"
                content="Welcome on the new CaenCamp site"
            />
        </Helmet>
        <p>Welcome to our new website.</p>
    </div>
);
