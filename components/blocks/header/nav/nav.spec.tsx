import { render } from '@testing-library/react';
import React from 'react';
import { Nav } from '../nav';


describe('<Nav /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Vaults';

    // Act
    const { getByText } = render(<Nav />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
