/** @jsx jsx */
import { Container, WideContainer } from '@backtothecode/vm-ui-library';
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Title } from '../../elements/title';
import styles from './styles';
import { Tabs } from './tabs';
import { Vaults } from './vaults';

export interface DashboardProps {

}

/**
 * Dashboard component lists out existing Vaults (CDPs)
 *
 * @component
 * @example
 * const isConnected = true
 * const address = '0x61049F5e03Bfe3823f274C479158A94bcA26456c'
 * return (
 *   <Header isConnected={isConnected} address={address} />
 * )
 *
 * @see HeaderProps
 * @extends {FC<Props>}
 */
export const Dashboard: FC<DashboardProps> = props => {
  const { container, titleContainer, width } = styles;

  return (
    <WideContainer sx={container}>
      <Container sx={{...width, ...titleContainer}}>
        <Title>My Vaults</Title>
      </Container>

      <Tabs sx={width} />
      <Vaults sx={width} />
    </WideContainer>
  );
};
