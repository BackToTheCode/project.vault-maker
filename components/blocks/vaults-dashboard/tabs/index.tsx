/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';
import { Tab } from './tab';

export interface TabsProps {
  children?: React.ReactNode | string;
}

// Create GridContainer from box

export const Tabs: FC<TabsProps> = props => {
  const { container, tabs, text} = styles;
  return (
    <Box sx={container}>
      <Box sx={tabs}>
        <Tab isActive={true}>Open</Tab>
        <Tab>Closed</Tab>
      </Box>
    </Box>
  );
};
