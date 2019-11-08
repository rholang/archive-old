import { ADFEntity } from '../types';
export declare function map<T = any>(adf: ADFEntity, callback: (node: ADFEntity) => T): Array<T>;
