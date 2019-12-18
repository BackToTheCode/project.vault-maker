import React from 'react';
import { Box, Flex, Image } from 'rebass';
import batIcon from '../../../public/images/bat-logo.png';
import ethIcon from '../../../public/images/ethereum-logo.svg';
import savingIcon from '../../../public/images/savings.svg';
import styles from './styles';
import { WrappedWizard } from './wizard/wrapper';



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
  const { grid, gridItem, heroItem, makerItem, heroIcon } = styles;
  const { isTransitioning, icon, iconWidth, hasBackground } = props;
  
  const icons = {
    bat: batIcon,
    eth: ethIcon,
    saving: savingIcon,
  };

  return (
    <Box sx={grid}>
      <Flex sx={{...{justifyContent: 'center', alignItems: 'center'},...gridItem, ...heroItem, ...(heroItem.transitioning(isTransitioning))}}>
        <Image src={icons[icon]} sx={{...heroIcon, ...(heroIcon.background(iconWidth, hasBackground)), ...(heroIcon.transitioning(isTransitioning))}} />
      </Flex>
      <Flex sx={{...gridItem,...makerItem}}>
        <WrappedWizard isTransitioning={isTransitioning} />
      </Flex>
    </Box>
  );  
};

VaultMaker.defaultProps = {
  icon: savingIcon,
  iconWidth: '300px',
  isTransitioning: false
};

