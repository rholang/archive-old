import * as React from 'react';
import { Component } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { Vector2 } from '@atlaskit/media-ui';
import { Viewport } from '../viewport';
export interface LoadParameters {
    export: () => string;
}
export declare type OnLoadHandler = (params: LoadParameters) => void;
export declare const viewport: Viewport;
export interface CropProperties {
    x: number;
    y: number;
    size: number;
}
export interface Props {
    imageSource?: string;
    errorMessage?: string;
    onImageLoaded: (file: File) => void;
    onLoad?: OnLoadHandler;
    onCropChanged?: (x: number, y: number, size: number) => void;
    onRemoveImage: () => void;
    onImageUploaded: (file: File) => void;
    onImageError: (errorMessage: string) => void;
    isLoading?: boolean;
}
export interface State {
    imagePos: Vector2;
    dragStartPoint: Vector2;
    scale: number;
    isDragging: boolean;
    fileImageSource?: string;
    imageFile?: File;
    isDroppingFile: boolean;
    imageOrientation: number;
    viewport: Viewport;
}
export declare class ImageNavigator extends Component<Props & InjectedIntlProps, State> {
    state: State;
    imageElement?: HTMLImageElement;
    UNSAFE_componentWillMount(): void;
    componentWillUnmount(): void;
    onDragStarted: (x: number, y: number) => void;
    onMouseMove: (e: MouseEvent) => void;
    onMouseUp: () => void;
    /**
     * When newScale change we want to zoom in/out relative to the center of the frame.
     * @param newScale New scale in 0-100 format.
     */
    onScaleChange: (scale: number) => void;
    /**
     * This gets called when the cropper loads an image
     * at this point we will be able to get the height/width
     * @param width the width of the image
     * @param height the height of the image
     */
    onImageLoaded: (image: HTMLImageElement) => void;
    exportCroppedImage: () => string;
    exportCrop(): void;
    validateFile(imageFile: File): string | null;
    readFile(imageFile: File): Promise<void>;
    onUploadButtonClick: React.MouseEventHandler;
    onFileChange: (e: React.SyntheticEvent<HTMLInputElement, Event>) => void;
    updateDroppingState(e: React.DragEvent<{}>, state: boolean): void;
    onDragEnter: (e: React.DragEvent<{}>) => void;
    onDragOver: (e: React.DragEvent<{}>) => void;
    onDragLeave: (e: React.DragEvent<{}>) => void;
    onDrop: (e: React.DragEvent<{}>) => void;
    renderDragZone: () => JSX.Element;
    renderImageUploader(): JSX.Element;
    onRemoveImage: () => void;
    renderImageCropper(dataURI: string): JSX.Element;
    private readonly dataURI;
    render(): JSX.Element;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
