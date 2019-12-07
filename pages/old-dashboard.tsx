import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider, withTheme } from 'emotion-theming';
import React, { useEffect, useState } from 'react';
import { Dashboard } from '../components/blocks/vaults-dashboard/wrapped';
import { Header } from '../components/blocks/header/wrapped';
import { Context } from '../components/context';
import logoImage from '../public/images/mark-maker.svg';
import { rootReducer, useStore } from '../store/store';
import appTheme from '../styles/theme';

const Provider = Context.Provider;

export default () => {
  const [state, dispatch] = useStore(rootReducer) as any; 

  console.log('state', state)
  console.log('state.services', state.services)

  const makeGlobalStyles = (theme: any) => css`
    ${emotionNormalize}
    body {
      background: ${theme.colors.superLightGrey};
    }
  `;

  const GlobalStyles = withTheme(({ theme }) => (
    <Global styles={makeGlobalStyles(theme)} />
  ));

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Provider value={{ state, dispatch }}>
        {renderHeader()}
        {renderDashboard()}
      </Provider>
    </ThemeProvider>
  );
};

// Section renderers
const renderHeader = () => {
  return (
    <Header.Wrapped>
      <Header.Logo image={logoImage} />
      <Header.Address />
    </Header.Wrapped>
  );
};

const renderDashboard = () => {
  return (
    <Dashboard.Wrapped />
  )
}

