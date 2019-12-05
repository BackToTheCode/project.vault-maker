import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';

export const VaultMaker = () => {
  const { grid, gridItem, heroItem, makerItem } = styles;

  return (
    <Box sx={grid}>
      <Box sx={{...gridItem, ...heroItem}}></Box>
      <Box sx={{...gridItem,...makerItem}}></Box>
    </Box>
  );
};
