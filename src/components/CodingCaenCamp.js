import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import logo from '../../static/logoCCC.png';

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
    width: 100%;
    @media (max-width: ${props => props.theme.mobileSize}) {
        width: 95%;
    }
    img {
        margin: 0 auto;
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
    align-items: center;
    margin: 6rem 2rem 0 2rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        display: none;
    }
`;

export default () => (
    <CaenCampContainer>
        <Overview>
            <center>
                <img src={logo} alt="Qu’est-ce que les Coding Caen Camp.s ?" />
            </center>
            <p>
                Réaliser un <Link to="/talks">talk</Link> est toujours un
                exercice enrichissant : cela permet de formaliser et de partager
                ses connaissances. Mais ce n'est pas toujours facile d'y aborder
                de front notre activité quotidienne : coder.
            </p>
            <p>
                Si l'initiative n'est pas nouvelle (<Link to="/speakers/clement-alexandre">
                    Clément Alexandre
                </Link>{' '}
                et <Link to="/speakers/julien-anne">Julien Anne</Link> ont
                organisé des <Link to="/coding-dojo">coding dojos</Link> en
                2013), nous avons décidé de lancer les Coding Caen Camp.
            </p>
            <p>
                Le principe : se réunir une fois par mois pour … et bien …{' '}
                <strong>coder ensemble</strong>.
            </p>
        </Overview>
    </CaenCampContainer>
);
