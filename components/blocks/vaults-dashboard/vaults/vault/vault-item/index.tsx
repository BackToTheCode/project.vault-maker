import { FC } from 'react';
import { Box, Text } from 'rebass';
import styles from './styles';

/**
 * VaultItemProps {@link VaultItem}
 * @see VaultItem
 */

export interface VaultItemProps {
  /**
   * Text to be added to label
   */
  label: string;
  /**
   * Styles object that is understood by system-ui
   */
  sx?: any;
  /**
   * Item value to sit below label
   */
  value: string;
}

/**
 * List of Vaults as Rows
 *
 * @component
 * @example
 * const label="TICKER";
 * const value="ETH"
 * return (
 *   <VaultItem label={label} value={value} />
 * )
 *
 * @see VaultItemProps
 * @extends {FC<Props>}
 */
export const VaultItem: FC<VaultItemProps> = props => {
  const { label, sx, value } = props;
  const { container } = styles;

  return (
    <Box sx={{ ...container, ...sx }}>
      <Text variant="body.small" sx={styles.label}>
        {label}
      </Text>
      <Text variant="body.large" sx={styles.value}>
        {value}
      </Text>
    </Box>
  );
};
