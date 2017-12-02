import Helmet from 'react-helmet';
import React from 'react';

import { SingleColumn } from '../components/Content';

export default ({ data }) => {
    const speaker = data.markdownRemark;
    return (
        <SingleColumn>
            <Helmet>
                <title>
                    {speaker.frontmatter.firstName}{' '}
                    {speaker.frontmatter.lastName}
                </title>
                <meta name="description" content="A trouver" />
                <meta name="keywords" content="A voir" />
            </Helmet>
            <a href="/call-for-paper">&lt;- Retour à la liste des speakers</a>
            <div>
                <h1>
                    {speaker.frontmatter.firstName}{' '}
                    {speaker.frontmatter.lastName}
                </h1>
                <ul>
                    {speaker.frontmatter.links.map(link => (
                        <li key={link.title}>
                            <a href={link.url}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div dangerouslySetInnerHTML={{ __html: speaker.html }} />
        </SingleColumn>
    );
};

export const query = graphql`
    query SpeakerQuery($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                firstName
                lastName
                links {
                    title
                    url
                }
            }
        }
    }
`;
