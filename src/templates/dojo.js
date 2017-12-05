import Helmet from 'react-helmet';
import React from 'react';
import format from 'date-fns/format';
import locale from 'date-fns/locale/fr';

import { SingleColumn } from '../components/Content';
import { formatDojoWithCraftsmen } from '../utils/formatters';

export default ({ data }) => {
    const dojo = formatDojoWithCraftsmen(data.rawDojo, data.craftsmen.edges);
    return (
        <SingleColumn>
            <Helmet>
                <title>{dojo.title}</title>
                <meta name="description" content={dojo.description} />
                <meta name="keywords" content={`${dojo.tags}`} />
            </Helmet>
            <a href="/coding-dojo">&lt;- Retour au Dojo</a>

            <h1>{dojo.title}</h1>
            <p>{format(dojo.date, 'DD MMMM YYYY', { locale })}</p>
            <p>{`${dojo.tags}`}</p>
            <p>{dojo.description}</p>
            <div dangerouslySetInnerHTML={{ __html: dojo.html }} />
            {dojo.craftsmen.length > 0 && (
                <div>
                    <h3>Craftmen</h3>
                    <ul>
                        {dojo.craftsmen.map(craftman => (
                            <li key={craftman.slug}>
                                <a href={`/speakers/${craftman.slug}`}>
                                    {craftman.firstName} {craftman.lastName}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </SingleColumn>
    );
};

export const query = graphql`
    query DojoQuery($slug: String!) {
        rawDojo: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                tags
                description
                craftsmen
            }
        }
        craftsmen: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/speakers/**" } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        firstName
                        lastName
                        slug
                    }
                }
            }
        }
    }
`;
