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
      <Entry symbol={"COLLATERAL"}>{`${toCurrency(collateralValue)} USD`}</Entry>
      <Entry symbol={"DAI"} isDark={true}>{`${toCurrency(drawAmount)}`}</Entry>
      <Entry symbol={"LIQUIDATION*"}>{`${toCurrency(liquidiationValue)} USD`}</Entry>
      <Text variant="body.small" sx={{gridColumn: '1 / span 2', lineHeight: 1.5}}>*If the value of your locked collateral falls below the liquidation value then your collateral will be auctioned off. The proceeds will be used to repay your borrowed DAI with the balance being returned to you.</Text>
    </Box>
  );
};

VaultDetail.displayName = 'VaultDetail';
