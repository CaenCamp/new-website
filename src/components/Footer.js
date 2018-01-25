import React from 'react';
import styled from 'styled-components';

import AboutCode from './footer/aboutCode';
import StayInTouch from './footer/stayInTouch';

const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-contents: center;
    text-align: center;
    padding: 1rem 0;
    background-color: #f6f7f8;
    padding-left: 10%;
    padding-right: 10%;
`;
export const Copyright = styled.div`
    text-align: center;
    width: 100%;
    font-style: italic;
    margin-top: 1rem;
`;

export default ({ socialLinks }) => (
    <Footer>
        <StayInTouch links={socialLinks} />
        <AboutCode />
        <Copyright>@caencamp 2018</Copyright>
    </Footer>
);
