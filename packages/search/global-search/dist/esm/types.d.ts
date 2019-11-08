declare type Diff<T, U> = T extends U ? never : T;
declare type Varargs = (string | number | boolean | undefined | null | void | {})[];
