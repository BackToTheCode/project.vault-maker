/** @jsx jsx */
import { GridContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';


export interface VaultProps {
  sx?: any
}

export const Vaults: FC<VaultProps> = props => {
  const { sx } = props;
  const { vault, vaultContainer} = styles;
  return (
    <GridContainer sx={{...vaultContainer, ...sx}}>
      <Box sx={vault} />
      <Box sx={vault} />
    </GridContainer>
  );
};
