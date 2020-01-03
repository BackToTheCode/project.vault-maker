import { render } from '@testing-library/react';
import React from 'react';
import { Swap } from '.';
import { Token } from '../../../../../store/reducers/token-reducer';

describe('<Swap /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Select a token';
    const defaultToken: Token = {
      balance: 0,
      ilk: 'ETH-A',
      penalty: 0,
      price: 0,
      ratio: 0,
      symbol: 'ETH',
      usdValue: 0
    };
    const theme = {
      colors: { eth: 'rgb(255,255,255,1)', bat: 'rgba(255,255,255,1)' }
    };

    // Act
    const { getByText } = render(
      <Swap selectedToken={defaultToken} theme={theme} tokens={[defaultToken]} />
    );

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
