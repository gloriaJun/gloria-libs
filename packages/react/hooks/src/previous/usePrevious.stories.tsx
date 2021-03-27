// import React, { useCallback, useState } from 'react';
// import { Meta } from '@storybook/react/types-6-0';

// // import { rootStoryCategory } from '@story-utils/constants';
// // import { MainContainer } from '@components-common/template/container';
// // import { Button } from '@components-common/atoms/button';
// import { usePrevious } from './usePrevious';

// export default {
//   // title: `${rootStoryCategory.hooks}/usePrevious`,
//   title: `usePrevious`,
//   // component: useScrollPosition,
//   parameters: {},
//   argTypes: {},
// } as Meta;

// export const Default = () => {
//   const [number, SetNumber] = useState(0);
//   const prevNumber = usePrevious(number);

//   const handleIncrement = useCallback(() => {
//     SetNumber((v) => ++v);
//   }, [SetNumber]);

//   const handleDecrement = useCallback(() => {
//     SetNumber((v) => --v);
//   }, [SetNumber]);

//   return (
//     <MainContainer>
//       <p>Current Value: {number}</p>
//       <p>Previous Value: {prevNumber}</p>

//       <br />
//       <Button onClick={handleIncrement}>Increment (+1)</Button>
//       <Button onClick={handleDecrement}>Decrement (-1)</Button>
//     </MainContainer>
//   );
// };
