import Typography from 'typography';
import fairyTheme from 'typography-theme-fairy-gates';

fairyTheme.overrideThemeStyles = ({ rhythm }, options, styles) => ({
    a: {
        textDecoration: 'none !important',
        color: 'green',
    },
});
const typography = new Typography(fairyTheme);

// typography.aTextDecoration = 'none';

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
}

export default typography;
