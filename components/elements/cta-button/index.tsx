/** @jsx jsx */
import { Button } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import styles from './styles';

export interface CTAButtonProps {
  dispatchStep?: ({ step }: { step: number }) => void;
  step?: number;
}

export const CTAButton: FC<CTAButtonProps> = props => {
  const { children, step } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    props.dispatchStep({ step });
  };
  return (
    <Button {...props} sx={styles.ctaButtonStyle} variant="primary" onClick={handleClick}>
      {children}
    </Button>
  );
};
CTAButton.displayName = 'CTAButton';
