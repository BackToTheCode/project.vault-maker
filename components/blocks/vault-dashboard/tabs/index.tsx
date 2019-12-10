/** @jsx jsx */
import { Container } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Box } from 'rebass';
import styles from './styles';
import { Tab } from './tab';

/**
 * TabsProps {@link TabsProps}
 * @see Tabs
 */ 
export interface TabsProps {
  /**
   * Styles object that is understood by system-ui
   */
  sx?: any;
}

/**
 * Tabs to navigate different Vault states
 *
 * @component
 * @example
 * return (
 *   <Tabs />
 * )
 *
 * @see TabsProps
 * @extends {FC<Props>}
 */
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
