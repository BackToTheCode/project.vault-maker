/** @jsx jsx */
import { Container } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';
import { Tab } from './tab';

export interface TabsProps {
  sx?: any;
}

// Create GridContainer from box

export const Tabs: FC<TabsProps> = props => {
  const { sx } = props;
  const { container, tabs} = styles;
  return (
    <Container sx={{...container, ...sx}}>
      <Box sx={tabs}>
        <Tab isActive={true}>Open</Tab>
        <Tab>Closed</Tab>
        <Tab />
      </Box>
    </Container>
  );
};
