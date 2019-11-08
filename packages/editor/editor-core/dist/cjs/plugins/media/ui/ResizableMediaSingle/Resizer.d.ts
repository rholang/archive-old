import * as React from 'react';
import { RefObject } from 'react';
import { Resizable } from 're-resizable';
import { MediaSingleLayout } from '@atlaskit/adf-schema';
import { Props as ResizableMediaSingleProps, EnabledHandles } from './types';
interface ReResizableNumberSize {
    width: number;
    height: number;
}
declare type ResizerProps = ResizableMediaSingleProps & {
    selected: boolean;
    enable: EnabledHandles;
    calcNewSize: (newWidth: number, stop: boolean) => {
        layout: MediaSingleLayout;
        width: number | null;
    };
    snapPoints: number[];
    scaleFactor?: number;
    highlights: (width: number, snapPoints: number[]) => number[] | string[];
    handleResizeStart?: (event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => boolean;
};
declare type ResizerState = {
    isResizing: boolean;
};
export default class Resizer extends React.Component<ResizerProps, ResizerState> {
    resizable: RefObject<Resizable>;
    state: {
        isResizing: boolean;
    };
    constructor(props: ResizerProps);
    handleResizeStart: (event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>) => false | undefined;
    handleResize: (_event: MouseEvent | TouchEvent, _direction: import("re-resizable/lib/resizer").Direction, _elementRef: HTMLDivElement, delta: ReResizableNumberSize) => void;
    handleResizeStop: (_event: MouseEvent | TouchEvent, _direction: import("re-resizable/lib/resizer").Direction, _elementRef: HTMLElement, delta: ReResizableNumberSize) => void;
    render(): JSX.Element;
}
export {};
