import React from 'react';
import styled from 'styled-components';

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
