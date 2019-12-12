import React from 'react';
import { Loading } from '../loading';
import { checkA11y } from '@storybook/addon-a11y';
// import ringSvg from '../../public/images/rings.svg';

export default {
  title: 'Design System|Loading',
  component: Loading,
  decorators: [checkA11y]
};

export const Default = () => (
  <Loading />
);

export const MoreText = () => (
  <Loading text={"Your Vault is being created..."} />
);

