import { Component } from 'react';
import { FileDetails, ImageResizeMode } from '@atlaskit/media-client';
import { SharedCardProps, CardStatus } from '../..';
export interface FileCardProps extends SharedCardProps {
    readonly status: CardStatus;
    readonly details?: FileDetails;
    readonly dataURI?: string;
    readonly progress?: number;
    readonly onRetry?: () => void;
    readonly resizeMode?: ImageResizeMode;
    readonly disableOverlay?: boolean;
    readonly previewOrientation?: number;
    readonly onDisplayImage?: () => void;
}
export declare class FileCard extends Component<FileCardProps, {}> {
    static defaultProps: Partial<FileCardProps>;
    render(): JSX.Element;
    renderFile(): JSX.Element;
    private getActions;
    private readonly isError;
}
