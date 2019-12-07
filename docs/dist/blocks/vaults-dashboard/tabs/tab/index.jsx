/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Text } from 'rebass';
import styles from './styles';
// Create GridContainer from box
export const Tab = props => {
    const { children, isActive } = props;
    const { active, text } = styles;
    return (<Text variant="body.regular" sx={{ ...text, ...(isActive ? active : {}) }}>
      {children}
    </Text>);
};
//# sourceMappingURL=index.jsx.map