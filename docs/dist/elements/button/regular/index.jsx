/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button as BaseButton } from 'rebass';
import styles from './styles';
export const Button = (props) => {
    const { children, isDisabled, onClick, sx, variant } = props;
    const { base, disabled } = styles;
    return (<BaseButton onClick={onClick} sx={{ ...base, ...(isDisabled ? disabled : {}), ...sx }} variant={variant}>
      {children}
    </BaseButton>);
};
Button.defaultProps = {
    variant: 'primary'
};
Button.displayName = 'Button';
//# sourceMappingURL=index.jsx.map