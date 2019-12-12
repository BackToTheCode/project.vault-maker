import { css, Global } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';
import { ThemeProvider, withTheme } from 'emotion-theming';
import React from 'react';
import { WrappedHeader } from '../components/blocks/header/wrapper';
import { WrappedVaultMaker } from '../components/blocks/vault-maker/wrapper';
import { Context } from '../components/context';
import { rootReducer, useStore } from '../store/store';
import appTheme from '../styles/theme';

const Provider = Context.Provider;

export default () => {
  const [state, dispatch] = useStore(rootReducer) as any;

  const makeGlobalStyles = (theme: any) => css`
    ${emotionNormalize}
    body {
      background: ${theme.colors.superLightGrey};
      line-height: ${theme.lineHeights.body};
    }
  `;

  const GlobalStyles = withTheme(({ theme }) => (
    <Global styles={makeGlobalStyles(theme)} />
  ));

  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Provider value={{ state, dispatch }}>
        <WrappedHeader />
        <WrappedVaultMaker />
      </Provider>
    </ThemeProvider>
  );
};
