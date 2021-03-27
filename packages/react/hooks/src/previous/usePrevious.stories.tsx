import React, { useCallback, useState } from 'react';

import { Meta } from '@storybook/react/types-6-0';

import { rootCategory } from '@glibs/react-storybook';

import { usePrevious } from './usePrevious';

export default {
  title: `${rootCategory.hooks}/usePrevious`,
  // component: useScrollPosition,
  parameters: {},
  argTypes: {},
} as Meta;

export const Default = () => {
  const [number, SetNumber] = useState(0);
  const prevNumber = usePrevious(number);

  const handleIncrement = useCallback(() => {
    SetNumber((v) => ++v);
  }, [SetNumber]);

  const handleDecrement = useCallback(() => {
    SetNumber((v) => --v);
  }, [SetNumber]);

  return (
    <main>
      <p>Current Value: {number}</p>
      <p>Previous Value: {prevNumber}</p>

      <br />
      <button onClick={handleIncrement}>Increment (+1)</button>
      <button onClick={handleDecrement}>Decrement (-1)</button>
    </main>
  );
};
