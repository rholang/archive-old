export declare type ArrowKeys = 'left' | 'up' | 'right' | 'down';
export declare type DateObj = {
    day: number;
    month: number;
    year: number;
};
export declare type ChangeEvent = {
    iso?: string;
    type: 'left' | 'up' | 'right' | 'down' | 'prev' | 'next';
} & DateObj;
export declare type SelectEvent = {
    iso: string;
} & DateObj;
