import React from 'react';
import tw from 'twin.macro';

const Button = tw.button`bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`;

const Toast: React.FC = ({ children }) => <Button>{children}</Button>;

export { Toast };
