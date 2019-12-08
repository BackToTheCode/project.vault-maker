import { checkA11y } from '@storybook/addon-a11y';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Box } from 'rebass';
import { Address } from '../address';

const Background = ({ children }) => (
  <Box sx={{ bg: 'rgb(55,74,97)', ml: 7}}>{children}</Box>
);

export default {
  component: Address,
  decorators: [checkA11y],
  parameters: {
    backgrounds: [
      { name: 'midGrey', value: 'rgb(55,74,97)', default: true },
      { name: 'primary', value: 'rgb(26, 171, 155)' }
    ]
  },
  title: 'Elements|Address'
};

export const Unconnected = () => (
  <Background>
    <Address />
  </Background>
);

export const Connected = () => (
  <Background>
    <Address
      isConnected={true}
      address="0x61049F5e03Bfe3823f274C479158A94bcA26456c"
    />
  </Background>
);

export const WithKnobs = () => (
  <Background>
    <Address
      isConnected={boolean('isConnected', false)}
      address="0x61049F5e03Bfe3823f274C479158A94bcA26456c"
    />
  </Background>
);

WithKnobs.story = {
  decorators: [withKnobs]
};
