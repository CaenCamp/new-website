import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
    display: flex;
    align-items: center;
    align-contents: center;
    width: 100%;
    text-align: center;
    justify-content: space-around;
`;
export const SocialLink = styled.a`
    margin: 0;
    padding: 0;
    font-size: 0.6rem;
`;

class MainFooter extends Component {
    render() {
        return (
            <Footer>
                <SocialLink href="https://www.meetup.com/CaenCamp">
                    Meetup
                </SocialLink>
                <SocialLink href="https://github.com/CaenCamp">
                    GitHub
                </SocialLink>
                <SocialLink href="https://twitter.com/caencamp">
                    Twitter
                </SocialLink>
                <SocialLink href="https://www.youtube.com/channel/UCLX4DP_fDCZ4fsgbUZsGaUw">
                    YouTube
                </SocialLink>
                <SocialLink href="https://trello.com/b/ROiO9tng/caencamp">
                    Trello
                </SocialLink>
                <SocialLink href="https://slack.com/intl/fr-fr">
                    Slack
                </SocialLink>
                <SocialLink href="https://www.facebook.com/CaenCamp/">
                    Facebook
                </SocialLink>
            </Footer>
        );
    }
}

export default MainFooter;
