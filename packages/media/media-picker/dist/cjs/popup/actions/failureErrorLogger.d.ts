import { Action } from 'redux';
export declare const FAILURE_ERROR = "FAILURE_ERROR";
export interface FailureErrorAction extends Action {
    readonly type: 'FAILURE_ERROR';
    readonly error: Error | string;
    readonly info?: string;
}
export declare function isFailureErrorAction(action: Action): action is FailureErrorAction;
export declare function failureErrorLogger(payload: {
    error: Error | string;
    info?: string;
}): FailureErrorAction;
