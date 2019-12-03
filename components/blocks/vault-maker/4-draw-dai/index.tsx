import React, { Children, FC, useState } from 'react';
import { Box } from 'rebass';
import {
  CONFIRM_VAULT_NUM,
  LOCK_COLLATERAL_NUM
} from '../../../../constants/step-names';
import { CTAButton, CTAButtonProps } from '../../../elements/cta-button';
import {
  HorizontalRule,
  HorizontalRuleProps
} from '../../../elements/horizontal-rule';
import { OAButton, OAButtonProps } from '../../../elements/oa-button';
import { Title, TitleProps } from '../../../elements/title';
import { SelectDai, SelectDaiProps } from './select-dai';
import styles from './styles';

export interface DrawDai {
  SelectDai: FC<SelectDaiProps>;
  HorizontalRule: FC<HorizontalRuleProps>;
  CTAButton: FC<CTAButtonProps>;
  OAButton: FC<OAButtonProps>;
  Title: FC<TitleProps>;
  Wrapped?: any;
}

export interface DrawDaiProps {
  children: React.ReactNode;
  symbol?: string;
  tokens: any[];
  lockAmount: number;
  drawAmount: number;
  dispatchDrawDai: ({ drawAmount }: { drawAmount: number }) => void;
  dispatchStep: ({ step }: { step: number }) => void;
}

export const DrawDai: FC<DrawDaiProps> & DrawDai = props => {
  const {
    children,
    symbol,
    tokens,
    lockAmount,
    drawAmount,
    dispatchStep
  } = props;

  const handleSubmit = (event: React.SyntheticEvent) => event.preventDefault();

  const handleDrawDaiChange = (amount: number) => {
    props.dispatchDrawDai({ drawAmount: amount });
  };

  const [valid, setValid] = useState(true);

  return (
    <Box as="form" sx={styles.form} onSubmit={handleSubmit}>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Title') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'SelectDai') {
          const newProps: SelectDaiProps = {
            ...child.props,
            drawAmount,
            handleDrawDaiChange,
            lockAmount,
            setValid,
            symbol,
            tokens,
            valid
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'HorizontalRule') {
          return React.cloneElement(child, child.props);
        }

        if (child.type.displayName === 'CTAButton') {
          const newProps: CTAButtonProps = {
            ...child.props,
            dispatchStep,
            isDisabled: !valid,
            step: CONFIRM_VAULT_NUM
          };
          return React.cloneElement(child, newProps);
        }

        if (child.type.displayName === 'OAButton') {
          const newProps: OAButtonProps = {
            ...child.props,
            dispatchStep,
            step: LOCK_COLLATERAL_NUM
          };
          return React.cloneElement(child, newProps);
        }

        return child;
      })}
    </Box>
  );
};

DrawDai.Title = Title;
DrawDai.HorizontalRule = HorizontalRule;
DrawDai.CTAButton = CTAButton;
DrawDai.OAButton = OAButton;
DrawDai.SelectDai = SelectDai;
