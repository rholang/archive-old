/** Helper type for single arg function */
declare type Func<A, B> = (a: A) => B;
/**
 * Compose 1 to n functions.
 * @param func first function
 * @param funcs additional functions
 */
export declare function compose<F1 extends Func<any, any>, FN extends Array<Func<any, any>>, R extends FN extends [] ? F1 : FN extends [Func<infer A, any>] ? (a: A) => ReturnType<F1> : FN extends [any, Func<infer A, any>] ? (a: A) => ReturnType<F1> : FN extends [any, any, Func<infer A, any>] ? (a: A) => ReturnType<F1> : FN extends [any, any, any, Func<infer A, any>] ? (a: A) => ReturnType<F1> : FN extends [any, any, any, any, Func<infer A, any>] ? (a: A) => ReturnType<F1> : Func<any, ReturnType<F1>>>(func: F1, ...funcs: FN): R;
export {};
