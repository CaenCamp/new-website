import Helmet from 'react-helmet';
import React from 'react';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

import { SingleColumn } from '../components/Content';

export default ({ data }) => {
    const dojo = data.markdownRemark;
    return (
        <SingleColumn>
            <Helmet>
                <title>{dojo.frontmatter.title}</title>
                <meta
                    name="description"
                    content={dojo.frontmatter.description}
                />
                <meta name="keywords" content={`${dojo.frontmatter.tags}`} />
            </Helmet>
            <a href="/coding-dojo">&lt;- Retour au Dojo</a>
            <div>
                <h1>{dojo.frontmatter.title}</h1>
                <p>
                    {format(dojo.frontmatter.date, 'DD MMMM YYYY', { locale })}
                </p>
                <p>{`${dojo.frontmatter.tags}`}</p>
                <p>{dojo.frontmatter.description}</p>
            </div>

            <div dangerouslySetInnerHTML={{ __html: dojo.html }} />
        </SingleColumn>
    );
};

export const query = graphql`
    query DojoQuery($slug: String!) {
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
