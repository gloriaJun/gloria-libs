import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const portalId = 'layer-portal';
let portalContainer: HTMLElement;

export interface IPortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: IPortalProps) => {
  const ref = useRef(document.createElement('div'));

  useEffect(() => {
    const el = ref.current;

    if (!portalContainer || !document.getElementById(portalId)) {
      const bodyElement = document.body;

      portalContainer = document.createElement('div');
      portalContainer.setAttribute('id', portalId);
      bodyElement.appendChild(portalContainer);
    }

    portalContainer.appendChild(el);

    return () => {
      portalContainer.removeChild(el);
    };
  }, []);

  return createPortal(children, ref.current);
};
