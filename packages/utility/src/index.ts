import { client, IToastContentProps } from './abc';

const obj: IToastContentProps = { id: 'id', message: 'mes' };

console.log(client('aa'), obj.id);

export * as ImageUtility from './image';
export * as NumberUtility from './number';
export * as ObjectUtility from './object';
export * as StringUtility from './string';
export * as ValidatorUtility from './validator';
