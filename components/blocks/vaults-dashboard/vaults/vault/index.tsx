/** @jsx jsx */
import { CoinIcon, GridContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import ethLogo from '../../../../../public/images/ethereum-logo.svg';
import styles from './styles';
import { VaultItem } from './vault-item';

/**
 * VaultsProps {@link Vault}
 * @see Vault
 */
export interface VaultProps {
  /**
   * Brand color in rgb format
   */
  brand?: string;
  /**
   * Image url for Token
   */
  image?: string;
  /**
   * Styles object that is understood by system-ui
   */
  sx?: any;
}

/**
 * List of Vaults as Rows
 *
 * @component
 * @example
 * return (
 *   <Vault />
 * )
 *
 * @see VaultProps
 * @extends {FC<Props>}
 */
export const Vault: FC<VaultProps> = props => {
  const { brand, image, sx } = props;
  const { token, vault } = styles;
  return (
    <GridContainer data-testid="first-vault" sx={{ ...vault, ...sx }}>
      <CoinIcon icon={image} brand={brand} sx={token} />
      <VaultItem label="TICKER" value="ETH" />
      <VaultItem label="DAI" value="1000" />
      <VaultItem label="COLLATERAL (USD)" value="3000" />
      <VaultItem label="LIQUIDATION (USD)" value="1500" />
    </GridContainer>
  );
};

Vault.defaultProps = {
  brand: 'rgb(201, 157, 102)',
  image: ethLogo
};
