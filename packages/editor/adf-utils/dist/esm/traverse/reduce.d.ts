import { ADFEntity } from '../types';
export declare function reduce<T = any>(adf: ADFEntity, callback: (accunulator: T, node: ADFEntity) => T, initial: T): T;
