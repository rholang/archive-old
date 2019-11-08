export interface Rect {
    top: number;
    left: number;
    width: number;
    height: number;
}
export declare const cropToDataURI: (imageElement: HTMLImageElement, imageRect: Rect, cropRect: Rect, scale: number, imageOrientation: number) => string;
