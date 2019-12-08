import { render } from '@testing-library/react';
import React from 'react';
import { Header } from '../header';

describe('<Header /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Not connected';

    // Act
    const { getByText } = render(<Header />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
