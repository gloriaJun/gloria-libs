import React, { useState } from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { componentsCategory } from '@glibs/react-storybook';

import { toast } from '.';

export default {
  title: `${componentsCategory.organisms}/Toast`,
} as Meta;

export const basic = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const cnt = count + 1;

    setCount(cnt);
    toast(`This is the toast message - ${cnt}`);
  };

  return <button onClick={handleClick}>Click</button>;
};
