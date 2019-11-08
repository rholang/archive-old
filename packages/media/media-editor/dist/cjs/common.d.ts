export interface ColorWithAlpha {
    red: number;
    green: number;
    blue: number;
    alpha?: number;
}
export interface ShapeParameters {
    color: string;
    lineWidth: number;
    addShadow: boolean;
}
export interface Dimensions {
    width: number;
    height: number;
}
export declare type Tool = 'line' | 'blur' | 'arrow' | 'brush' | 'oval' | 'rectangle' | 'text';
export declare type TextDirection = 'ltr' | 'rtl';
export declare type CancelInputType = 'esc' | 'button';
export interface ExportedImage {
    isExported: boolean;
    content?: string;
    error?: string;
    dimensions?: Dimensions;
}
export declare const ANALYTICS_MEDIA_CHANNEL = "media";
