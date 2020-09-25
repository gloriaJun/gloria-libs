import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import { Toast } from './index';

export default {
  title: 'Ui/Toast',
  component: Toast,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const basic = () => <Toast>Test</Toast>;
