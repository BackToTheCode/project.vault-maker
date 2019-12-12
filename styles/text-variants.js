const base = {
  '-moz-osx-font-smoothing': 'grayscale',
  '-webkit-font-smoothing': 'antialiased'
};

const text = {
  body: {
    large: {
      color: 'white',
      fontFamily: 'body',
      fontSize: 3,
      letterSpacing: '0.5px',
    },
    regular: {
      color: 'white',
      fontFamily: 'body',
      fontSize: 2,
      letterSpacing: '0.5px',
    },
    small: {
      color: 'white',
      fontFamily: 'body',
      fontSize: 0,
      letterSpacing: '0.5px',
    }
  },
  heading: {
    extra: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: [6, 6, 6],
      letterSpacing: '0.5px',
    },
    large: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: [5, 5, 5],
      letterSpacing: '0.5px',
    },
    regular: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: 4,
      letterSpacing: '0.5px',
    },
    small: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: 3,
      letterSpacing: '0.5px',
    }
  }
};

export default text;
