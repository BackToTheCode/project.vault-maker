/** @jsx jsx */
import { GridContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box } from 'rebass';
import { Vault } from './vault';
import styles from './styles';

/**
 * VaultsProps {@link VaultsProps}
 * @see Vaults
 */ 
export interface VaultsProps {
  /**
   * Styles object that is understood by system-ui
   */
  sx?: any
}

/**
 * List of Vaults as Rows
 *
 * @component
 * @example
 * return (
 *   <Vaults />
 * )
 *
 * @see VaultsProps
 * @extends {FC<Props>}
 */
export const Vaults: FC<VaultsProps> = props => {
  const { sx } = props;
  const { vaultContainer } = styles;
  return (
    <GridContainer data-testid="vaults" sx={{...vaultContainer, ...sx}}>
      <Vault />
      <Vault />
    </GridContainer>
  );
};
