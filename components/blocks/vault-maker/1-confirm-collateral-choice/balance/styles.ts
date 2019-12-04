const styles = {
  balance: {
    borderBottomColor: 'dark',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    display: 'inline-block',
    fontFamily: 'body',
    pl: 0,
    position: 'relative',
    pr: 4,
    py: 3,
    top: '-8px',
  },
  balanceDetail: { mt: 6, mb: 6, color: 'grey' },
  balanceValue: { fontWeight: 'bold', mt: 6 },
  box: { flex: 2 },
  coinIcon: (color: string) => ({
    bg: color,
    ml: 6,
    position: 'relative',
    top: '-2px'
  }),
  label: {
    alignItems: 'baseline',
    color: 'grey',
    fontWeight: 'bold',
    justifyContent: 'left',
    letterSpacing: '0.5px',
    mb: 4
  },
  symbol: {
    bottom: '7px',
    display: 'inline-block',
    ml: 5,
    position: 'relative',
    py: 3
    // top: '4px'
  }
};

export default styles;
