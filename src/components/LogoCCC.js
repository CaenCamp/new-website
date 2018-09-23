import styled from 'styled-components';
import logo from '../../static/logoSquareCCC.jpg';

export default styled.img.attrs({
    src: logo,
})`
    height: 3rem;
    margin: 0;
    padding: 0;
    @media (max-width: ${props => props.theme.mobileSize}) {
        height: 2rem;
        padding: 0;
    }
`;
