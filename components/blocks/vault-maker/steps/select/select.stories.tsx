import { checkA11y } from '@storybook/addon-a11y';
import React from 'react';
import { Box } from 'rebass';
import { Select } from '../select';

const Background = ({ children }) => (
  <Box sx={{ bg: 'rgb(55,74,97)', ml: 7}}>{children}</Box>
);

export default {
  component: Select,
  decorators: [checkA11y],
  parameters: {
    backgrounds: [
      { name: 'midGrey', value: 'rgb(55,74,97)', default: true },
      { name: 'primary', value: 'rgb(26, 171, 155)' }
    ]
  },
  title: 'Blocks|Select'
};

export const Default = () => (
  <Background>
    <Select />
  </Background>
);

