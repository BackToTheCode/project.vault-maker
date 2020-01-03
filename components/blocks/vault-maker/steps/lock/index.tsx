import { WideContainer } from '@backtothecode/vm-ui-library';
import { Input } from '@rebass/forms';
import React, { FC } from 'react';
import { Flex, Text } from 'rebass';
import { DRAW_NUM, SELECT_NUM } from '../../../../../constants/step-names';
import { Token } from '../../../../../store/reducers/token-reducer';
import { Button } from '../../../../elements/button/regular';
import { Title } from '../../../../elements/title';
import styles from './styles';

/**
 * ConnectProps {@link Lock}
 * @see Lock
 */

export interface LockProps {
  /**
   * A system-ui style object
   */
  dispatchStep: ({ step }: { step: number }) => void;
  selectedToken: Token;
  sx?: any;
}

/**
 * Lock step of Wizard
 *
 * @components
 * @example
 * return (
 *   <Lock  />
 * )
 *
 * @see LockProps
 * @extends {FC<Props>}
 */
export const Lock: FC<LockProps> = props => {
  const { button, backButton, container, input, buttonContainer, subTitle, title } = styles;
  const { selectedToken, sx } = props;

  const handleSubmit = evt => evt.preventDefault();

  /**
   * Click handler for progressing to the lock step of 
   * the vault-maker wizard
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const confirmClickHandler = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
    evt.preventDefault();
    props.dispatchStep({ step: DRAW_NUM });

  }

  /**
   * Click handler for progressing to the lock step of 
   * the vault-maker wizard
   *
   * An instantiated maker object   
   * @typedef {Object} evt      Synthetic React event
   * 
   */
  const backClickHandler = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>)  => {
    evt.preventDefault();
    props.dispatchStep({ step: SELECT_NUM });

  }

  const { symbol } = selectedToken;

  return (
    <Flex as="form" onSubmit={handleSubmit} sx={{ ...container, ...sx }}>
      <Title sx={title}>Lock up collateral</Title>
      <Text sx={{ ...title, ...subTitle }} variant="body.regular">
        {`How much ${symbol} would you like to lock as collateral`}
      </Text>
      <WideContainer>
        <Input sx={input} />
        <Title sx={styles.symbol}>{`${symbol}`}</Title>
      </WideContainer>

      <WideContainer sx={buttonContainer}>
        <Button onClick={confirmClickHandler} sx={button}>
          Lock
        </Button>
        <Text onClick={backClickHandler} sx={backButton} variant="body.regular">
          Go back
        </Text>
      </WideContainer>
    </Flex>
  );
};
