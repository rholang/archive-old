import { AnalyticsEventPayload, CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ColorWithAlpha, Dimensions } from './common';
import { VeColor } from './engine/core/binaries/mediaEditor';
export declare const colorWithAlphaSame: (a: ColorWithAlpha, b: ColorWithAlpha) => boolean;
export declare const dimensionsSame: (a: Dimensions, b: Dimensions) => boolean;
export declare const getUtf32Codes: (text: string) => number[];
export declare const getUtf32CodeUnits: (text: string) => string[];
export declare function adjustSize<T>(elements: Array<T>, requiredSize: number, creator: () => T, deleter: (element: T) => void): void;
export declare const fileToBase64: (blob: Blob) => Promise<string>;
export declare const hexToRgb: (hex: string) => {
    red: number;
    green: number;
    blue: number;
};
export declare const rgbToHex: ({ red, green, blue }: VeColor) => string;
export declare function fireAnalyticsEvent(payload: AnalyticsEventPayload, createAnalyticsEvent?: CreateUIAnalyticsEvent): void;
