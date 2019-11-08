import * as React from 'react';
import { MediaSingleLayout } from '@atlaskit/adf-schema';
import { MediaClientConfig } from '@atlaskit/media-core';
import { Props } from './types';
declare type State = {
    offsetLeft: number;
    isVideoFile: boolean;
    resizedPctWidth?: number;
};
export default class ResizableMediaSingle extends React.Component<Props, State> {
    state: State;
    componentDidUpdate(): boolean;
    readonly wrappedLayout: boolean;
    componentDidMount(): Promise<void>;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    checkVideoFile(viewMediaClientConfig?: MediaClientConfig): Promise<void>;
    /**
     * When returning to center layout from a wrapped/aligned layout, it might actually
     * be wide or full-width
     */
    checkLayout(oldLayout: MediaSingleLayout, newLayout: MediaSingleLayout): void;
    calcNewSize: (newWidth: number, stop: boolean) => {
        width: number | null;
        layout: MediaSingleLayout;
    };
    calcUnwrappedLayout: (pct: number, width: number) => "full-width" | "wide" | "center";
    readonly $pos: import("prosemirror-model").ResolvedPos<any> | null;
    /**
     * The maxmimum number of grid columns this node can resize to.
     */
    readonly gridWidth: number;
    calcOffsetLeft(): number;
    calcColumnLeftOffset: () => number;
    wrapper?: HTMLElement;
    calcSnapPoints(): number[];
    calcPxWidth: (useLayout?: "full-width" | "wide" | "center" | "wrap-right" | "wrap-left" | "align-start" | "align-end" | undefined) => number;
    readonly insideInlineLike: boolean;
    highlights: (newWidth: number, snapPoints: number[]) => number[] | string[];
    render(): JSX.Element;
}
export {};
