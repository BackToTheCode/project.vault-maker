import React, { Children, FC, useState, useEffect } from 'react';
import { Box } from 'rebass';
import {
  CONFIRM_COLLATERAL_NUM,
} from '../../../../constants/step-names';
import { CTAButton, CTAButtonProps } from '../../../elements/cta-button';
import { HorizontalRule } from '../../../elements/horizontal-rule';
import { OAButton, OAButtonProps } from '../../../elements/oa-button';
import { Title, TitleProps } from '../../../elements/title';
import { ChildExtension } from '../../../elements/shared/child-extension';
import { Option, OptionProps } from './option';
import styles from './styles';

export interface ChangeCollateralProps {
  children: React.ReactNode;
  symbol: string;
  tokens: any[];
  dispatchSelectToken: (payload: string) => void;
  dispatchStep: (payload: string) => void;
}

export interface SelectCollateral {
  Option: FC<OptionProps>;
  CTAButton: FC<CTAButtonProps>;
  OAButton: FC<OAButtonProps>;
  Title: FC<TitleProps>;
  HorizontalRule: any;
  Wrapped?: any;
}

export const ChangeCollateral: FC<ChangeCollateralProps> &
  SelectCollateral = props => {
  const { children, symbol, tokens, dispatchSelectToken, dispatchStep } = props;

  const handleSubmit = (event: React.SyntheticEvent) => event.preventDefault();

  const [visible, setVisible] = useState({});

  useEffect(() => {
    setVisible({ opacity: 1});
  }, [])  
  
  return (
    <Box as="form" sx={{...styles.form, ...visible}} onSubmit={handleSubmit}>
      {Children.map(
        children,
        (child: React.ReactElement & ChildExtension) => {
          if (child.type.displayName === 'Option') {
            const newProps: OptionProps = {
              ...child.props,
              dispatchSelectToken,
              symbol,
              tokens
            };
            return React.cloneElement(child, newProps);
          }

          if (child.type.displayName === 'Title') {
            return React.cloneElement(child, child.props);
          }

          if (child.type.displayName === 'HorizontalRule') {
            return React.cloneElement(child, child.props);
          }

          if (child.type.displayName === 'CTAButton') {
            const newProps: CTAButtonProps = { ...child.props, dispatchStep, step: CONFIRM_COLLATERAL_NUM };
            return React.cloneElement(child, newProps);
          }

          if (child.type.displayName === 'OAButton') {
            const newProps: OAButtonProps = { ...child.props, dispatchStep, step: CONFIRM_COLLATERAL_NUM };
            return React.cloneElement(child, newProps);
          }

          return child;
        } 
      )}
    </Box>
  );
};

ChangeCollateral.CTAButton = CTAButton;
ChangeCollateral.OAButton = OAButton;
ChangeCollateral.Title = Title;
ChangeCollateral.Option = Option;
ChangeCollateral.HorizontalRule = HorizontalRule;
