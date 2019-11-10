import styled from 'styled-components';
import logo from '../../static/logoFondBlanc.png';

export default styled.img.attrs({
    src: logo,
})`
    display: block;
    position: absolute;
    left: 0.6rem;
    top: 0.6rem;
    bottom: 0;
    height: 3rem;
    @media (max-width: ${props => props.theme.mobileSize}) {
        height: 1.2rem;
        display: none;
    }
`;
