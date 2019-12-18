/** @jsx jsx */
import { CoinIcon } from '@backtothecode/vault-maker-ui/dist/cjs/index';
import { jsx } from '@emotion/core';
import { Radio } from '@rebass/forms';
import React, { FC } from 'react';
import { Box, Text } from 'rebass';
import styles from './styles';

export interface OptionProps {
  icon: any;
  brand: string;
  name: string;
  symbol?: string;
  tokens?: any[];
  dispatchSelectToken?: ({ selectedToken }: { selectedToken: any }) => void;
}

export const Option: FC<OptionProps> = props => {
  const { icon, name, brand, symbol, children, tokens } = props;
  const isSelected = name === symbol;

  const handleClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    evt.preventDefault();
    const selectedToken = tokens.filter(
      (token: any) => token.symbol === name
    )[0];
    console.log('selectedToken',selectedToken);
    props.dispatchSelectToken({ selectedToken });
  };

  return (
    <Box sx={{...styles.option, ...(isSelected ? styles.selected : {})}} onClick={handleClick}>
      <Radio
        sx={styles.radio}
        onChange={handleClick}
        checked={isSelected}
      />
      <Text sx={styles.symbol} variant="heading.large">
        {children}
      </Text>
      <CoinIcon sx={styles.icon} brand={brand} icon={icon} />
    </Box>
  );
};

Option.displayName = 'Option';

