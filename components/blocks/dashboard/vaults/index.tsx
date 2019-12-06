/** @jsx jsx */
import { GridContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';


export interface VaultProps {
  children?: React.ReactNode | string;
}

export const Vaults: FC<VaultProps> = props => {
  const { vault, vaultContainer} = styles;
  return (
    <GridContainer sx={vaultContainer}>
      <Box sx={vault} />
      <Box sx={vault} />
    </GridContainer>
  );
};
