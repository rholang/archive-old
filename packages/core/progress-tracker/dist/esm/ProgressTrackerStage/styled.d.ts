/// <reference types="react" />
export declare const ProgressTrackerStageContainer: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
interface BaseStageProps {
    transitionDelay: number;
    transitionSpeed: number;
    transitionEasing?: string;
}
interface StageMarkerProps extends BaseStageProps {
    oldMarkerColor?: string;
}
export declare const ProgressTrackerStageMarker: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StageMarkerProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StageMarkerProps>;
interface StageBarProps extends BaseStageProps {
    percentageComplete: number;
    oldPercentageComplete: number;
}
export declare const ProgressTrackerStageBar: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StageBarProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StageBarProps>;
interface StageTitleProps extends BaseStageProps {
    fontweight?: string;
}
export declare const ProgressTrackerStageTitle: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StageTitleProps, any, import("react").ClassAttributes<HTMLDivElement> & import("react").HTMLAttributes<HTMLDivElement> & StageTitleProps>;
export {};
