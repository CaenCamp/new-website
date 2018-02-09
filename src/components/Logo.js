import styled from 'styled-components';
import logo from '../../static/logoFondBlanc.png';

export default styled.img.attrs({
    src: logo,
})`
    height: 5rem;
    @media (max-width: 799px) {
        width: 316px;
        height: 169px;
    }
    margin: 0;
    padding: 0.5rem 5rem 0 5rem;
`;
