import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { componentsCategory } from '@glibs/react-storybook';

import { Button, IButtonProps } from '.';

export default {
  title: `${componentsCategory.atoms}/Buttons/Button`,
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
