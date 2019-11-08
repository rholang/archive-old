/// <reference types="react" />
import { AvatarClickType, AppearanceType, SizeType } from '../types';
export declare function getBorderRadius(props: {
    appearance: AppearanceType;
    size: SizeType;
}, config?: {
    includeBorderWidth: boolean;
}): string;
export declare const getSize: ({ size }: {
    size: SizeType;
}) => number;
export declare function getAvatarDimensions({ size }: {
    size: SizeType;
}, config?: {
    includeBorderWidth: boolean;
    sizeOnly: boolean;
}): import("react").ReactText;
interface InnerStylesProps {
    appearance?: AppearanceType;
    size?: SizeType;
    isInteractive?: boolean;
    href?: string;
    borderColor?: string | (() => string);
    stackIndex?: number;
    isActive?: boolean;
    isDisabled?: boolean;
    isFocus?: boolean;
    isHover?: boolean;
    isSelected?: boolean;
    onClick?: AvatarClickType;
}
export declare function getInnerStyles(props?: InnerStylesProps): import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    appearance: AppearanceType;
    size: SizeType;
}, any>>[];
export {};
