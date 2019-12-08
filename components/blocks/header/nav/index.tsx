/** @jsx jsx */
import { Button } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Flex } from 'rebass';
import styles from './styles';

/**
 * NavProps {@link Nav}
 * @see Nav
 */

export interface NavProps {
  /**
   * Dictionary of all route handlers
   */
  routeHandler: object;
}

/**
 * Nav component for moving between Vault Maker pages
 *
 * @component
 * @example
 * return (
 *   <Nav  />
 * )
 *
 */
export const Nav: FC<any> = props => {
  const { container, item, itemActive } = styles;
  const { routeHandler } = props;

  return (
    <Flex sx={container}>
      <Button onClick={routeHandler.routeToMake} variant={'text'}sx={{ ...item, ...itemActive }}>
        Make
      </Button>
      <Button onClick={routeHandler.routeToVaults} variant={'text'} sx={item}>
        Vaults
      </Button>
    </Flex>
  );
};
