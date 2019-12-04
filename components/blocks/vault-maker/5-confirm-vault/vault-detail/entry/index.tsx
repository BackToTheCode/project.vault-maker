import { FC } from 'react';
import { Box, SxStyleProp, Text } from 'rebass';
import styles from './styles';

export interface EntryProps {
  symbol: string;
  sx?: SxStyleProp;
  isDark?: boolean;
  children: React.ReactNode | string;
}

export const Entry: FC<EntryProps> = props => {
  const { children, symbol, sx, isDark } = props;
  return (
    <Box sx={{...styles.container, ...sx, ...(isDark ? styles.container.dark : {})}}>
      <Text sx={styles.label} variant="body.small">
        {`${symbol}`}
      </Text>
      <Text variant="body.regular">{children}</Text>
    </Box>
  );
};
