import { LockCollateral } from '../3-lock-collateral/wrapped';

export const lockCollateral = (symbol: string) => {
    return (
      <LockCollateral.Wrapped>
        <LockCollateral.Title>
          {`How much ${symbol} would you like to lock as collateral`}
        </LockCollateral.Title>
        <LockCollateral.SelectAmount />
        <LockCollateral.CTAButton>Lock</LockCollateral.CTAButton>
        <LockCollateral.OAButton>Go back</LockCollateral.OAButton>
      </LockCollateral.Wrapped>
    );
  };