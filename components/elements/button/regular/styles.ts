const styles = {
  base: {
    '&:focus': {
      outline: 0
    },
    borderRadius: '30px',
    borderStyle: 'solid',
    borderWidth: 2,
    cursor: 'pointer',
    display: 'block',
    filter: 'none',
    fontFamily: 'body',
    fontSize: 2,
    fontWeight: 'body',
    letterSpacing: '0.4px',
    opacity: '1',
    px: 7,
    py: 5,
    transition: '0.2s all',
  },
  disabled: {
    cursor: 'default',
    filter: 'grayscale(1)',
    opacity: '0.6',
  }
};

export default styles;
