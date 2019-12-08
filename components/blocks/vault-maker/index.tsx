import React from 'react';
import { Box, Flex, Image } from 'rebass';
import savingsIcon from '../../../public/images/savings.svg';
import styles from './styles';
import { Wizard } from './maker-wizard';

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

/**
 * Vault Maker Wizard
 *
 * @component
 * @example
 * const isTransitioning = true
 * return (
 *   <VaultMaker isTransitioning={isTransitioning} />
 * )
 *
 * @see HeaderProps
 * @extends {FC<Props>}
 */
export const VaultMaker = (props) => {
  const { grid, gridItem, heroItem, makerItem, vault } = styles;
  const { isTransitioning } = props;
  
  return (
    <Box sx={grid}>
      <Flex sx={{...gridItem, ...heroItem, ...(heroItem.transitioning(isTransitioning))}}>
        <Image src={savingsIcon} sx={{...vault, ...(vault.transitioning(isTransitioning))}} />
      </Flex>
      <Flex sx={{...gridItem,...makerItem}}>
        <Wizard />
      </Flex>
    </Box>
  );  
};

VaultMaker.defaultProps = {
  isTransitioning: false
};

