const base = {
  '-moz-osx-font-smoothing': 'grayscale',
  '-webkit-font-smoothing': 'antialiased'
};

const text = {
  body: {
    large: {
      color: 'white',
      fontFamily: 'body',
      fontSize: 3
    },
    regular: {
      color: 'white',
      fontFamily: 'body',
      fontSize: 2
    },
    small: {
      color: 'white',
      fontFamily: 'body',
      fontSize: 0
    }
  },
  heading: {
    extra: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: [6, 6, 6]
    },
    large: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: [5, 5, 5]
    },
    regular: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: 4
    },
    small: {
      color: 'white',
      fontFamily: 'heading',
      fontSize: 3
    }
  }
};

export default text;
