import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby'
import Link from 'gatsby-link';
import styled from 'styled-components';

import { formatDojoWithCraftsmen } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import SpeakerTalk from '../components/speakers/SpeakerTalk';
import Calendar from '../components/talks/Calendar';
import Tags from '../components/talks/Tags';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.black};
`;

const DojoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin: 4rem 0;
`;

const DateAndSpeakers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 2rem;
    text-align: left;
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.black};
`;

export default ({ data }) => {
    const dojo = formatDojoWithCraftsmen(data.rawDojo, data.craftsmen.edges);
    return (
        <SingleColumn>
            <Helmet>
                <title>{dojo.title}</title>
                <meta name="description" content={dojo.description} />
                <meta name="keywords" content={`${dojo.tags}`} />
            </Helmet>
            <StyledLink to="/coding-dojo">
                <i className="fa fa-list-alt" aria-hidden="true" /> Retour à la
                liste
            </StyledLink>
            <DojoContainer>
                <DateAndSpeakers>
                    <Calendar date={dojo.date} edition={dojo.edition} />
                    {dojo.craftsmen.map(speaker => (
                        <SpeakerTalk key={speaker.slug} speaker={speaker} />
                    ))}
                </DateAndSpeakers>
                <Description>
                    <Title>{dojo.title}</Title>
                    <Tags tags={dojo.tags} />
                    <div dangerouslySetInnerHTML={{ __html: dojo.html }} />
                </Description>
            </DojoContainer>
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
                        picture
                        resume
                        links {
                            title
                            url
                        }
                        slug
                    }
                }
            }
        }
    }
`;
