import { FC, useState, useEffect } from 'react';
import { Box, Text } from 'rebass';
import toCurrency from '../../../../../utils/currency-formatter';
import { HorizontalRule } from '../../../../elements/horizontal-rule';
import { Entry } from './entry';
import styles from './styles';

export interface VaultDetailProps {
  lockAmount?: number;
  drawAmount?: number;
  ratio?: number;
  price?: number;
  symbol?: string;
}

export const VaultDetail: FC<VaultDetailProps> = props => {
  const { lockAmount, drawAmount, ratio, price, symbol } = props;

  const collateralValue = lockAmount * price;
  const liquidiationValue = collateralValue / ratio;

  const [visible, setVisible] = useState({});
  
  useEffect(() => {
    setVisible({ opacity: 1});
  }, [])  
  
  return (
    <Box sx={{...styles.container, ...visible}}>
      <Entry symbol={symbol} isDark={true}>{`${toCurrency(lockAmount)}`}</Entry>
      <Entry symbol={"DAI"}>{`${toCurrency(drawAmount)}`}</Entry>
      <Entry symbol={"COLLATERAL VALUE"} isDark={true}>{`${toCurrency(collateralValue)} USD`}</Entry>
      <Entry sx={{mb: 3}}symbol={"LIQUIDATION VALUE"}>{`${toCurrency(liquidiationValue)} USD`}</Entry>
    </Box>
  );
};

VaultDetail.displayName = 'VaultDetail';
