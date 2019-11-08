/// <reference types="react" />
/// <reference types="@emotion/core" />
import { WidthNames } from '../shared-variables';
export declare const dialogWidth: ({ widthName, widthValue }: PositionerProps) => string;
export declare const dialogHeight: ({ heightValue, }: {
    heightValue?: string | number | undefined;
}) => string;
/**
  NOTE:
  z-index
  - temporarily added to beat @atlaskit/navigation

  absolute + top
  - rather than fixed position so popper.js children are properly positioned

  overflow-y
  - only active when popper.js children invoked below the dialog
*/
interface FillScreenProps {
    scrollDistance: number;
}
export declare const FillScreen: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FillScreenProps, any>;
interface PositionerProps {
    widthName?: WidthNames;
    widthValue?: string | number;
}
export declare const PositionerAbsolute: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PositionerProps, any>;
export declare const PositionerRelative: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PositionerProps, any>;
interface DialogProps {
    isChromeless?: boolean;
    heightValue?: string | number;
}
export declare const Dialog: import("@emotion/styled-base").StyledComponent<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, DialogProps, any>;
export {};
