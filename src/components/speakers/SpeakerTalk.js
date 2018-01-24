import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

export const Item = styled.div`
    text-align: center;
    border: 1px solid ${({ theme }) => theme.greyLight};
    border-radius: 0.5rem;
    box-shadow: 2px 2px 5px rgba(235, 235, 235, 0.5);
    margin: 1rem 0;
    a {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
    }
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 60px;
    height: 60px;
`;

export const Name = styled.span`
    font-size: 1rem;
    text-align: center;
    padding-top: 1rem;
    color: ${({ theme }) => theme.black};
    font-variant: small-caps;
`;

export default ({ speaker }) => (
    <Item>
        <Link to={`/speakers/${speaker.slug}`}>
            <Profile src={`/speakers/${speaker.picture}`} />
            <Name>
                {speaker.firstName} {speaker.lastName}
            </Name>
        </Link>
    </Item>
);
