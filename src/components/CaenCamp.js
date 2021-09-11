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

export default ({ talks, speakers, lightnings }) => (
    <CaenCampContainer>
        <Overview>
            <h2>Qu’est-ce que le CaenCamp ?</h2>
            <p>
                Le CaenCamp est un collectif ouvert à <strong>tous.tes les développeur.euses</strong> du Calvados, que ces personnes soient juniors, séniores, professionnelles, étudiantes ou juste curieuses. 
            </p>
            <p>
                Une rencontre, gratuite, est organisée <strong>chaque dernier jeudi du mois</strong> autour de sujets présentés par des membres du collectif souhaitant partager leur expérience. Ces sujets peuvent concerner n'importe quel langage de programmation, voir d'autres sujets que la programmation, du moment qu'ils concernent le monde du développement informatique.
            </p>
            <p>
                Sans forme de structure d'organisation formelle, le CaenCamp
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
        </Stats>
    </CaenCampContainer>
);
