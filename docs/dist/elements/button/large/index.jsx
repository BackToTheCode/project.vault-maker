/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../regular';
import styles from './styles';
export const LargeButton = props => {
    const { sx } = props;
    const { large } = styles;
    return <Button {...props} sx={{ ...large, ...sx }}></Button>;
};
LargeButton.displayName = 'LargeButton';
//# sourceMappingURL=index.jsx.map