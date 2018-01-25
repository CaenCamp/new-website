import React from 'react';
import styled from 'styled-components';
import Links from './Links';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 33%;
    text-align: left;
    p {
        margin: 0;
        line-height: 1.5rem;
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
