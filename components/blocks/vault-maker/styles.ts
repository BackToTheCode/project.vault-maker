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
        flex: [0, 0, 0, 1],
        justifyContent: 'center',
        transition: '0.5s flex',
        transitioning: (isTransitioning: boolean) => isTransitioning ? {flex: 0} : {},
    },
    makerItem: {
        alignItems: 'center',
        bg: 'grey',
        justifyContent: 'center',
    },
    vault: {
        transition: '0.5s opacity',
        transitioning: (isTransitioning: boolean) => isTransitioning ? {opacity: 0} : {},
        width: '300px'
    }
 }

export default styles;