const styles = {
  coinIcon: (color: string) => ({
    bg: color,
    ml: '20px',
    position: 'relative',
    top: '-2px'
  }),
  collateralValue: {
    fontWeight: 'bold'
  },
  container: {
    flex: 2
  },
  detail: {
    color: 'grey'
  },
  detailLabel: {
    display: 'inline-block',
    width: '75px'
  },
  input: {
    '&::placeholder': {
      color: 'midGrey'
    },
    '&:focus': {
      outline: 'none'
    },
    '&[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0
    },
    bg: 'superLightGrey',
    border: 0,
    borderBottomColor: 'dark',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderRadius: '4px',
    color: 'dark',
    display: 'inline-block',
    fontFamily: 'body',
    marginRight: 5,
    minWidth: '160px',
    px: 5,
    py: 3,
    top: '7px',
    transition: 'all 0.2s',
    verticalAlign: 'bottom'
  },
  label: {
    alignItems: 'baseline',
    color: 'grey',
    fontFamily: 'body',
    fontWeight: 'bold',
    justifyContent: 'left',
    letterSpacing: '0.5px',
    mb: 4
  },
  lockDetail: { mt: 6 },
  remainingBalance: { mt: 3 },
  symbol: {
    // bottom: '7px',
    display: 'inline-block',
    position: 'relative',
    py: 3,
  }
};

export default styles;
