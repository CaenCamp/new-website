import React from 'react';
import styled from 'styled-components';

import AboutCode from './footer/aboutCode';
import CallForSpeakers from './footer/callForSpeakers';
import StayInTouch from './footer/stayInTouch';
import OpenCollective from './footer/openCollective';

const Footer = styled.footer`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-contents: center;
    text-align: center;
    padding: 1rem 10%;
    background-color: #f6f7f8;
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-direction: column;
        padding: 0.5rem;
        margin: 0;
    }
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
        <CallForSpeakers />
        <AboutCode />
        <Copyright>@CaenCamp 2021</Copyright>
    </Footer>
);
