import { render } from '@testing-library/react';
import React from 'react';
import { Connect } from '../connect';

describe('<Connect /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Connect with Metamask';

    // Act
    const { getByText } = render(<Connect />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
