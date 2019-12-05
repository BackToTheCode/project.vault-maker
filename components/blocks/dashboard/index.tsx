/** @jsx jsx */
import { Container } from '@backtothecode/vault-maker-ui';
import { jsx } from '@emotion/core';
import React, { Children, FC, useEffect, useState } from 'react';
import { Box } from 'rebass';
import { Tabs} from './tabs';
import styles from './styles';

export interface DashboardProps {
  children?: React.ReactNode;
  isConnected?: boolean;
  ern?: string;
  address?: string;
}

export const Dashboard: FC<DashboardProps> = props => {
  const { children, isConnected, address } = props;
  const { container } = styles;

  const [isTransitioning, setTransitioning] = useState(false)

  useEffect(() => { 
    setTransitioning(true);
  })

  return (
    <Container variant="container.wide" sx={container}>
        <Tabs />
    </Container>
  );
};

