import styled from 'styled-components';
import logo from '../../static/logoFondBlanc.png';

export default styled.img.attrs({
    src: logo,
})`
    height: 5rem;
    margin: 0;
    padding: 0.5rem 5rem 0 5rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        height: 2rem;
        padding: 1rem 0 0 0;
    }
`;
