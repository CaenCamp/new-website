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
                <img src={logo} alt="Qu’est-ce que le Coding Caen Camp ?" />
            </center>
            <p>
                Parallèlement aux rencontres autour des présentations techniques du CaenCamp, certains membres du collectif ont souhaité se retrouver pour aborder plus directement leur activité quotidienne : écrire du code.
            </p>
            <p>
                De cette volonté est né le Coding CaenCamp : un moment de rencontre tous <strong>les seconds jeudis du mois</strong> durant lequel nous pouvons coder autour d'outils utiles à l'animation du CaenCamp, mais aussi de projets locaux sur lesquels des membres souhaitent s'investir avec le soutien d'autres développeurs. Étant accueillis par le Dôme, nous pouvons aussi profiter de l'expérience de son Fablab pour aborder des projets plus matériels en sortant parfois le fer à souder.
            </p>
            <p>
                Tout comme le CaenCamp, le Coding CaenCamp est <strong>gratuit</strong>, ouvert à <strong>tous.tes les développeur.euses</strong> du Calvados, que ces personnes soient juniors, séniores, professionnelles, étudiantes ou juste curieuses. 
            </p>
        </Overview>
    </CaenCampContainer>
);
