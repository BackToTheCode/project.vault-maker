/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Button, ButtonProps } from '../regular';
import styles from './styles';

export interface LargeButtonProps extends ButtonProps {}

export const LargeButton: FC<LargeButtonProps> = props => {
  const { sx } = props;
  const { large } = styles;
  return <Button {...props} sx={{ ...large, ...sx }}></Button>;
};

LargeButton.displayName = 'LargeButton';
