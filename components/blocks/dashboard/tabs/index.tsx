/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Children, FC } from 'react';
import { Box, Flex, Text } from 'rebass';
import styles from './styles';

export interface TabsProps {
  children?: React.ReactNode | string;
}

export const Tabs: FC<TabsProps> = props => {
  const { container, tabs, text} = styles;
  return (
    <Box sx={container}>
      <Box sx={tabs}>
        <Text variant="body.regular" sx={text}>
          Open
        </Text>
        <Text variant="body.regular" sx={text}>
          Closed
        </Text>
      </Box>
    </Box>
  );
};
