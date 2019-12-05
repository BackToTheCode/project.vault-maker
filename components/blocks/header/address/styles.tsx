const styles = {
  address: {
    overflow: 'hidden', textOverflow: 'ellipsis' , color: 'rgb(255,255,255)'
  },
  container: {
    width: '100%',
    justifyContent: 'flex-end',
    mr: 20,
    alignItems: 'center'
  },
  innerContainer: {
    textAlign: 'left',
    flexDirection: 'column',
    maxWidth: '140px',
    position: 'relative',
    top: '-5px'
  },
  indicator: {
    borderRadius: '50%',
    position: 'relative',
    width: '8px',
    height: '8px',
    right: 7,
    top: '22px'
  },
  addressContainer: {
    color: 'white',
    px: 4,
    py: 4,
  },
  ernContainer: {
    marginTop: 3,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  ern: { color: 'grey' }
};

export default styles;