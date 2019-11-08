import * as React from 'react';
import { Component } from 'react';
import { InjectedIntlProps } from 'react-intl';
export interface ImageCropperProp {
    imageSource: string;
    containerSize?: number;
    isCircularMask?: boolean;
    top: number;
    left: number;
    imageWidth?: number;
    imageHeight?: number;
    imageOrientation: number;
    onDragStarted?: (x: number, y: number) => void;
    onImageLoaded: (image: HTMLImageElement) => void;
    onRemoveImage: () => void;
    onImageError: (errorMessage: string) => void;
}
export declare class ImageCropper extends Component<ImageCropperProp & InjectedIntlProps, {}> {
    static defaultProps: {
        containerSize: number;
        isCircleMask: boolean;
        onDragStarted: () => void;
        onImageSize: () => void;
    };
    componentDidMount(): void;
    onDragStarted: (e: React.MouseEvent<{}, MouseEvent>) => void;
    onImageError: () => void;
    render(): JSX.Element | null;
}
declare const _default: React.ComponentClass<ImageCropperProp, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<ImageCropperProp & InjectedIntlProps>;
};
export default _default;
