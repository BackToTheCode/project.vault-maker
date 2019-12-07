"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles = {
    address: {
        color: 'rgb(255,255,255)',
        display: ['none', 'block', 'block'],
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
        bottom: [0, '14px', '14px'],
        connected: (isConnected) => (isConnected ? { bg: 'primary' } : { bg: 'warning' }),
        height: '8px',
        left: '-15px',
        position: 'absolute',
        width: '8px',
    }
};
exports.default = styles;
//# sourceMappingURL=styles.js.map