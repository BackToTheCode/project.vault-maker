const styles = {
  address: {
    color: 'rgb(255,255,255)',
    display: ['none', 'block', 'block'],
    maxWidth: '140px',
    overflow: 'hidden',
    px: 4,
    py: 4,
    textOverflow: 'ellipsis'
  },
  container: {
    mr: 20,
    position: 'relative',
    textAlign: 'left',   
  },
  indicator: {
    borderRadius: '50%',
    bottom: [0, '16px', '16px'],
    connected: (isConnected: boolean): any => (isConnected ? { bg: 'primary' } : { bg: 'warning' }),
    height: '8px',
    left: '-15px',
    position: 'absolute',
    width: '8px',
  }
};

export default styles;
