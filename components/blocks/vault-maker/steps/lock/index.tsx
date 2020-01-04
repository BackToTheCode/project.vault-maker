import { WideContainer } from '@backtothecode/vm-ui-library';
import { Input } from '@rebass/forms';
import React, { FC, useEffect, useState } from 'react';
import { Flex, Text } from 'rebass';
import { DRAW_NUM, SELECT_NUM } from '../../../../../constants/step-names';
import { Token } from '../../../../../store/reducers/token-reducer';
import toCurrency from '../../../../../utils/helpers/currency-formatter';
import { Button } from '../../../../elements/button/regular';
import { Title } from '../../../../elements/title';
import styles from './styles';

/**
 * LockProps {@link Lock}
 * @see Lock
 */

export interface LockProps {
  /**
   * Amount of chosen collateral to lock
   */
  lockAmount: number;
  /**
   * Dispatch the amount of collateral to lock
   */
  dispatchLockCollateral?: ({ lockAmount }: { lockAmount: number }) => void;
  /**
   * Dispatch the next wizard step to the reducer
   */
  dispatchStep?: ({ step }: { step: number }) => void;
  /**
   * The currently selected Token
   */
  selectedToken: Token;
  /**
   * A system-ui style object
   */
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
  const {
    button,
    backButton,
    container,
    input,
    buttonContainer,
    subTitle,
    title
  } = styles;
  const { lockAmount, selectedToken, sx } = props;

  const initialAmount = 0;
  const gasFees = 0.05;
  const { balance, symbol } = selectedToken;
  const maxAvailableTokens = balance - gasFees;

  const [amount, setAmount] = useState(initialAmount);
  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (maxAvailableTokens > initialAmount) {
      setAmount(toCurrency(maxAvailableTokens));
      props.dispatchLockCollateral({
        lockAmount: toCurrency(maxAvailableTokens)
      });
    }
  }, [maxAvailableTokens]);

  const handleSubmit = evt => evt.preventDefault();

  /**
   * Click handler for progressing to the draw step of
   * the vault-maker wizard
   *
   * @typedef {Object} evt      Synthetic React event
   *
   */
  const confirmClickHandler = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    props.dispatchStep({ step: DRAW_NUM });
  };

  /**
   * Click handler for progressing back to the select step of
   * the vault-maker wizard
   *
   * @typedef {Object} evt      Synthetic React event
   *
   */
  const backClickHandler = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    evt.preventDefault();
    props.dispatchStep({ step: SELECT_NUM });
  };

  /**
   * Change handler for Lock collateral input component
   *
   * @typedef {Object} evt      Synthetic React event
   *
   */
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = 8;
    const { value } = evt.target;
    const currentAmount = parseFloat(value);

    if (currentAmount < 0) {
      setValid(false);
    } else if (currentAmount > maxAvailableTokens) {
      setValid(false);
    } else {
      setValid(true);
    }

    if (value.length < maxLength) {
      setAmount(currentAmount);
      props.dispatchLockCollateral({
        lockAmount: currentAmount
      });
    }
  };

  const maxRemaining = selectedToken.balance - gasFees;
  const remaining = selectedToken.balance - amount;
  const constrainedRemaining =
    remaining > maxRemaining ? maxRemaining : remaining < 0 ? 0 : remaining;

  const maxLocked = selectedToken.usdValue;
  const locked = amount * selectedToken.price;
  const constrainedLocked =
    locked > maxLocked ? maxLocked : locked < 0 ? 0 : locked;

  return (
    <Flex as="form" onSubmit={handleSubmit} sx={{ ...container, ...sx }}>
      <Title sx={title}>Lock up collateral</Title>
      <Text sx={{ ...title, ...subTitle }} variant="body.regular">
        {`How much ${symbol} would you like to lock as collateral`}
      </Text>
      <WideContainer>
        <Input
          id="lockAmount"
          name="lockAmount"
          type="number"
          onChange={handleChange}
          sx={{
            ...input,
            ...(!valid ? { color: 'warning', borderColor: 'warning' } : {})
          }}
          placeholder="0"
          value={lockAmount}
        />
        <Title
          sx={{ ...styles.symbol, ...(!valid ? { color: 'warning' } : {}) }}
        >{`${symbol}`}</Title>
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
