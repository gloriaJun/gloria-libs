import React from 'react';
import ReactDOM from 'react-dom';

import Toast, { IToastContentProps } from './toast';

const maxToastCount = 3;
const queue: IToastContentProps[] = [];
let containerDomNode: HTMLElement;

function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Check whether container is currently mounted in the DOM
 */
function isContainerMounted(): boolean {
  const container = document.getElementById('toast-container');
  return !!container;
}

function createContainer(): void {
  containerDomNode = document.createElement('div');
  document.body.appendChild(containerDomNode);
}

function removeContainer(): void {
  ReactDOM.unmountComponentAtNode(containerDomNode);
  document.body.removeChild(containerDomNode);
}

function removeToast(id?: string): void {
  const toastListItem = id
    ? queue.findIndex((obj) => obj.id === id)
    : queue.length - 1;
  queue.splice(toastListItem, 1);

  if (queue.length > 0) {
    renderToast();
  } else {
    removeContainer();
  }
}

function renderToast(): void {
  ReactDOM.render(
    <Toast toastList={queue} duration={3000} removeToast={removeToast} />,
    containerDomNode,
  );
}

function createToast(props: IToastContentProps): void {
  if (queue.length >= maxToastCount) {
    removeToast();
  }

  queue.unshift(props);
  renderToast();
}

function mount(props: IToastContentProps): void {
  if (isContainerMounted()) {
    createToast(props);
  } else {
    createContainer();
    createToast(props);
  }
}

export default function toast(message: string): void {
  const props = Object.assign(
    typeof message === 'string' ? { message } : message,
    {
      id: uuid(),
    },
  );

  mount(props);
}
