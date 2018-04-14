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
    height: ${props => (props.displaySchedules ? '122px' : '103px')};
    @media (max-width: ${props => props.theme.mobileSize}) {
        border-radius: 0;
        background-color: ${({ theme }) => theme.white};
        width: 100%;
        height: auto;
    }
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
    @media (max-width: ${props => props.theme.mobileSize}) {
        flex-direction: row;
        border-radius: 0;
        background-color: ${({ theme }) => theme.white};
        width: 100%;
        align-items: baseline;
        justify-content: center;
        padding-bottom: 0.5rem;
        margin: 0.5rem 0;
        border-bottom: 1px solid ${({ theme }) => theme.greyLight};
    }
`;
const Day = styled.span`
    width: 100%;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: none;
        width: auto;
        margin: 0 0.2rem;
    }
`;
const Month = styled.span`
    width: 100%;
    font-size: 1.8rem;
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: none;
        width: auto;
        margin: 0 0.2rem;
    }
`;
const Year = styled.span`
    width: 100%;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: none;
        width: auto;
        margin: 0 0.2rem;
    }
`;
const Edition = styled.div`
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
    margin: 0.2rem 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        display: none;
    }
`;

const Schedule = styled.span`
    width: 100%;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: none;
        width: auto;
        margin: 0 0.2rem;
    }
`;

export default ({ date, edition }) => {
    const [day, month, year, schedules] = format(date, 'DD-MMM-YYYY-HH:mm', {
        locale,
    }).split('-');
    const displaySchedules = parseInt(year, 10) >= 2017;
    return (
        <Container displaySchedules={displaySchedules}>
            <Edition># {edition}</Edition>
            <DateContainer>
                <Day>{day}</Day>
                <Month>{month}</Month>
                <Year>{year}</Year>
                {displaySchedules && <Schedule>{schedules}</Schedule>}
            </DateContainer>
        </Container>
    );
};
