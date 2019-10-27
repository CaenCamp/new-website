import React from 'react';
import styled from 'styled-components';

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

export default () => (
    <CaenCampContainer>
        <Overview>
            <p>
                L'idée d'organiser des évènements autour du mouvement{' '}
                <a href="https://fr.wikipedia.org/wiki/Devops">devops</a> n'est
                pas nouvelle. Si des interventions sur ce thème ont déjà eu lieu
                aux CaenCamp (comme l'
                <a href="https://www.caen.camp/talks/edition-36-introduction-au-devops">
                    Introduction au DevOps
                </a>{' '}
                de <a href="https://twitter.com/GaelReyrol">Gaël</a>), des
                rencontres plus régulières ont commencé l'année dernière sous
                l'impulsion de{' '}
                <a href="https://www.doyoubuzz.com/alix-frederic">
                    Frédéric Alix
                </a>
                .
            </p>
            <p>
                Militant pour les mêmes valeurs de collectif et de partage, nous
                avons décidé, en cette rentrée 2019, de mettre en communs nos
                efforts et de lancer les <strong>CaenCamp Devops</strong> !
            </p>
        </Overview>
    </CaenCampContainer>
);
