import { render } from '@testing-library/react';
import React from 'react';
import { Vaults } from '../vaults';

describe('<Vaults /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedTestId = "first-vault";

    // Act
    const { getByTestId } = render(<Vaults />);
    const element = getByTestId(expectedTestId)

    // Assert
    expect(element).toMatchSnapshot();
  });
});
