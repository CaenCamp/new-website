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
        padding: 1.6rem 0;
        font-variant: small-caps;
        margin-right: 2rem;
        font-weight: bold;
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
        <Link to="/partnerships" activeStyle={activeLinkStyle}>
            les partenaires
        </Link>
    </Nav>
);
