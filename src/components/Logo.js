import styled from 'styled-components';
import logo from '../../static/logoFondBlanc.png';

export default styled.img.attrs({
    src: logo,
})`
    display: block;
    position: absolute;
    left: 1rem;
    top: 1rem;
    bottom: 0;
    height: 4rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        height: 2rem;
        display: none;
    }
`;
