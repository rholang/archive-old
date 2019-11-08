export declare type Reason = {
    name: string;
    status?: number;
};
export declare function errorToReason(error: any): Reason;
