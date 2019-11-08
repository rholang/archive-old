/**
 * We're avoding importing these colors from @atlaskit/theme since we
 * do not want to have react as a dependency of this package.
 * TODO: Refactor this once tokenization by Core team is ready
 * https://product-fabric.atlassian.net/browse/CS-908
 */
export declare const R50 = "#FFEBE6";
export declare const R75 = "#FFBDAD";
export declare const R100 = "#FF8F73";
export declare const R300 = "#FF5630";
export declare const R400 = "#DE350B";
export declare const R500 = "#BF2600";
export declare const Y50 = "#FFFAE6";
export declare const Y75 = "#FFF0B3";
export declare const Y200 = "#FFC400";
export declare const Y400 = "#FF991F";
export declare const Y500 = "#FF8B00";
export declare const G50 = "#E3FCEF";
export declare const G75 = "#ABF5D1";
export declare const G200 = "#57D9A3";
export declare const G300 = "#36B37E";
export declare const G400 = "#00875A";
export declare const G500 = "#006644";
export declare const B50 = "#DEEBFF";
export declare const B75 = "#B3D4FF";
export declare const B100 = "#4C9AFF";
export declare const B400 = "#0052CC";
export declare const B500 = "#0747A6";
export declare const N0 = "#FFFFFF";
export declare const N20 = "#F4F5F7";
export declare const N30 = "#EBECF0";
export declare const N40 = "#DFE1E6";
export declare const N50 = "#C1C7D0";
export declare const N60 = "#B3BAC5";
export declare const N80 = "#97A0AF";
export declare const N90 = "#8993A4";
export declare const N200 = "#6B778C";
export declare const N300 = "#5E6C84";
export declare const N500 = "#42526E";
export declare const N800 = "#172B4D";
export declare const P50 = "#EAE6FF";
export declare const P75 = "#C0B6F2";
export declare const P100 = "#998DD9";
export declare const P300 = "#6554C0";
export declare const P400 = "#5243AA";
export declare const P500 = "#403294";
export declare const T50 = "#E6FCFF";
export declare const T75 = "#B3F5FF";
export declare const T100 = "#79E2F2";
export declare const T300 = "#00B8D9";
export declare const T500 = "#008DA6";
/**
 * @return String with HEX-coded color
 */
export declare function normalizeHexColor(color: string | null, defaultColor?: string): string | null;
/**
 * Converts hex color format to rgb.
 * Works well with full hex color format and shortcut as well.
 *
 * @param hex - hex color string (#xxx, or #xxxxxx)
 */
export declare function hexToRgb(color: string): string | null;
/**
 * Converts hex color format to rgba.
 *
 * @param hex - hex color string (#xxx, or #xxxxxx)
 */
export declare function hexToRgba(rawColor: string, alpha: number): string | null;
export declare function rgbToHex(value: string): string | null;
export declare function isRgb(color: string): boolean;
export declare function isHex(color: string): boolean;
