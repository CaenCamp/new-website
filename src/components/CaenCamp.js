import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const CaenCampContainer = styled.div`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2 {
        font-size: 2.5rem;
    }
    p {
        font-size: 1.3rem;
        line-height: 1.8rem;
    }
`;
const Overview = styled.div`
    text-align: left;
    width: 65%;
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

export default ({ talks, speakers, dojos }) => (
    <CaenCampContainer>
        <Overview>
            <h2>Qu’est-ce que les CaenCamp.s ?</h2>
            <p>
                Ce sont des moments de rencontre organisés sur{' '}
                <strong>Caen</strong>, par et pour toutes les personnes qui
                aiment ou trouvent un intérêt dans le{' '}
                <strong>code et la programmation</strong>.<br />
                Une rencontre régulière est organisée{' '}
                <strong>chaque dernier mardi du mois</strong> avec une sujet
                présenté par un <Link to="/speakers">speaker</Link> de la
                communauté sur un format classique de{' '}
                <Link to="/talks">talk</Link>. Mais d’autres rencontres peuvent
                librement s’organiser, comme les{' '}
                <Link to="/coding-dojo">dojos</Link>.
            </p>
            <p>
                Les CaenCamp.s ne vivent que par{' '}
                <Link to="/call-for-speakers">
                    l’investissement des membres de sa communauté
                </Link>{' '}
                et ne dépendent d’aucune chapelle ni d’aucune entreprise. Nous
                tenons cependant à remercier le{' '}
                <a href="http://www.forum-digital.fr/">forum digital</a> d’avoir
                accueilli une majorité de nos rencontres.
            </p>
            <p>
                Sans forme d’organisation formelle, les CaenCamp.s existent
                pourtant depuis <strong>2012</strong>.
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
            <StyledLink to="/coding-dojo">
                <i className="fa fa-keyboard-o fa-5x" aria-hidden="true" />
                <span>{dojos} dojos</span>
            </StyledLink>
        </Stats>
    </CaenCampContainer>
);
