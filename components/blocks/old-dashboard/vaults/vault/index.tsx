import { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';

export interface VaultProps {}

export const Vault: FC<VaultProps> = () => {

    return (
        <Box width={1} sx={styles.container} />
    )
}

Vault.displayName = 'Vault';