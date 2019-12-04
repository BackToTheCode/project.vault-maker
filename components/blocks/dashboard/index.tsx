/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import React, { FC, useEffect } from 'react';
import render from './render';
import styles from './styles';

export interface DashboardProps {
  appState: any;
  cdp: any;
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
  dispatchSetState: any;
}

interface Dashboard {
  Wrapped?: any;
}

export const Dashboard: FC<DashboardProps> & Dashboard = props => {
  const { appState, cdp } = props;
  const { tabs, vaults } = render;

  useEffect(() => {
    const initialState = localStorage.getItem('appState');
    console.log('initialState', initialState);
    props.dispatchSetState(initialState);
  }, []);

  console.log('CDP', cdp);

  return (
    <Container sx={styles.container} variant="container.default">
      {tabs()}
      {vaults()}
    </Container>
  );
};
