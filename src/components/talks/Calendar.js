import React from 'react';
import styled from 'styled-components';
import locale from 'date-fns/locale/fr';
import format from 'date-fns/format';

const Container = styled.div`
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.black};
    color: ${({ theme }) => theme.white};
    padding: 0;
    width: 80px;
    margin-right: 2rem;
`;
const DateContainer = styled.div`
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    text-align: center;
`;
const Day = styled.span`
    width: 100%;
    font-size: 1rem;
    margin: 0;
    padding: 0;
`;
const Month = styled.span`
    width: 100%;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
`;
const Year = styled.span`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
`;
const Edition = styled.div`
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    margin: 0.2rem 0;
`;

export default ({ date, edition }) => {
    const [day, month, year] = format(date, 'DD-MMM-YYYY', { locale }).split(
        '-',
    );
    return (
        <Container>
            <Edition># {edition}</Edition>
            <DateContainer>
                <Day>{day}</Day>
                <Month>{month}</Month>
                <Year>{year}</Year>
            </DateContainer>
        </Container>
    );
};
