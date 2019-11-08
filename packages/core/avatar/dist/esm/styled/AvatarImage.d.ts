import React, { ReactNode } from 'react';
import { AppearanceType, SizeType } from '../types';
export declare const ShapeGroup: React.ComponentType<import("styled-components").ThemedOuterStyledProps<React.SVGProps<SVGGElement>, any>>;
declare type SlotProps = {
    appearance: AppearanceType;
    isLoading: boolean;
    size: SizeType;
    role: string;
    label?: string;
    backgroundImage?: string;
};
export declare const Slot: ({ isLoading, appearance, size, backgroundImage, label, role, }: SlotProps) => JSX.Element;
interface SvgProps {
    appearance: AppearanceType;
    isLoading: boolean;
    size: SizeType;
    children: ReactNode;
    viewBox?: string;
    version?: string;
    xmlns?: string;
    role?: string;
    'aria-label'?: string;
}
export declare const Svg: ({ appearance, size, children, isLoading, ...otherProps }: SvgProps) => JSX.Element;
export {};
