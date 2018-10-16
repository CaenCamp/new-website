import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.black};
`;

const BackToListContainer = styled.div`
    @media (max-width: ${props => props.theme.mobileSize}) {
        margin-top: 1.5em;
    }
`;

export default ({ path }) => (
    <BackToListContainer>
        <StyledLink to={path}>
            <i className="fa fa-list-alt" aria-hidden="true" /> Retour à la
            liste
        </StyledLink>
    </BackToListContainer>
);