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
 * Component for showing a users address 
 *  and whether they are connected to the ethereum network
 * 
 * @param props my prop
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *   <User age={age} name={name} />
 * )
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
