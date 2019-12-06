import React from 'react';
import marked from 'marked';
import { LargeButton } from '../large';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Design System|Buttons/Large Button',
  component: LargeButton,
  parameters: {
    info: {
      inline: true,
      header: false,
      text: marked(require('../button.stories.md').default)
    }
  },
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
