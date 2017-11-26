import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from './Logo';

const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    & a {
        text-decoration: none;
        background-image: none;
    }
`;
export const Title = styled.h1`
    margin: 0;
    padding: 0;
`;
export const Baseline = styled.span`
    margin: 0;
    padding: 0.7rem 0 0 2rem;
    font-style: italic;
    font-size: 0.8rem;
`;

class MainHeader extends Component {
    render() {
        return (
            <Header>
                <a href="/">
                    <Logo id="mainLogo" />
                </a>
                <a href="/">
                    <Title id="mainTitle">CaenCamp</Title>
                </a>
                <Baseline id="baseLine">
                    Ici la baseline des Caencamp quand nous en aurons une.
                </Baseline>
            </Header>
        );
    }
}

export default MainHeader;
