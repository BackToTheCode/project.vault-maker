import buttons from './button-variants';
import variants from './general-variants';
import text from './text-variants';

const theme = {
  borderWidths: {
    default: 2
  },
  breakpoints: ['40em', '52em', '64em'],
  buttons: buttons,
  colors: {
    bat: 'rgb(234, 86, 19)',
    dark: '#222222',
    darkPrimary: '#0d8577',
    eth: 'rgb(201, 157, 102)',
    grey: 'rgb(55, 74, 97)',
    lightGrey: '#e4e4e4',
    lightMidGrey: '#a3a3a3',
    lightPrimary: 'rgb(89, 188, 175)',
    lightSecondary: 'rgb(255, 225, 160)',
    lightWarning: 'rgb(255, 169, 164)',
    midGrey: '#7a7b86',
    primary: '#1AAB9B',
    rep: 'rgb(65, 36, 103)',
    secondary: '#F4B731',
    superLightGrey: '#f5f5f5',
    superLightPrimary: 'rgb(216, 238, 235)',
    superLightSecondary: 'rgb(255, 246, 228)',
    superLightWarning: 'rgb(255, 233, 232)',
    transparent: 'transparent',
    warning: 'rgb(255,0,0)'
  },
  fontSizes: [14, 16, 18, 24, 28, 36, 42],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 400
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;`,
    heading: `-apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", 
    "Ubuntu", "Cantarell", "Fira Sans", 
    "Droid Sans", "Helvetica Neue", sans-serif;`
  },
  lineHeights: {
    body: 1.45,
    heading: 1.25
  },
  radii: {
    default: 4
  },
  space: [0, 2, 4, 6, 8, 12, 16, 24, 32, 48],
  text: text,
  variants: variants,
};

theme.fontSizes.body = theme.fontSizes[2];
theme.fontSizes.title = theme.fontSizes[5];

export default theme;
