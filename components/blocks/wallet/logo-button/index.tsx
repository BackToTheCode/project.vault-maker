import { LargeButton, LargeButtonProps } from '@backtothecode/vault-maker-ui';
import React, { FC } from 'react';
import { Box, Image, SxStyleProp } from 'rebass';
import styles from './styles';

// tslint:disable-next-line:no-empty-interface
export interface LogoButtonProps {
  icon: string;
  sx?: SxStyleProp;
  isDisabled?: boolean;
  onClick?: (e: any) => void
}

export const LogoButton: FC<LogoButtonProps> = ({
  children,
  icon,
  isDisabled,
  onClick,
  sx
}) => (
  <LargeButton
    variant="outline"
    isDisabled={isDisabled}
    sx={{...styles.button, ...(isDisabled ? styles.button.disabled : {} )}}
    onClick={onClick}
  >
    <Box sx={{ ...styles.logo.container, ...sx }}>
      <Image sx={{ ...styles.logo.icon, ...sx }} src={icon} />
    </Box>
    {children}
  </LargeButton>
);

LogoButton.displayName = 'LogoButton';
