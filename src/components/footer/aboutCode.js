import React from 'react';
import styled from 'styled-components';

const CodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: 33%;
    text-align: left;
    p {
        margin: 0;
        line-height: 1.5rem;
        a {
            color: ${({ theme }) => theme.black};
            font-weight: bold;
            -webkit-transition: color 0.2s;
            &:hover {
                color: crimson;
            }
        }
    }
`;
export const Title = styled.h4`
    border-bottom: 1px solid ${({ theme }) => theme.black};
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    margin: 0 0 1rem 0;
`;

export default () => (
    <CodeContainer>
        <Title>Du code justement</Title>
        <p>
            Ce site est réalisé grâce à{' '}
            <a href="https://www.gatsbyjs.org/">Gatsby.js</a> et il est hébergé
            sur <a href="https://github.com/CaenCamp">Github</a>.
        </p>
        <p>
            Le code est disponible sur{' '}
            <a href="https://github.com/CaenCamp/new-website">un dépôt</a> git
            et chaque{' '}
            <a href="https://github.com/CaenCamp/new-website/blob/master/.github/CONTRIBUTING.md">
                PR
            </a>{' '}
            permettant d'améliorer le site est la bienvenue ;)
        </p>
    </CodeContainer>
);
