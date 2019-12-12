import React from 'react';
import { LargeButton } from '../large';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Design System|Buttons/Large Button',
  component: LargeButton,
  decorators: [checkA11y]
};

export const Primary = () => (
  <LargeButton variant={'primary'}>Hello</LargeButton>
);
Primary.story = {
  decorators: [withKnobs]
};

export const Secondary = () => (
  <LargeButton variant={'secondary'}>Goodbye</LargeButton>
);

export const Outline = () => (
  <LargeButton variant={'outline'}>Goodbye</LargeButton>
);
export const Text = () => <LargeButton variant={'text'}>Click me</LargeButton>;

export const WithKnobs = () => (
  <LargeButton
    variant={select('Variant', ['primary', 'secondary', 'outline'], 'primary')}
  >
    Change me
  </LargeButton>
);

WithKnobs.story = {
  decorators: [withKnobs]
};
