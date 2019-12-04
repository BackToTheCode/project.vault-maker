const buttons = {
  outline: {
    '&:hover': {
      backgroundColor: 'rgba(26, 171, 155, 0.1)'
    },
    bg: 'transparent',
    borderColor: 'primary',
    color: 'primary'
  },
  primary: {
    '&:hover': {
      bg: 'darkPrimary',
      borderColor: 'darkPrimary'
    },
    bg: 'primary',
    borderColor: 'primary',
    color: 'white'
  },
  secondary: {
    bg: 'secondary',
    borderColor: 'secondary',
    color: 'white'
  },
  text: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'lightPrimary',
      transform: 'translateY(0px)'
    },    
    bg: 'transparent',
    borderColor: 'transparent',
    color: 'primary'
  }
};

export default buttons;
