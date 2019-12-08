/** @jsx jsx */
import { Container } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Flex} from 'rebass';
import { Address } from './address';
import { Logo } from './logo';
import { Nav } from './nav';
import styles from './styles';

/**
 * HeaderProps {@link Header}
 * @see Header
 */ 
export interface HeaderProps {
  /**
   * Ethereum wallet address
   */
  address?: string;
  /**
   * Is connected to the Ethereum network
   */
  isConnected?: boolean;
}

/**
 * Header component with Logo, Nav and Address sub components
 * 
 * @component
 * @example
 * const isConnected = true
 * const address = '0x61049F5e03Bfe3823f274C479158A94bcA26456c'
 * return (
 *   <Header isConnected={isConnected} address={address} />
 * )  
 *
 * @see HeaderProps
 * @extends {FC<Props>}
 */
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
