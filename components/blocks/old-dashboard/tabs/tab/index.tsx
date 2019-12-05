import { FC } from 'react';
import { Box, Text } from 'rebass';
import styles from './styles';

export interface TabProps {
  children: React.ReactNode | string;
  active?: boolean;
}

export const Tab: FC<TabProps> = props => {
  const { active, children } = props;

  return (
    <Box sx={{...styles.container,...(active ? styles.container.active : {}) }}>
      <Text variant="body.regular" sx={{...styles.text, ...(active ? styles.active : {})}}>{children}</Text>
    </Box>
  );
};

Tab.displayName = 'Tab';
