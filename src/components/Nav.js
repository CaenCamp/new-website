import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const Nav = styled.nav`
    margin: auto;
    a {
        font-size: 1.3rem;
        display: inline-block;
        color: ${({ theme }) => theme.grey};
        padding: 1.2rem 0;
        font-variant: small-caps;
        margin-right: 1rem;
        margin-left: 1rem;
        font-weight: bold;
        transition: 0.3s all ease;
        @media (max-width: ${props => props.theme.mobileSize}) {
            font-size: 1rem;
            padding: 0.5rem;
            margin-right: 0;
        }

        &:hover {
            color: ${({ theme }) => theme.blue};
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
        <Link to="/" activeStyle={activeLinkStyle}>
            accueil
        </Link>
        <Link to="/speakers" activeStyle={activeLinkStyle}>
            les speakers
        </Link>
        <Link to="/talks" activeStyle={activeLinkStyle}>
            les talks
        </Link>
        <Link to="/coding-caen-camp" activeStyle={activeLinkStyle}>
            les codings
        </Link>
        <Link to="/caen-camp-devops" activeStyle={activeLinkStyle}>
            les devops
        </Link>
    </Nav>
);
