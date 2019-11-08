import { ComponentType } from 'react';
export declare function omit<T extends Record<any, any>, K extends string[]>(obj: T, ...keysToOmit: K): Pick<T, Exclude<keyof T, keyof K>>;
export declare function getDisplayName(prefix: string, Component: ComponentType<any>): string;
