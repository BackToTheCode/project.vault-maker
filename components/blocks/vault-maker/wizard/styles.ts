const styles = {
    base: {
        transition: 'opacity 0.5s'
    },
    transitioning: (isTransitioning: boolean) => isTransitioning ? {opacity: 0} : {},
};

export default styles;
