/// <reference types="react" />
import { AvatarClickType } from '../types';
interface GetBackgroundColorType {
    backgroundColor?: string;
    href?: string;
    isActive?: boolean;
    isHover?: boolean;
    isSelected?: boolean;
    mode: 'dark' | 'light';
    onClick?: AvatarClickType;
}
export declare function getBackgroundColor({ backgroundColor, href, isActive, isHover, isSelected, onClick, }: GetBackgroundColorType): any;
declare type getStylesType = {
    isInteractive?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocus?: boolean;
    mode: 'dark' | 'light';
};
export declare function getStyles({ isInteractive, isActive, isDisabled, isFocus, }: getStylesType): import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<GetBackgroundColorType, any>>[];
export declare const Content: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    truncate: boolean;
}, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    truncate: boolean;
}>;
export declare const PrimaryText: import("react").ComponentType<import("styled-components").ThemedOuterStyledProps<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    truncate: boolean;
}, any>>;
export declare const SecondaryText: import("react").ComponentType<import("styled-components").ThemedOuterStyledProps<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & {
    truncate: boolean;
}, any>>;
export {};
