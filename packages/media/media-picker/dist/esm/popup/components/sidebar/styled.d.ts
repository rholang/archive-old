/// <reference types="@emotion/core" />
import { HTMLAttributes, ComponentClass, LiHTMLAttributes, SVGProps } from 'react';
export declare const Wrapper: ComponentClass<HTMLAttributes<{}>>;
export declare const ServiceList: ComponentClass<HTMLAttributes<{}>>;
export declare const Separator: ComponentClass<LiHTMLAttributes<{}>>;
export declare const SeparatorLine: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export interface IconProps {
    active: boolean;
}
export declare const StyledIcon: import("styled-components").StyledComponentClass<SVGProps<SVGSVGElement>, any, SVGProps<SVGSVGElement>>;
export declare const StyledSvgGroup: ComponentClass<IconProps & SVGProps<SVGGElement>>;
