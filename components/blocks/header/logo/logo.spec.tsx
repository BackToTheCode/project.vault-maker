import { render } from '@testing-library/react';
import React from 'react';
import { Address } from '../address';


describe('<Logo /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Not connected';

    // Act
    const { getByText } = render(<Address />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
