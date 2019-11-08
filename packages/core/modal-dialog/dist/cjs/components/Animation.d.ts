import React from 'react';
interface AnimationProps {
    in: boolean;
    onExited?: (node: HTMLElement) => void;
    onEntered?: (node: HTMLElement, isAppearing: boolean) => void;
    stackIndex?: number;
    children: ({ fade, slide }: {
        fade: Object;
        slide: Object;
    }) => React.ReactNode;
}
export declare const Animation: ({ in: hasEntered, stackIndex, onExited, onEntered, children, }: AnimationProps) => JSX.Element;
export {};
