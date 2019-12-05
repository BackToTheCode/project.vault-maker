import React, { Children, FC } from 'react';
import { Box, Flex } from 'rebass';
import styles from './styles';
import { Vault, VaultProps } from './vault';

export interface VaultsProps {
  children: React.ReactNode | string;
}

export interface Vaults {
  Vault: FC<VaultProps>;
}

export const Vaults: FC<VaultsProps> & Vaults = props => {
  const { children } = props;
  return (
    <Box sx={styles.container}>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Vault') {
          return React.cloneElement(child, child.props);
        }
        return child;
      })}
    </Box>
  );
};

Vaults.Vault = Vault;
