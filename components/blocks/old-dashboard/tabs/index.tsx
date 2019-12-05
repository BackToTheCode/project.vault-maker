/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Children, FC } from 'react';
import { Box, Flex, Text } from 'rebass';
import styles from './styles';
import { Tab, TabProps } from './tab';

export interface TabsProps {
  //   variant?: string;
  children?: React.ReactNode | string;
  //   address?: string;
  //   ern?: string;
  //   isConnected?: boolean;
}

export interface Tabs {
    Tab: FC<TabProps>;
}

export const Tabs: FC<TabsProps> & Tabs = props => {
  const { children } = props;
  return (
    <Flex sx={styles.container}>
      {Children.map(children, (child: any) => {
        if (child.type.displayName === 'Tab') {
          return React.cloneElement(child, child.props);
        }
        return child;
      })}
      <Box width={1} sx={styles.filler} />
    </Flex>
  );
};

Tabs.Tab = Tab;

Tabs.displayName = 'Tabs';
