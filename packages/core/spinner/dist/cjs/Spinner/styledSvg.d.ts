/// <reference types="react" />
import { SpinnerPhases } from '../types';
export declare const getStrokeColor: ({ invertColor, ...props }: {
    invertColor?: boolean | undefined;
}) => string | number;
export declare const svgStyles: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<{
    size: number;
    phase: SpinnerPhases;
    invertColor: boolean;
}, any>>[];
declare const Svg: import("styled-components").StyledComponentClass<import("react").SVGProps<SVGSVGElement> & {
    size: number;
    phase: SpinnerPhases;
    invertColor: boolean;
}, any, import("react").SVGProps<SVGSVGElement> & {
    size: number;
    phase: SpinnerPhases;
    invertColor: boolean;
}>;
export default Svg;
