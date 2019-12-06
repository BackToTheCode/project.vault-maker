/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Button as BaseButton, SxStyleProp } from 'rebass';
import styles from './styles';

export interface ButtonProps {
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /** Button variants */
  variant?: 'primary' | 'secondary' | 'outline' | 'text';

  isDisabled?: boolean;
  children?: React.ReactNode;

  /** System-UI style prop */
  sx?: SxStyleProp;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, isDisabled, onClick, sx, variant } = props;
  const { base, disabled } = styles;

  return (
    <BaseButton
      onClick={onClick}
      sx={{ ...base,...(isDisabled ? disabled : {}), ...sx }}
      variant={variant}
    >
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  variant: 'primary'
};

Button.displayName = 'Button';
