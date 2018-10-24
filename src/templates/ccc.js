import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import React from 'react';
import styled from 'styled-components';

import { formatGraphContent } from '../utils/formatters';
import { SingleColumn } from '../components/Content';
import Calendar from '../components/talks/Calendar';
import Layout from '../components/layout';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.black};
`;

const CampContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    margin: 4rem 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`;

const DateAndSpeakers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-right: 2rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 2rem;
    text-align: left;
    padding: 0;
    margin: 0 0 1.5rem 0;
    color: ${({ theme }) => theme.black};
`;

const Image = styled.img`
    margin: 1rem;
    height: auto;
    width: auto;
    max-width: 15rem;
    max-height: 15rem;
    float: right;
`;

const MeetupLink = styled.a`
    color: ${({ theme }) => theme.black};
    font-size: 2rem;
    margin-top: 2rem;
    margin-left: 1rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        margin-top: 0.5rem;
    }
    i {
        font-size: 5rem;
    }
    &:hover {
        color: crimson;
    }
    transition: color 0.2s ease-out;
`;

export default ({ data }) => {
    const camp = formatGraphContent(data.rawCamp);
    return (
        <Layout>
            <SingleColumn>
                <Helmet>
                    <title>{camp.title}</title>
                    <meta name="description" content={camp.description} />
                </Helmet>
                <StyledLink to="/coding-caen-camp">
                    <i className="fa fa-list-alt" aria-hidden="true" /> Retour à
                    la liste
                </StyledLink>
                <CampContainer>
                    <DateAndSpeakers>
                        <Calendar date={camp.date} edition={camp.edition} />
                        {camp.meetupId && (
                            <MeetupLink
                                href={`https://www.meetup.com/fr-FR/CaenCamp/events/${
                                    camp.meetupId
                                }/`}
                            >
                                <i className="fa fa-meetup" />
                            </MeetupLink>
                        )}
                    </DateAndSpeakers>
                    <Description>
                        <Title>{camp.title}</Title>
                        <div>
                            <Image src={`/ccc/${camp.image}`} />
                            <div
                                dangerouslySetInnerHTML={{ __html: camp.html }}
                            />
                            {camp.meetupId && (
                                <div>
                                    <h2>S'inscrire</h2>

                                    <h3>
                                        Le nombre de places est limité à 20, et
                                        vous devez apporter votre laptop.
                                    </h3>
                                    <p>
                                        Pour le moment, les inscriptions se font
                                        sur
                                        <MeetupLink
                                            href={`https://www.meetup.com/fr-FR/CaenCamp/events/${
                                                camp.meetupId
                                            }/`}
                                        >
                                            Meetup{' '}
                                            <i className="fa fa-meetup" />
                                        </MeetupLink>
                                    </p>
                                </div>
                            )}
                        </div>
                    </Description>
                </CampContainer>
            </SingleColumn>
        </Layout>
    );
};

export const query = graphql`
    query cccQuery($slug: String!) {
        rawCamp: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date
                description
                edition
                image
                meetupId
                title
            }
        }
    }
`;
