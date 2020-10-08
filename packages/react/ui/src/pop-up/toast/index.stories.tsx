import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import toast from './index';

export default {
  title: 'Ui/Toast',
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
