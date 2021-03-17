import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';

import { componentsCategory } from '@glibs/react-storybook';

import { Portal, IPortalProps } from '.';

export default {
  title: `${componentsCategory.atoms}/Portal`,
  component: Portal,
} as Meta;

const Template: Story<IPortalProps> = (args) => {
  return <Portal {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: <p style={{ background: '#eee' }}>This is the message</p>,
};
