import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';

export const VaultMaker = () => {
    const { grid, gridItem, heroItem, makerItem, transitioning } = styles;
  
    return (
      <Box sx={grid}>
        <Box sx={{...gridItem, ...heroItem, ...(transitioning(isTransitioning))}}></Box>
        <Box sx={{...gridItem,...makerItem}}></Box>
      </Box>
    );
  };
  