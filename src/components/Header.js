import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Nav from './Nav';

const HeaderContent = styled.div`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    height: 5rem;
    left: 0;
    padding: 1rem;
    position: fixed;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
`;

export default () => (
    <HeaderContent>
        <div>
            <a href="/">
                <Logo id="mainLogo" />
            </a>
        </div>
        <Nav />
    </HeaderContent>
);
