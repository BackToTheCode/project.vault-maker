/** @jsx jsx */
import { Container } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Flex} from 'rebass';
import { Address } from './address';
import { Logo } from './logo';
import { Nav } from './nav';
import styles from './styles';

export interface HeaderProps {
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

export const Header: FC<HeaderProps> = props => {
  const { isConnected, address } = props;
  const { addressContainer, container, logoNavContainer} = styles;

  return (
    <Container sx={container}>
      <Flex sx={logoNavContainer}>
        <Logo />
        <Nav />
      </Flex>
      <Box sx={addressContainer}>
        <Address isConnected={isConnected} address={address} />
      </Box>
    </Container>
  );
};

Header.defaultProps = {
  isConnected: false
};
