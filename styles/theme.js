import buttons from './button-variants';
import variants from './general-variants';
import text from './text-variants';
import colors from './colors';

const theme = {
  borderWidths: {
    default: 2
  },
  breakpoints: ['640px', '832px', '1024px'],
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

export default theme;
