import Typography from 'typography';
import fairyTheme from 'typography-theme-fairy-gates';

const typography = new Typography(fairyTheme);

// Hot reload typography in development.
// if (process.env.NODE_ENV !== `production`) {
//     typography.injectStyles();
// }

export default typography;
