import { checkA11y } from '@storybook/addon-a11y';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import { Box } from 'rebass';
import { Header } from '.';
import logoImage from '../../../public/images/mark-maker.svg';

const Background = ({ children }) => (
  <Box sx={{ bg: 'rgb(55,74,97)', ml: 7 }}>{children}</Box>
);

export default {
  component: Header,
  decorators: [checkA11y],
  parameters: {
    backgrounds: [
      { name: 'midGrey', value: 'rgb(55,74,97)', default: true },
      { name: 'primary', value: 'rgb(26, 171, 155)' }
    ]
  },
  title: 'Blocks|Header'
};

export const NotConnected = () => <Header />;

export const Connected = () => (
  <Header
    isConnected={true}
    address="0x61049F5e03Bfe3823f274C479158A94bcA26456c"
  />
);

export const WithKnobs = () => (
  <Header
    isConnected={boolean('isConnected', true)}
    address={select(
      'Address',
      ['0x61049F5e03Bfe3823f274C479158A94bcA26456c', ''],
      '0x61049F5e03Bfe3823f274C479158A94bcA26456c'
    )}
  />
);
WithKnobs.story = {
  decorators: [withKnobs]
};
