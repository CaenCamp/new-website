import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const CaenCampContainer = styled.div`
    align-items: center;
    background-color: #fff;
    display: flex;
    flex-direction: column;
`;

export default ({ talks, speakers, dojos }) => (
    <CaenCampContainer>
        <Link to="/speakers">
            <i class="fa fa-user-o fa-5x" aria-hidden="true" />
            {speakers} speakers
        </Link>
        <Link to="/talks">
            <i class="fa fa-bullhorn fa-5x" aria-hidden="true" />
            {talks} talks
        </Link>
        <Link to="/coding-dojo">
            <i class="fa fa-keyboard-o fa-5x" aria-hidden="true" />
            {dojos} dojos
        </Link>
    </CaenCampContainer>
);
