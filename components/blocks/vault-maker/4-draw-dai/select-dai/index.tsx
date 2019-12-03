/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Input } from '@rebass/forms';
import { useTheme } from 'emotion-theming';
import { FC, useEffect, useState } from 'react';
import { Box, Text } from 'rebass';
import toCurrency from '../../../../../utils/currency-formatter';
import styles from './styles';

export interface SelectDaiProps {
  children?: React.ReactChild[];
  lockAmount?: number;
  handleDrawDaiChange?: (amount: number) => void;
  setValid: any;
  symbol?: string;
  tokens?: any;
  valid: boolean;
}

export const SelectDai: FC<SelectDaiProps> = props => {
  const { lockAmount: amountLocked, symbol, tokens, valid } = props;
  const selectedToken = tokens.filter(token => token.symbol === symbol)[0];

  const maxDai = (amountLocked * selectedToken.price) / selectedToken.ratio;

  const theme: any = useTheme();
  const [amount, setAmount] = useState(toCurrency(0));
  const [width, setWidth] = useState(5);

  const remaining = maxDai - amount;
  const constrainedRemaining =
    remaining > maxDai ? maxDai : remaining < 0 ? 0 : remaining;

  useEffect(() => {
    setAmount(toCurrency(maxDai));
    props.handleDrawDaiChange(maxDai);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const maxLength = 8;
    const { value } = event.target;
    const currentAmount = parseFloat(value);

    if (currentAmount < 0) {
      props.setValid(false);
    } else if (currentAmount > maxDai) {
      props.setValid(false);
    } else {
      props.setValid(true);
    }

    if (value.length < maxLength) {
      setAmount(currentAmount);
      props.handleDrawDaiChange(currentAmount);
      setWidth(value.length);
    }
  };

  return (
    <Box sx={styles.container}>
      <Text variant="body.regular" sx={styles.label}>
        I WANT TO DRAW
      </Text>
      <Input
        id="drawAmount"
        name="drawAmount"
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
      <Text variant="heading.regular" sx={styles.symbol}>
        DAI
      </Text>
      <Text
        sx={{ ...styles.detail, ...styles.lockDetail }}
        variant="body.small"
      >
        <Text as="span" sx={styles.detailLabel}>{`Maximum: `}</Text>
        <Text as="span" sx={styles.daiValue}>{`${toCurrency(maxDai)}`}</Text>
        {` DAI`}
      </Text>
      <Text
        sx={{ ...styles.detail, ...styles.remainingBalance }}
        variant="body.small"
      >
        <Text as="span" sx={styles.detailLabel}>{`Remaining: `}</Text>
        <Text as="span" sx={styles.daiValue}>{`${toCurrency(
          constrainedRemaining ? constrainedRemaining : 0
        )}`}</Text>
        {` DAI`}
      </Text>
    </Box>
  );
};

SelectDai.displayName = 'SelectDai';
