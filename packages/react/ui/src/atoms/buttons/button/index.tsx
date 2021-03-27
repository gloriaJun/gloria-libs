import React from 'react';

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  color?: string;
  size?: string;
}

export const Button = ({ children, ...props }: IButtonProps) => {
  return <button {...props}>{children}</button>;
};
