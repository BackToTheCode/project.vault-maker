const styles = {
  address: {
    color: 'rgb(255,255,255)',
    display: ['none', 'block', 'block'],
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    mr: 20,
    width: '100%',
    maxWidth: '140px',
    position: 'relative',
    textAlign: 'left',
    top: '-5px'
  },
  indicator: {
    borderRadius: '50%',
    bottom: [0, '14px', '14px'],
    height: '8px',
    left: '-15px',
    position: 'absolute',
    width: '8px'
  },
  addressContainer: {
    color: 'white',
    px: 4,
    py: 4
  },
  ernContainer: {
    marginTop: 3,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  ern: { color: 'grey' }
};

export default styles;
