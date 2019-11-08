import { WithMark } from '../types';
export declare function applyMark<T>(mark: T & {
    type: string;
}, maybeNode: WithMark | string): WithMark;
