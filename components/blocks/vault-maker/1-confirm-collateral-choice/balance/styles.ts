const styles = {
  balance: {
    bg: 'superLightSecondary',
    borderBottomColor: 'dark',
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderRadius: '4px',
    display: 'inline-block',
    fontFamily: 'body',
    px: 6,
    py: 3
  },
  balanceDetail: { mt: 6, mb: 6, color: 'grey' },
  balanceValue: { fontWeight: 'bold', mt: 6 },
  box: { flex: 2 },
  coinIcon: (color: string) => ({
    bg: color,
    ml: 5,
    position: 'relative',
    top: '8px'
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
    py: 3
  }
};

export default styles;
