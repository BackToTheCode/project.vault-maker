import { render } from '@testing-library/react';
import React from 'react';
import { Swap } from '.';

describe('<Swap /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Select a token';

    // Act
    const { getByText } = render(<Swap />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
