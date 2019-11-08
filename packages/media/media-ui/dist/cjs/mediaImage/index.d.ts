import * as React from 'react';
import { Component } from 'react';
export interface MediaImageProps {
    dataURI: string;
    alt?: string;
    crop?: boolean;
    stretch?: boolean;
    previewOrientation?: number;
    crossOrigin?: '' | 'anonymous' | 'use-credentials';
    onImageLoad?: (loadedImage: HTMLImageElement) => void;
    onImageError?: () => void;
}
export interface MediaImageState {
    isImageLoaded: boolean;
    imgWidth: number;
    imgHeight: number;
    parentWidth: number;
    parentHeight: number;
}
export declare class MediaImage extends Component<MediaImageProps, MediaImageState> {
    static defaultProps: Partial<MediaImageProps>;
    imageRef: React.RefObject<HTMLImageElement>;
    constructor(props: MediaImageProps);
    componentDidMount(): void;
    onImageLoad: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    render(): JSX.Element;
}
