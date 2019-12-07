/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';
import styles from './styles';

/**
 * AddressProps {@link Address}
 * @see Address
 */ 
export interface AddressProps {
  /**
   * Is connected to the Ethereum network
   */
  address?: string;
  isConnected?: boolean;
}

/**
 * Component for showing whether a user is connected to the Ethereum network 
 * and what their address is
 * 
 * @component
 * @example
 * const isConnected = true
 * const address = '0x61049F5e03Bfe3823f274C479158A94bcA26456c'
 * return (
 *   <Address isConnected={isConnected} address={address} />
 * )  
 *
 * @see AddressProps
 * @extends {FC<Props>}
 */
export const Address: FC<AddressProps> = props => {
  const { isConnected, address } = props;
  const { container, indicator } = styles;

  return (
    <Box sx={container}>
      <Box sx={{...indicator, ...(indicator.connected(isConnected))}} />
      <Text sx={styles.address} variant={'body.regular'}>
        {isConnected ? address : 'Not connected'}
      </Text>
    </Box>
  );
};

Address.displayName = 'Address';
