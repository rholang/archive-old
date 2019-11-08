import * as React from 'react';
import { Camera, Vector2 } from '@atlaskit/media-ui';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { ZoomLevel } from '../../domain/zoomLevel';
import { Outcome } from '../../domain';
export declare function zoomLevelAfterResize(newCamera: Camera, oldCamera: Camera, oldZoomLevel: ZoomLevel): ZoomLevel;
export interface Props extends WithAnalyticsEventsProps {
    src: string;
    orientation?: number;
    onClose?: () => void;
    onLoad?: () => void;
    onError?: () => void;
    onBlanketClicked?: () => void;
}
export declare type State = {
    zoomLevel: ZoomLevel;
    camera: Outcome<Camera, never>;
    isDragging: boolean;
    cursorPos: Vector2;
};
export declare class InteractiveImgComponent extends React.Component<Props, State> {
    state: State;
    private wrapper?;
    private saveWrapperRef;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onImageClicked: (e: React.MouseEvent<Element, MouseEvent>) => void;
    render(): JSX.Element;
    private onImgLoad;
    private onResize;
    private onZoomChange;
    private startDragging;
    private stopDragging;
    private panImage;
}
export declare const InteractiveImg: React.ForwardRefExoticComponent<Pick<Props, "src" | "onLoad" | "onError" | "orientation" | "onClose" | "onBlanketClicked"> & React.RefAttributes<any>>;
