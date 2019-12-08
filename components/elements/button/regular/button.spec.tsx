import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import appTheme from '../../../../styles/theme';
import { Button } from '../regular';

describe('<Button /> spec', () => {
  test('it renders the component', () => {
    // Arrange
    const buttonText = 'Click me';

    // Act
    const { getByText } = render(<Button>{buttonText}</Button>);

    // Assert
    expect(getByText(buttonText)).toMatchSnapshot();
  });

  test('that click gets handled', () => {
    // Arrange
    const buttonText = "Click me";
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const clickHandler = () => window.alert("Alerting you");
    
    // Act
    const { getByText } = render(<Button onClick={clickHandler}>{buttonText}</Button>);
    fireEvent.click(getByText(buttonText));

    // Assert
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  test('that <Button /> has correct background', () => {
    // Arrange
    const buttonText = 'Click me';
    const variant = "secondary";

    // Act 
    const { getByText } = render(<ThemeProvider theme={appTheme}><Button variant={variant}>{buttonText}</Button></ThemeProvider>);
    const button = getByText(buttonText);
    const style = window.getComputedStyle(button);

    // Assert
    expect(style.backgroundColor).toBe(appTheme.colors.secondary);
  });
});
