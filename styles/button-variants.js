const buttons = {
  outline: {
    '&:hover': {
      backgroundColor: 'rgba(26, 171, 155, 0.1)',
      transform: 'translateY(-1px)'
    },
    bg: 'transparent',
    borderColor: 'primary',
    color: 'primary'
  },
  primary: {
    '&:hover': {
      bg: 'darkPrimary',
      borderColor: 'darkPrimary',
      transform: 'translateY(-1px)'
    },
    bg: 'primary',
    borderColor: 'primary',
    color: 'white'
  },
  secondary: {
    '&:hover': {
      backgroundColor: 'darkSecondary',
      transform: 'translateY(-1px)'
    },
    bg: 'secondary',
    borderColor: 'secondary',
    color: 'white'
  },
  text: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'darkPrimary',
      transform: 'translateY(0px)'
    },    
    bg: 'transparent',
    borderColor: 'transparent',
    color: 'primary',
    transform: 'translateY(0px)'
  }
};

export default buttons;
