import { TextDefinition } from '@atlaskit/adf-schema';
export declare function createTextNodes<T = any>(nodes: Array<T | string>): Array<T | TextDefinition>;
export declare function createTextFromString<T = any>(str: T | string): T | TextDefinition;
