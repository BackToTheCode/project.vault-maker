const styles = {
  backButton: {
    '&:hover': {
      color: 'rgba(255,255,255,0.8)'
    },
    borderBottomColor: 'primary',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    color: 'rgba(255,255,255,0.5)',
    cursor: 'pointer',
    ml: 8,
    py: 3,
  },
  button: {
    mt: 10,
    width: '250px'
  },
  buttonContainer: {
    alignContent: 'space-evenly',
    alignItems: 'baseline'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '500px',
    overflow: 'hidden',
    width: '80%'
  },
  input: {
    border: 0,
    borderBottom: '1px solid rgba(255,255,255, 0.5)',
    borderRadius: 0,
    color: 'white',
    flex: 1,
    fontFamily: 'body',
    fontSize: 6,
    outline: 'transparent',
    p: 5
  },
  label: {
    mb: 5
  },
  subTitle: {
    color: 'rgba(255,255,255,0.5)',
    mb: 9
  },
  symbol: {
    lineHeight: 2
  },
  title: {
    mb: 6
  }
};

export default styles;
