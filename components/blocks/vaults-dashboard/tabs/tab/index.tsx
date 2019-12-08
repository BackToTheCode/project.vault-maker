/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Text } from 'rebass';
import styles from './styles';

export interface TabProps {
  children?: React.ReactNode | string;
  isActive?: boolean;
}

// Create GridContainer from box

export const Tab: FC<TabProps> = props => {
  const { children, isActive } = props;
  const { active, text } = styles;
  return (
    <Text variant="body.regular" sx={{ ...text, ...(isActive ? active : {}) }}>
      {children}
    </Text>
  );
};
