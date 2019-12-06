const styles = {
  addressContainer: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    position: 'fixed',
    width: '100%',
  },
  logoContainer: {
    alignItems: 'center',
    flex: 1,
  },
  navContainer: {
    ml: 7
  },
  navItem: {
    '&:hover': {
      color: 'rgb(255,255,255)'
    },
    color: 'rgba(255,255,255, 0.5)',
    cursor: 'pointer',
    mr: 5,
    p: 4
  },
  navItemActive: {
    color: 'rgb(255,255,255)'
  },
};

export default styles;
