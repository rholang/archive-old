export declare type Dimensions = {
    width: number;
    height: number;
};
export declare const getDimensionsFromBlob: (blob: Blob) => Promise<Dimensions>;
