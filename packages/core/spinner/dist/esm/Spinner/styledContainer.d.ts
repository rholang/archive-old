/// <reference types="react" />
import { SpinnerPhases } from '../types';
declare type AnimationParams = {
    delay: number;
    phase: SpinnerPhases;
};
export declare const getContainerAnimation: ({ delay, phase }: AnimationParams) => "" | import("styled-components").InterpolationValue[];
declare const Container: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & AnimationParams & {
    size: number;
}, any, import("react").ClassAttributes<HTMLSpanElement> & import("react").HTMLAttributes<HTMLSpanElement> & AnimationParams & {
    size: number;
}>;
export default Container;
