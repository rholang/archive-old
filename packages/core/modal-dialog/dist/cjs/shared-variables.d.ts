export declare const WIDTH_ENUM: WidthEnumType;
export declare type WidthNames = 'small' | 'medium' | 'large' | 'x-large';
export interface WidthEnumType {
    values: string[];
    widths: {
        [index in WidthNames]: number;
    };
    defaultValue: string;
}
export declare const gutter = 60;
