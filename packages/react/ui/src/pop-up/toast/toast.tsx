import React, { useEffect, useState } from 'react';

import { ToastContainer, ToastContent, ToastMessage } from './style';

export interface IToastContentProps {
  id: string;
  message: string;
}

export interface IToastProps {
  toastList: Array<IToastContentProps>;
  duration?: number;
  removeToast: Function;
}

export default function Toast({ toastList, duration, ...props }: IToastProps) {
  const [list, setList] = useState<Array<IToastContentProps>>([]);

  useEffect(() => {
    setList(toastList);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      const length = list.length;

      if (length > 0) {
        props.removeToast(toastList[length - 1].id);
      }
    }, duration);

    return () => {
      clearInterval(interval);
    };
  }, [duration, list, toastList]);

  return (
    <ToastContainer id="toast-container">
      {list.map((item) => (
        <ToastContent key={item.id}>
          <ToastMessage>{item.message}</ToastMessage>
        </ToastContent>
      ))}
    </ToastContainer>
  );
}
