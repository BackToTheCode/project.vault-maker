import { render } from '@testing-library/react';
import React from 'react';
import { Nav } from '../nav';


describe('<Nav /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Vaults';
    const routeHandler = {
      routeToMake: () => {return},
      routeToVaults: () => {return},
    }

    // Act
    const { getByText } = render(<Nav routeHandler={routeHandler} />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
