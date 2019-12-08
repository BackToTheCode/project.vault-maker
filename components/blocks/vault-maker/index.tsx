import React from 'react';
import { Box, Flex, Image } from 'rebass';
import savingsIcon from '../../../public/images/savings.svg';
import styles from './styles';

/**
 * VaultMakerProps {@link VaultMaker}
 * @see VaultMaker
 */ 
export interface VaultMakerProps {
  /**
   * Whether a route transition is in progress
   */
  isTransitioning: boolean;
}

export const VaultMaker = (props) => {
  const { grid, gridItem, heroItem, makerItem, vault } = styles;
  const { isTransitioning } = props;
  
  console.log('isTransitioning', isTransitioning)
  return (
    <Box sx={grid}>
      <Flex sx={{...gridItem, ...heroItem, ...(heroItem.transitioning(isTransitioning))}}>
        <Image src={savingsIcon} sx={{...vault, ...(vault.transitioning(isTransitioning))}} />
      </Flex>
      <Box sx={{...gridItem,...makerItem}} />
    </Box>
  );  
};

VaultMaker.defaultProps = {
  isTransitioning: false
};

