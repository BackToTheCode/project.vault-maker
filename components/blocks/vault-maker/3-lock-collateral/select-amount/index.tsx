/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Input } from '@rebass/forms';
import { useTheme } from 'emotion-theming';
import { FC, useEffect, useState } from 'react';
import { Box, Text } from 'rebass';
import toCurrency from '../../../../../utils/currency-formatter';
import styles from './styles';

export interface SelectAmountProps {
  children?: React.ReactChild[];
  handleLockedCollateralChange?: ({
    lockAmount
  }: {
    lockAmount: number;
  }) => void;
  valid: boolean;
  setValid: any;
  symbol?: string;
  tokens?: any;
}

export const SelectAmount: FC<SelectAmountProps> = props => {
  const { symbol, tokens, valid } = props;
  const selectedToken = tokens.filter(token => token.symbol === symbol)[0];
  const maxAvailableTokens = selectedToken.balance;
  const initialAmount = 0;

  const theme: any = useTheme();
  const [amount, setAmount] = useState(initialAmount);
  const [width, setWidth] = useState(5);

  useEffect(() => {
    if (maxAvailableTokens > initialAmount) {
      setAmount(toCurrency(maxAvailableTokens));
      props.handleLockedCollateralChange({
        lockAmount: maxAvailableTokens
      });
    }
  }, [maxAvailableTokens]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = 8;
    const { value } = event.target;
    const currentAmount = parseFloat(value);

    if (currentAmount < 0) {
      props.setValid(false);
    } else if (currentAmount > maxAvailableTokens) {
      props.setValid(false);
    } else {
      props.setValid(true);
    }

    if (value.length < maxLength) {
      setAmount(currentAmount);
      props.handleLockedCollateralChange({
        lockAmount: currentAmount
      });
      setWidth(value.length);
    }
  };

  const gasFees = 0.05;
  const maxRemaining = selectedToken.balance - gasFees;
  const remaining = selectedToken.balance - amount;
  const constrainedRemaining =
    remaining > maxRemaining ? maxRemaining : remaining < 0 ? 0 : remaining;

  const maxLocked = selectedToken.usdValue;
  const locked = amount * selectedToken.price;
  const constrainedLocked =
    locked > maxLocked ? maxLocked : locked < 0 ? 0 : locked;

  return (
    <Box sx={styles.container}>
      <Text variant="body.regular" sx={styles.label}>
        I WANT TO LOCK
      </Text>
      <Input
        id="lockAmount"
        name="lockAmount"
        type="number"
        value={amount}
        sx={{
          ...theme.text.heading.extra,
          ...styles.input,
          ...{ width: width + 'ch' },
          ...(!valid ? { bg: 'superLightWarning', borderColor: 'warning' } : {})
        }}
        placeholder="0"
        onChange={handleChange}
      />
      <Text variant="heading.regular" sx={styles.symbol}>{`${symbol}`}</Text>
      <Text
        sx={{ ...styles.detail, ...styles.lockDetail }}
        variant="body.small"
      >
        <Text as="span" sx={styles.detailLabel}>{`Locked: `}</Text>
        <Text as="span" sx={styles.collateralValue}>{`$${toCurrency(
          constrainedLocked
        )}`}</Text>
        {` @ ${toCurrency(selectedToken.price)} USD / ${symbol}`}
      </Text>
      <Text
        sx={{ ...styles.detail, ...styles.remainingBalance }}
        variant="body.small"
      >
        <Text as="span" sx={styles.detailLabel}>{`Remaining: `}</Text>
        <Text as="span" sx={styles.collateralValue}>{`${toCurrency(
          constrainedRemaining
        )}`}</Text>
        {` ${symbol}`}
      </Text>
    </Box>
  );
};

SelectAmount.displayName = 'SelectAmount';
