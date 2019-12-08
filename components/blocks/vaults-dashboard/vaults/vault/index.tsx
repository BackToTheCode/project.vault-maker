/** @jsx jsx */
import { CoinIcon }  from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Flex } from 'rebass';
import ethLogo from '../../../../../public/images/ethereum-logo.svg';
import styles from './styles';

/**
 * VaultsProps {@link VaultProps}
 * @see Vault
 */ 
export interface VaultProps { 
  brand: string;
  image: string;
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
    <Flex data-testid="first-vault" sx={{...vault, ...sx}}>
        <CoinIcon icon={image} brand={brand} sx={token} />
    </Flex>
  );
};

Vault.defaultProps = {
    brand: 'rgb(201, 157, 102)',
    image: ethLogo,

}