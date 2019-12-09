/** @jsx jsx */
import { Container } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Box, Flex } from 'rebass';
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
  /**
   * Whether a route transition is in progress
   */
  isTransitioning: boolean;
  /**
   * Dispatch transition start action
   */
  dispatchTransitionStart: () => any;
  /**
   * Dispatch transition finish action
   */
  dispatchTransitionFinish: () => any;
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
  const { addressContainer, container, logoNavContainer } = styles;
  const router = useRouter();

  /**
   * Pushes a route to browser history
   *
   * @param  {Object} evt   React synthetic mouse event
   * @return {Void}
   */
  const routeToVaults = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    props.dispatchTransitionStart();
    if (router.route === '/') {
      setTimeout(() => {
        router.push('/vaults').then(() => {
          props.dispatchTransitionFinish();
        });
      }, 500);
      return;
    }
    props.dispatchTransitionFinish();
    router.push('/vaults');
  };

  /**
   * Pushes a route to browser history
   *
   * @param  {Object} evt   React synthetic mouse event
   * @return {Void}
   */
  const routeToMake = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    router.push('/');
  };

  const routes = {
    routeToMake,
    routeToVaults
  };

  return (
    <Container sx={container}>
      <Flex sx={logoNavContainer}>
        <Logo />
        <Nav routeHandler={routes} />
      </Flex>
      <Box sx={addressContainer}>
        <Address isConnected={isConnected} address={address} />
      </Box>
    </Container>
  );
};

Header.defaultProps = {
  isConnected: false,
  isTransitioning: false
};
