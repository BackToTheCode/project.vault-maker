import { FC } from 'react';
import { Box, Text} from 'rebass';
import styles from './styles';

/**
 * VaultItemProps {@link VaultItem}
 * @see VaultItem
 */

export interface VaultItemProps {
  label: string;
  /**
   * Styles object that is understood by system-ui
   */
  sx?: any;
  value: string;
}

export const VaultItem: FC<VaultItemProps> = (props) => {
  const { label, sx, value } = props;
  const { container } = styles;

  return (
    <Box sx={{ ...container, ...sx }}>
      <Text variant="body.small" sx={styles.label}>{label}</Text>
      <Text variant="body.large" sx={styles.value}>{value}</Text>
    </Box>
  );
};
