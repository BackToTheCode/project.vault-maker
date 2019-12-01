const styles = {
  icon: { ml: 6 },
  option: {
    '&:hover': {
      bg: 'lightGrey',
      transform: 'translateX(-1px)'
    },
    alignItems: 'center',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    flex: 1,
    justifyContent: 'left',
    mb: 3,
    mt: 3,
    transition: '0.2s all',

    width: '100%'
  },
  radio: { mx: 6 },
  selected: {
    bg: 'superLightGrey'
  },
  symbol: { display: 'inline-block', ml: 5 }
};

export default styles;
