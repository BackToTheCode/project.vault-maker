import { useTheme } from 'emotion-theming';
import React from 'react';
import { Box } from 'rebass';
import steps, { CONNECT, LOCK, SELECT, SWAP } from '../../../../constants/step-names';
import { WrappedConnect } from '../steps/connect/wrapper';
import { WrappedLock } from '../steps/lock/wrapper';
import { WrappedSelect } from '../steps/select/wrapper';
import { WrappedSwap } from '../steps/swap/wrapper';
import styles from './styles';

/**
 * VaultMakerProps {@link Wizard}
 * @see Wizard
 */

export interface WizardProps {
  /**
   * Whether a route transition is in progress
   */
  sx?: any;
}

/**
 * Vault Maker Wizard
 *
 * @component
 * @example
 * return (
 *   <Wizard  />
 * )
 *
 * @see WizardProps
 * @extends {FC<Props>}
 */
export const Wizard = props => {
  const { isTransitioning, sx, step } = props;
  const { base, transitioning } = styles;
  const theme: any = useTheme();

  console.log('wizard - step', step)

  return (
    <Box sx={{...base, ...(transitioning(isTransitioning)), ...sx}}>
      {step === steps[CONNECT] && <WrappedConnect />} 
      {step === steps[SELECT] && <WrappedSelect />} 
      {step === steps[SWAP] && <WrappedSwap theme={theme} />} 
      {step === steps[LOCK] && <WrappedLock />}
    </Box>
  );
};

