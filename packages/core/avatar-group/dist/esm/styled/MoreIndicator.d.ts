/// <reference types="react" />
import { SizeType } from '@atlaskit/avatar';
import { AppearanceType } from '@atlaskit/avatar';
export declare const Outer: import("react").ComponentType<any>;
interface InnerProps {
    size: SizeType;
    appearance: AppearanceType;
    isActive?: boolean;
    isFocus?: boolean;
    isHover?: boolean;
}
export declare const Inner: import("react").ComponentType<import("styled-components").ThemedOuterStyledProps<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & InnerProps, any>>;
export {};
