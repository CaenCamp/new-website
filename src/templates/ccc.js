import Helmet from 'react-helmet';
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { formatGraphContent } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import Calendar from '../components/talks/Calendar';

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
    const camp = formatGraphContent(data.rawCamp);
    return (
        <SingleColumn>
            <Helmet>
                <title>{camp.title}</title>
                <meta name="description" content={camp.description} />
            </Helmet>
            <StyledLink to="/coding-caen-camp">
                <i className="fa fa-list-alt" aria-hidden="true" /> Retour à la
                liste
            </StyledLink>
            <DojoContainer>
                <DateAndSpeakers>
                    <Calendar date={camp.date} edition={camp.edition} />
                </DateAndSpeakers>
                <Description>
                    <Title>{camp.title}</Title>
                    <div dangerouslySetInnerHTML={{ __html: camp.html }} />
                </Description>
            </DojoContainer>
        </SingleColumn>
    );
};

export const query = graphql`
    query cccQuery($slug: String!) {
        rawCamp: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                description
                image
                edition
            }
        }
    }
`;
