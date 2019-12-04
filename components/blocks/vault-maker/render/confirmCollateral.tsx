import React from 'react';
import batLogo from '../../../../public/images/bat-logo.png';
import ethLogo from '../../../../public/images/ethereum-logo.svg';
import repLogo from '../../../../public/images/rep-logo.webp';
import { ConfirmCollateral } from '../1-confirm-collateral-choice/wrapped';

export const confirmCollateral = (
    symbol: string,
    balance: number,
    price: number,
    usdValue: number
  ) => {
    const icons: any = {
      BAT: batLogo,
      ETH: ethLogo,
      REP: repLogo
    };
    const icon = icons[symbol];
    return (
      <ConfirmCollateral.Wrapped>
        <ConfirmCollateral.Title>
          {`We suggest ${symbol} as collateral to lock in your Vault`}
        </ConfirmCollateral.Title>
        <ConfirmCollateral.HorizontalRule sx={{mt:6, mb: 8}} />
        <ConfirmCollateral.Balance
          balance={balance}
          price={price}
          usdValue={usdValue}
          symbol={symbol}
          icon={icon}
        />
        <ConfirmCollateral.CTAButton>Sounds good</ConfirmCollateral.CTAButton>
        <ConfirmCollateral.OAButton>
          Switch collateral type
        </ConfirmCollateral.OAButton>
      </ConfirmCollateral.Wrapped>
    );
  };