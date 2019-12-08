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

/**
 * Sends custom event to Tealium using utag.link and updates utag_data when Tealium is available
 * - event action is a concatenation of 'send', category suffix and label suffix
 * - Example:
 * -- event_category = PetInsurance_PetInsurance_Customer
 * -- event_action = sendCustomerId
 * -- evemt_label = PetInsurance_PetInsurance_Customer_Id
 * @param {string} value - the value to be sent to tealium
 * @param {string} catSuffix - PASCAL CASE - used to populate event category and action
 * @param {string} labelSuffix - PASCAL CASE - used to populate event category, action and label
 */
export default () => {
  const [state, dispatch] = useStore(rootReducer) as any;

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
        <WrappedHeader />
        <WrappedVaultMaker />
      </Provider>
    </ThemeProvider>
  );
};
