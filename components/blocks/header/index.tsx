/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import React, { Children, FC } from 'react';
import { Box } from 'rebass';
import { Address, AddressProps } from './address';
import { Logo, LogoProps } from './logo';
import styles from './styles';

export interface HeaderProps {
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

export const Header: FC<HeaderProps> = props => {
  const { children, isConnected, address } = props;
  const { addressContainer, leftHeader, logoContainer, rightHeader } = styles;
  return (
    <Container variant="container.wide">
      <Box sx={{...leftHeader, ...logoContainer}}>
        <Logo />
      </Box>
      <Box sx={{...addressContainer, ...rightHeader}}>
        <Address {...props} />
      </Box>
    </Container>
  );
};

Header.defaultProps = {
  isConnected: false
};
