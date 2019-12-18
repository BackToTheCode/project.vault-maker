import { Container } from '@backtothecode/vm-ui-library';
import React from 'react';
import { Box, Flex, Text } from 'rebass';
import { SELECT_NUM } from '../../../../../constants/step-names';
import batIcon from '../../../../../public/images/bat-logo.png';
import ethIcon from '../../../../../public/images/ethereum-logo.svg'
import { Button } from '../../../../elements/button/regular';
import { Title } from '../../../../elements/title';

import { Option  } from './option';
import styles from './styles';

/**
 * SwapProps {@link Swap}
 * @see Swap
 */

export interface SwapProps {
  /**
   * A system-ui style object
   */
  sx?: any;
}

/**
 * Swap step of Wizard
 *
 * @components
 * @example
 * return (
 *   <Swap  />
 * )
 *
 * @see SwapProps
 * @extends {FC<Props>}
 */
export const Swap = props => {
  const { balance, balanceTitle, balanceToken, balanceUsd, button, buttonContainer, container, subTitle, swap, title } = styles;
  const { selectedToken, sx, tokens } = props;

  /**
   * Click handler for progressing to the lock step of 
   * the vault-maker wizard
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const handleClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    evt.preventDefault();
    props.dispatchStep({step: SELECT_NUM});
  }
  
  /**
   * Handle form submission by blocking any default action
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const handleSubmit = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault();
  }

  const icons = {
    bat: batIcon,
    eth: ethIcon,
  };

  console.log('symbol', selectedToken.symbol);

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Flex sx={{...container, ...sx }}>
        <Title sx={title}>Swap token</Title>
        <Text sx={{...title, ...subTitle}} variant="body.regular">Choose a different token to use as Vault collateral</Text>
        <Option 
          icon={icons.eth}
          name="ETH"
          symbol={selectedToken.symbol}
          dispatchSelectToken={props.dispatchSelectToken}
          tokens={tokens}
          brand={'rgb(255,0,0)'}>
            ETH
            </Option>
        <Option 
          icon={icons.bat}
          name="BAT"
          symbol={selectedToken.symbol}
          dispatchSelectToken={props.dispatchSelectToken}
          tokens={tokens}
          brand={'rgb(255,0,0)'}>BAT</Option>
        <Container sx={buttonContainer}>
          <Button onClick={handleClick} sx={button}>Select</Button>
        </Container>   
      </Flex>
    </Box>
  );
};
