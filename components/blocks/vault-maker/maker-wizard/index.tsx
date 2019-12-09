import React from 'react';
import { Box } from 'rebass';
import steps, { CONNECT, LOCK } from '../../../../constants/step-names';
import { Connect } from '../states/connect';
import { Lock } from '../states/lock';
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
  const { sx, step } = props;

  return (
    <Box>
      {step === steps[CONNECT] && <Connect />} 
      {step === steps[LOCK] && <Lock />} 
    </Box>
  );
};
