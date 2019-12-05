/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Children, FC } from 'react';
import { Box, Flex, Text } from 'rebass';
import styles from './styles';

export interface TabsProps {
  children?: React.ReactNode | string;
}

export const Tabs: FC<TabsProps> = props => {
  const { children } = props;
  const { container, filler} = styles;
  return (
    <Flex sx={container}>
      <Box>
        <Text variant="body.regular">
          Open
        </Text>
        <Text variant="body.regular">
          Closed
        </Text>
      </Box>
      <Box sx={filler} />
    </Flex>
  );
};
