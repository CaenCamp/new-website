import React from 'react';
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

export default ({ socialLinks }) => (
    <Footer>
        {socialLinks.length > 0 &&
            socialLinks.map(link => (
                <SocialLink key={link.title} href={link.url}>
                    {link.title}
                </SocialLink>
            ))}
    </Footer>
);
