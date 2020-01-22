import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const CaenCampContainer = styled.div`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: ${props => props.theme.mobileSize}) {
        justify-content: center;
    }
    h2 {
        font-size: 2.5rem;
        @media (max-width: ${props => props.theme.mobileSize}) {
            font-size: 1.6rem;
        }
    }
    p {
        font-size: 1.3rem;
        line-height: 1.8rem;
        @media (max-width: ${props => props.theme.mobileSize}) {
            font-size: 1rem;
            line-height: 1.3rem;
        }
    }
`;
const Overview = styled.div`
    text-align: left;
    width: 65%;
    @media (max-width: ${props => props.theme.mobileSize}) {
        width: 95%;
    }
    a {
        color: ${({ theme }) => theme.black};
        font-weight: bold;
        -webkit-transition: color 0.2s;
        &:hover {
            color: crimson;
        }
    }
`;

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 6rem 2rem 0 2rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        display: none;
    }
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.black};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin-bottom: 1rem;
    -webkit-transition: color 0.2s;
    &:hover {
        color: crimson;
    }
    span {
        margin-left: 1rem;
        font-size: 2rem;
    }
`;

export default ({ talks, speakers, cccs, lightnings }) => (
    <CaenCampContainer>
        <Overview>
            <h2>Qu’est-ce que les CaenCamp.s ?</h2>
            <p>
                C'est un collectif de <strong>développeurs caennais</strong>. Ce
                collectif organise des rencontres, généralement le dernier mardi
                du mois, avec un <Link to="/talks">sujet</Link> technique lié à
                notre métier présenté par un <Link to="/speakers">speaker</Link>{' '}
                de la communauté, parfois précédé par un{' '}
                <a href="https://medium.com/@ckoster22/why-your-company-should-be-doing-lightning-talks-c84b32e8f82b">
                    lightning talk
                </a>
                .
            </p>
            <p>
                Mais d'autres rencontres peuvent librement s'organiser sur des
                thématiques précises comme les{' '}
                <Link to="/coding-caen-camp">Coding CaenCamp.s</Link> ou les{' '}
                <Link to="/devops-caen-camp">Devops CaenCamp.s</Link>.
            </p>
            <p>
                Les CaenCamp.s ne vivent que par{' '}
                <Link to="/call-for-speakers">
                    l{"'"}
                    investissement des membres de sa communauté
                </Link>{' '}
                et ne dépendent d'aucune chapelle ni d'aucune entreprise. Pour
                autant le support des structures caennaises est le bienvenue, et
                nous tenons particulièrement à remercier le{' '}
                <a href="http://www.forum-digital.fr/">Forum Digital</a>, le{' '}
                <a href="http://ledome.info/">Dôme</a> ainsi que{' '}
                <a href="https://www.hey-coworking.com/">HEY! coworking</a> pour
                nous permettre d'organiser nos évènements en mettant à notre
                disposition des lieux pour nous retrouver.
            </p>
            <p>
                Sans forme de structure d'organisation formelle, les CaenCamp.s
                existent depuis <strong>2012</strong>.
            </p>
        </Overview>
        <Stats>
            <StyledLink to="/speakers">
                <i className="fa fa-user-o fa-5x" aria-hidden="true" />
                <span>{speakers} speakers</span>
            </StyledLink>
            <StyledLink to="/talks">
                <i className="fa fa-bullhorn fa-5x" aria-hidden="true" />
                <span>{talks} talks</span>
            </StyledLink>
            <StyledLink to="/talks">
                <i className="fa fa-bolt fa-5x" aria-hidden="true" />
                <span>{lightnings} lightning talks</span>
            </StyledLink>
            <StyledLink to="/coding-caen-camp">
                <i className="fa fa-keyboard-o fa-5x" aria-hidden="true" />
                <span>{cccs} Coding CaenCamp</span>
            </StyledLink>
            <StyledLink to="/devops-caen-camp">
                <i className="fa fa-server fa-5x" aria-hidden="true" />
                <span>1 Devops CaenCamp</span>
            </StyledLink>
        </Stats>
    </CaenCampContainer>
);
