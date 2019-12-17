import { render } from '@testing-library/react';
import React from 'react';
import { Select } from '../select';

describe('<Select /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Select a token';

    // Act
    const { getByText } = render(<Select />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
