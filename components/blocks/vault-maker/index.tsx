import React, { FC, useEffect, useState } from 'react';
import { Box } from 'rebass';
import styles from './styles';

export const VaultMaker = () => {
  const { grid, gridItem, heroItem, makerItem, transitioning } = styles;
  const [isTransitioning, setTransitioning] = useState(false)

  // useEffect(() => {
  //   setTransitioning(true);
  // })

  return (
    <Box sx={grid}>
      <Box sx={{...gridItem, ...heroItem, ...(transitioning(isTransitioning))}}></Box>
      <Box sx={{...gridItem,...makerItem}}></Box>
    </Box>
  );
};
