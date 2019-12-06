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
        justifyContent: 'center',
        transition: '0.5s flex',
        transitioning: (isTransitioning) => isTransitioning ? {flex: 0}: {},
    },
    makerItem: {
        bg: 'grey'
    },
    vault: {
        transition: '0.5s opacity',
        transitioning: (isTransitioning) => isTransitioning ? {opacity: 0}: {},
        width: '300px'
    }
 }

export default styles;