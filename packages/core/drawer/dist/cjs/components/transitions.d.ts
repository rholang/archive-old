import React, { ComponentType } from 'react';
interface TransitionProps {
    component?: ComponentType<any> | string;
    onExited?: (node: HTMLElement) => void;
    shouldUnmountOnExit?: boolean;
    in: boolean;
}
export declare const Fade: React.ComponentType<TransitionProps>;
export declare const Slide: React.ComponentType<TransitionProps>;
export {};
