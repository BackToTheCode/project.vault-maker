/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import React, { Children, FC } from 'react';
import { Box, Flex, Text } from 'rebass';
import styles from './styles';


export interface VaultProps {
  children?: React.ReactNode | string;
}


// Create GridContainer from box

export const Vaults: FC<VaultProps> = props => {
  const { vault, vaultContainer} = styles;
  return (
    <Box sx={vaultContainer}>
      <Box sx={vault} />
      <Box sx={vault} />
    </Box>
  );
};
