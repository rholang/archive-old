export declare type WithMark = {
    type: any;
    marks?: Array<any>;
    [prop: string]: any;
};
export declare type WithAppliedMark<T, M> = T & {
    marks?: Array<M>;
};
