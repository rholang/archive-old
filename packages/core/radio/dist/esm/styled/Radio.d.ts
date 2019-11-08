/// <reference types="react" />
interface LabelProps {
    isDisabled?: boolean;
    isFullWidth?: boolean;
}
export declare const Label: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLLabelElement> & import("react").LabelHTMLAttributes<HTMLLabelElement> & LabelProps, any, import("react").ClassAttributes<HTMLLabelElement> & import("react").LabelHTMLAttributes<HTMLLabelElement> & LabelProps>;
interface ColorProps {
    isChecked?: boolean;
    isDisabled?: boolean;
    isActive?: boolean;
    isHovered?: boolean;
    isInvalid?: boolean;
    isFocused?: boolean;
}
export declare const LabelText: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const IconWrapper: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & ColorProps, any, import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & ColorProps>;
export {};
