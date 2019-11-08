/// <reference types="react" />
import { ThemeTokens } from './theme';
export declare const overallHeight = 40;
interface TrackProps extends ThemeTokens {
    valuePercent: string;
}
export declare const rangeInputStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<TrackProps, any>>[];
export declare const Input: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> & TrackProps, any, import("react").ClassAttributes<HTMLInputElement> & import("react").InputHTMLAttributes<HTMLInputElement> & TrackProps>;
export {};
