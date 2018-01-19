import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    margin-top: 0;
    margin-left: auto;
    a {
        display: inline-block;
        color: #333;
        padding: 0.5rem 0.75rem;
        &:hover {
            background-color: #eee;
            color: #555;
        }
    }
`;

export default () => (
    <Nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </Nav>
);
