import { checkA11y } from '@storybook/addon-a11y';
import { select, withKnobs } from '@storybook/addon-knobs';
import marked from 'marked';
import React from 'react';
import { Button } from '../regular';

export default {
  component: Button,
  decorators: [checkA11y],
  parameters: {
    info: {
      header: false,
      inline: true,

      text: marked(require('../button.stories.md').default)
    }
  },
  title: 'Design System|Buttons/Regular Button'
};

export const Primary = () => <Button variant={'primary'}>Go</Button>;

export const Secondary = () => <Button variant={'secondary'}>Go here</Button>;

export const Outline = () => <Button variant={'outline'}>Go back</Button>;

export const Text = () => <Button variant={'text'}>Click me</Button>;

export const WithKnobs = () => (
  <Button
    variant={select('Variant', ['primary', 'secondary', 'outline'], 'primary')}
  >
    Change me
  </Button>
);
WithKnobs.story = {
  decorators: [withKnobs]
};
