import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import Logo from './Logo';
import Nav from './Nav';

const HeaderContent = styled.div`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    border-bottom: 1px solid #ececec;
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-direction: column;
    }
`;

export default () => (
    <HeaderContent>
        <div>
            <Link to="/">
                <Logo />
            </Link>
        </div>
        <Nav />
    </HeaderContent>
);
