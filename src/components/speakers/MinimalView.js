import React from 'react';
import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 1rem;
`;

export const Profile = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin-right: 0.5rem;
`;

export const Name = styled.span`
    font-size: 1rem;
    text-align: left;
    padding: 0;
    color: ${({ theme }) => theme.black};
`;

export default ({ speaker }) => (
    <Item>
        <Profile src={`/speakers/${speaker.picture}`} />
        <Name>
            {speaker.firstName} {speaker.lastName}
        </Name>
    </Item>
);
