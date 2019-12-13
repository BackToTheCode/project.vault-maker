import buttons from './button-variants';
import variants from './general-variants';
import text from './text-variants';
import colors from './colors';

const theme = {
  borderWidths: {
    default: 1
  },
  breakpoints: ['650px', '850px', '1050px', '1200px'],
  buttons: buttons,
  colors: colors,
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
  letterSpacing: '0.2px',
  lineHeights: {
    body: 1.45,
    heading: 1.25
  },
  radii: {
    default: 4
  },
  space: [0, 2, 4, 6, 8, 12, 16, 24, 32, 50, 80],
  text: text,
  variants: variants,
};

export default theme;
