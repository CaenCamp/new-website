import Helmet from 'react-helmet';
import React from 'react';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

import { SingleColumn } from '../components/Content';

export default ({ data }) => {
    const talk = data.markdownRemark;
    return (
        <SingleColumn>
            <Helmet>
                <title>{talk.frontmatter.title}</title>
                <meta
                    name="description"
                    content={talk.frontmatter.description}
                />
                <meta name="keywords" content={`${talk.frontmatter.tags}`} />
            </Helmet>
            <a href="/talks">&lt;- Tous les talks</a>
            <div>
                <h1>{talk.frontmatter.title}</h1>
                <p>
                    {format(talk.frontmatter.date, 'DD MMMM YYYY', { locale })}
                </p>
                <p>{`${talk.frontmatter.tags}`}</p>
                <p>{talk.frontmatter.description}</p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: talk.html }} />
        </SingleColumn>
    );
};

export const query = graphql`
    query TalkQuery($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
                description
            }
        }
    }
`;
