/** @jsx jsx */
import { Container } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import React, { FC, useEffect, useState } from 'react';
import { Box, Flex} from 'rebass';
import { Address, AddressProps } from './address';
import { Logo, LogoProps } from './logo';
import { Nav } from './nav';
import styles from './styles';

export interface HeaderProps {
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

export const Header: FC<HeaderProps> = props => {
  const { isConnected, address } = props;
  const { addressContainer, container, logoContainer, navContainer, navItem, navItemActive} = styles;

  return (
    <Container sx={container}>
      <Flex sx={logoContainer}>
        <Logo />
        <Nav />
      </Flex>
      <Box sx={addressContainer}>
        <Address {...props} />
      </Box>
    </Container>
  );
};

Header.defaultProps = {
  isConnected: false
};
