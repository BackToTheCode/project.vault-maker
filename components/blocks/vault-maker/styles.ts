const styles = {
    grid: {
        display: 'flex',
        height: '100vh',
        width: '100%'
    },
    gridItem: {
        flex: 1,
        height: '100%',
    },
    heroItem: {
        bg: 'primary',
        transition: '0.5s all'
    },
    makerItem: {
        bg: 'grey'
    },
    transitioning: (isTransitioning) => isTransitioning ? {flex: 0}: {}
 }

export default styles;