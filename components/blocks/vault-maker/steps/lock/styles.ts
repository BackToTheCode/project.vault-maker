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
  buttonContainer: {
    alignContent: 'space-evenly',
    alignItems: 'baseline'
  },
  button: {
    mt: 10,
    width: '250px'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '500px',
    width: '80%'
  },
  input: {
    border: 0,
    borderBottom: '1px solid rgba(255,255,255, 0.5)',
    borderRadius: 0,
    p: 5
  },
  label: {
    mb: 5
  },
  subTitle: {
    color: 'rgba(255,255,255,0.5)',
    mb: 9
  },
  title: {
    mb: 6
  }
};

export default styles;
