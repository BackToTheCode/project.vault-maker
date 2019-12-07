import React from 'react';
import { Heading } from 'rebass';
import styles from './styles';
export const Title = props => {
    const { children, sx } = props;
    const { base } = styles;
    return (<Heading variant="heading.extra" sx={{ ...base, ...sx }}>{children}</Heading>);
};
Title.displayName = 'Title';
//# sourceMappingURL=index.jsx.map