/// <reference types="@atlaskit/theme/components" />
import { AppearanceType, PresenceType, SizeType } from '../types';
interface Dimensions {
    height: string;
    width: string;
}
interface Layout {
    bottom?: string;
    left?: string;
    right?: string;
    top?: string;
    height: string;
    width: string;
}
declare type ThemeMode = 'dark' | 'light';
export interface ThemeProps {
    appearance?: AppearanceType;
    includeBorderWidth?: boolean;
    isLoading?: boolean;
    presence?: PresenceType;
    mode?: ThemeMode;
    size: SizeType;
}
export interface ThemeTokens {
    backgroundColor: string;
    borderRadius: string;
    dimensions: Dimensions;
    presence: Layout;
    status: Layout;
}
export declare const Theme: import("@atlaskit/theme/components").Theme<ThemeTokens, ThemeProps>;
export {};
