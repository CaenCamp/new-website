import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Nav = styled.nav`
    margin-top: 0;
    margin-left: auto;
    margin-right: 5rem;
    a {
        font-size: 1.4rem;
        display: inline-block;
        color: ${({ theme }) => theme.grey};
        padding: 2.1rem 0;
        font-variant: small-caps;
        margin-right: 2rem;
        font-weight: bold;
        @media (max-width: ${props => props.theme.mobileSize}) {
            font-size: 1rem;
            padding: 0.5rem;
            margin-right: 0;
        }
    }
    @media (max-width: ${props => props.theme.mobileSize}) {
        margin: 0;
    }
`;

const activeLinkStyle = {
    fontSize: 'bold',
    borderBottom: '2px solid #193744',
    color: 'black',
    outline: 'none',
};

export default () => (
    <Nav>
        <Link exact to="/" activeStyle={activeLinkStyle}>
            accueil
        </Link>
        <Link to="/speakers" activeStyle={activeLinkStyle}>
            les speakers
        </Link>
        <Link to="/talks" activeStyle={activeLinkStyle}>
            les talks
        </Link>
        <Link to="/coding-dojo" activeStyle={activeLinkStyle}>
            les dojos
        </Link>
    </Nav>
);
