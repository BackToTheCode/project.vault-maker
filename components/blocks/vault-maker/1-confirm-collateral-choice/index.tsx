import React, { Children, FC, Fragment, useEffect, useState } from 'react';
import { Box } from 'rebass';
import {
  LOCK_COLLATERAL_NUM,
} from '../../../../constants/step-names';
import { CTAButton, CTAButtonProps } from '../../../elements/cta-button';
import { HorizontalRule, HorizontalRuleProps} from '../../../elements/horizontal-rule';
import { ChildExtension } from '../../../elements/shared/child-extension';
import { Title, TitleProps } from '../../../elements/title';
import { Balance, BalanceProps } from './balance';
import { OAButton, OAButtonProps } from './oa-button';
import styles from './styles';

export interface ChooseCollateral {
  Balance: FC<BalanceProps>;
  Title: FC<TitleProps>;
  HorizontalRule: FC<HorizontalRuleProps>;
  CTAButton: FC<CTAButtonProps>;
  OAButton: FC<OAButtonProps>;
  Wrapped?: FC<ChooseCollateralProps>;
}

export interface ChooseCollateralProps {
  children: React.ReactNode;
  dispatchStep?: ({ step }: { step: number }) => void;
}

export const ConfirmCollateral: FC<ChooseCollateralProps> &
  ChooseCollateral = props => {
  const { children, dispatchStep } = props;

  const [visible, setVisible] = useState({});

  useEffect(() => {
    setVisible({ opacity: 1});
  }, [])  
  
  return (
    <Box sx={{...styles.container, ...visible}}>
      {Children.map(children, (child: React.ReactElement & ChildExtension) => {
        if (child.type.displayName === 'CoinIcon') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'Balance') {
          return React.cloneElement(child, child.props);
        }
        
        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'HorizontalRule') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'CTAButton') {
          const newProps: CTAButtonProps = { ...child.props, dispatchStep, step: LOCK_COLLATERAL_NUM };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'OAButton') {
          const newProps: OAButtonProps = { ...child.props, handleChange: dispatchStep };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Box>
  );
};

ConfirmCollateral.Balance = Balance;
ConfirmCollateral.HorizontalRule = HorizontalRule;
ConfirmCollateral.Title = Title;
ConfirmCollateral.CTAButton = CTAButton;
ConfirmCollateral.OAButton = OAButton;
