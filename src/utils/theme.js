import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #262626;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-variant: small-caps;
  }

  a {
    text-decoration: none;
  }
  a:active {
    outline: none;
  }
  iframe {
    margin 1rem auto;
  }
`;

export default {
    white: '#fff',
    black: '#000',
    greyLight: '#EBEBEB',
    grey: '#696969',
    greyDark: '#262626',
    blue: '#193744',
};
