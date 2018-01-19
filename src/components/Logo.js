import styled from 'styled-components';
import logo from '../../static/logo.png';

export default styled.img.attrs({
    src: logo,
})`
    height: 5rem;
    @media (max-width: 600px) {
        height: 3rem;
    }
    margin: 0;
    padding: 0 5rem;
`;
