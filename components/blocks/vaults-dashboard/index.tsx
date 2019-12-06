/** @jsx jsx */
import { WideContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import React, { FC, useEffect, useState } from 'react';
import styles from './styles';
import { Tabs } from './tabs';
import { Vaults } from './vaults';

export interface DashboardProps {
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

export const Dashboard: FC<DashboardProps> = props => {
  const { children, isConnected, address } = props;
  const { container, width } = styles;

  // const [isTransitioning, setTransitioning] = useState(false)

  // useEffect(() => { 
  //   setTransitioning(true);
  // })

  return (
    <WideContainer sx={container}>
        <Tabs sx={width} />
        <Vaults sx={width} />
    </WideContainer>
  );
};
