/// <reference types="@emotion/core" />
import { HTMLAttributes } from 'react';
import { RendererAppearance } from './types';
export declare const FullPagePadding = 32;
export declare type RendererWrapperProps = {
    appearance?: RendererAppearance;
    theme?: any;
};
export declare const headingSizes: {
    [key: string]: {
        [key: string]: number;
    };
};
export declare const Wrapper: import("styled-components").StyledComponentClass<import("react").ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & RendererWrapperProps & HTMLAttributes<{}>, any, import("react").ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement> & RendererWrapperProps & HTMLAttributes<{}>>;
