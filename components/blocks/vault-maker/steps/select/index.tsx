import { WideContainer } from '@backtothecode/vm-ui-library';
import React, { FC } from 'react';
import { Flex, Text } from 'rebass';
import { LOCK_NUM, SWAP_NUM } from '../../../../../constants/step-names';
import { Token } from '../../../../../store/reducers/token-reducer';
import toCurrency from '../../../../../utils/helpers/currency-formatter';
import { Button } from '../../../../elements/button/regular';
import { Title } from '../../../../elements/title';
import styles from './styles';

/**
 * SelectProps {@link Select}
 * @see Select
 */

export interface SelectProps {
  /**
   * Dispatch the next step the wizard should progress to
   */
  dispatchStep: ({ step }: { step: number }) => void;
  /**
   * A system-ui style object
   */
  sx?: any;
  /**
   * The currently selected Token
   */
  selectedToken: Token;
}

/**
 * Select step of Wizard
 *
 * @components
 * @example
 * return (
 *   <Select  />
 * )
 *
 * @see SelectProps
 * @extends {FC<Props>}
 */
export const Select: FC<SelectProps> = props => {
  const { balanceTitle, balanceToken, balanceUsd, button, buttonContainer, container, subTitle, swap, title } = styles;
  const { selectedToken, sx } = props;

  /**
   * Click handler for progressing to the select step of 
   * the vault-maker wizard
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const confirmClickHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    evt.preventDefault();
    props.dispatchStep({ step: LOCK_NUM });

  }
  
  /**
   * Click handler for switching to the select step of 
   * the vault-maker wizard
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const swapClickHandler = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault();
    props.dispatchStep({ step: SWAP_NUM });

  }

  const { balance, symbol, usdValue } = selectedToken;

  return (
    <Flex sx={{...container, ...sx }}>
      <Title sx={title}>Select a token</Title>
      <Text sx={{...title, ...subTitle}} variant="body.regular">Decide what tokens you would like to use as collateral for your Vault</Text>
      <WideContainer data-testid="first-vault" sx={{ ...styles.balance, ...sx }}>
        <Text sx={balanceTitle} variant="body.regular">Balance</Text>
        <Title sx={balanceToken}>{`${toCurrency(balance)} ${symbol}`}</Title>
        <Text sx={balanceUsd} variant="body.regular">{`${toCurrency(usdValue)} USD`}</Text>
      </WideContainer>
      <WideContainer sx={buttonContainer}>
         <Button onClick={confirmClickHandler}sx={button}>Confirm</Button>
         <Text onClick={swapClickHandler} sx={swap} variant="body.regular">Swap collateral</Text>
      </WideContainer>   
    </Flex>
  );
};
