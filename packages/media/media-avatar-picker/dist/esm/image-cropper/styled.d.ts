/// <reference path="styled.d.ts" />
/// <reference types="@emotion/core" />
import { HTMLAttributes, ComponentClass, ButtonHTMLAttributes } from 'react';
declare module 'react' {
    interface ImgHTMLAttributes<T> {
        alt?: string;
        crossOrigin?: 'anonymous' | 'use-credentials' | '';
        height?: number | string;
        sizes?: string;
        src?: string;
        srcSet?: string;
        useMap?: string;
        width?: number | string;
    }
}
export declare const Container: ComponentClass<HTMLAttributes<{}>>;
export declare const ImageContainer: import("styled-components").StyledComponentClass<import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, any, import("react").DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
export declare const CONTAINER_PADDING = 28;
export declare const RectMask: ComponentClass<HTMLAttributes<{}>>;
export declare const CircularMask: ComponentClass<HTMLAttributes<{}>>;
export declare const DragOverlay: ComponentClass<HTMLAttributes<{}>>;
export declare const RemoveImageContainer: ComponentClass<HTMLAttributes<{}>>;
export declare const RemoveImageButton: ComponentClass<ButtonHTMLAttributes<{}>>;
