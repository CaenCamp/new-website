import React from 'react';
import styled from 'styled-components';
import Links from './Links';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 30%;
    @media (max-width: ${props => props.theme.mobileSize}) {
        width: 100%;
        margin-bottom: 1rem;
        font-size: 0.8rem;
    }
    text-align: left;
    p {
        margin: 0;
        line-height: 1.5rem;
        @media (max-width: ${props => props.theme.mobileSize}) {
            line-height: 1rem;
        }
    }
`;
export const Title = styled.h4`
    border-bottom: 1px solid ${({ theme }) => theme.black};
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
`;

export default ({ links }) => (
    <ContactContainer>
        <Title>Restons en contact</Title>
        <Links links={links} />
    </ContactContainer>
);
