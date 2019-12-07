/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box, Text } from 'rebass';
import styles from './styles';

export interface AddressProps {
  address?: string;
  isConnected?: boolean;
}

/**
 * Component for showing details of the user.
 * 
 * @component
 * @example
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )  
 * @prop {boolean} isConnected
 * @prop {string} address
 *
 * @extends {Component<Props>}
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
