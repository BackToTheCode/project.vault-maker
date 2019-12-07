/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Box, Flex, Text } from 'rebass';
import styles from './styles';

export interface AddressProps {
  variant?: string;
  children?: React.ReactNode;
  address?: string;
  ern?: string;
  isConnected?: boolean;
}

export const Address: FC<AddressProps> = ({ isConnected, address, ern }) => {
  const variant = isConnected ? 'indicator.connected' : 'indicator.unconnected';

  const connectedMessage = isConnected
    ? address
      ? address
      : 'Connected'
    : 'Not connected';

  return (
    <Flex sx={styles.container}>
      {/* <Box sx={styles.innerContainer}> */}
        <Box variant={variant} sx={styles.indicator} />
        <Box sx={styles.addressContainer}>
          <Text
            sx={styles.address}
            variant={'body.regular'}
          >
            {connectedMessage}
          </Text>
        </Box>
        {ern && (
          <Box sx={styles.ernContainer}>
            <Text variant={'body.small'} sx={styles.ern}>
              {ern}
            </Text>
          </Box>
        )}
      {/* </Box> */}
    </Flex>
  );
};
Address.displayName = 'Address';


