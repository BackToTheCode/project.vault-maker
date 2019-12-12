import { render } from '@testing-library/react';
import React from 'react';
import { Tabs } from '../tabs';

describe('<Tabs /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const expectedText = 'Open';

    // Act
    const { getByText } = render(<Tabs />);

    // Assert
    expect(getByText(expectedText)).toMatchSnapshot();
  });
});
