export declare type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export declare type Diff<T, K> = Omit<T, keyof K>;
