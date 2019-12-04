/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import React, { FC } from 'react';
import render from './render';
import styles from './styles';

export interface DashboardProps {
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

interface Dashboard {
  Wrapped?: any;
};

export const Dashboard: FC<DashboardProps> & Dashboard = props => { 
  const { cdp } = props;
  const { tabs, vaults } = render;

  console.log('CDP', cdp);
  console.log('STATE', state)


  return (
    <Container sx={styles.container} variant="container.default">
        {tabs()}
        {vaults()}
    </Container>
  );
};

