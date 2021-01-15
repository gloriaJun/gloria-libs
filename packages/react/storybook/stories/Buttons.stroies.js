import React from 'react';
import { action } from '@storybook/addon-actions';

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => (
  <Button onClick={action('clicked')}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
