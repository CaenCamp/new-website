import styled from 'styled-components';

export const Content = styled.section`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: center;
    @media (max-width: ${props => props.theme.mobileSize}) {
        margin-top: 1rem;
    }
`;
export const SingleColumn = styled.div`
    width: 100%;
`;

export const LeftColumn = styled.div`
    padding: 1rem;
    flex: 3 0 0;
    min-height: 600px;
`;

export const RightColumn = styled.aside`
    padding: 1rem 0.5rem;
    flex: 1 0 0;
    display: flex;
    flex-direction: column;
`;
