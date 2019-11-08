import * as React from 'react';
import { Component, ReactNode } from 'react';
import { MediaType, ImageResizeMode } from '@atlaskit/media-client';
import { CardDimensions, CardStatus } from '../../index';
import { CardAction } from '../../actions';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { AnalyticsLoadingAction } from '../../root/card/getCardStatus';
export interface FileCardImageViewProps {
    readonly mediaName?: string;
    readonly mediaType?: MediaType;
    readonly fileSize?: string;
    readonly dataURI?: string;
    readonly alt?: string;
    readonly progress?: number;
    readonly status: CardStatus;
    readonly dimensions?: CardDimensions;
    readonly resizeMode?: ImageResizeMode;
    readonly disableOverlay?: boolean;
    readonly selectable?: boolean;
    readonly selected?: boolean;
    readonly error?: ReactNode;
    readonly actions?: CardAction[];
    readonly onRetry?: () => void;
    readonly onDisplayImage?: () => void;
    readonly previewOrientation?: number;
}
export declare class FileCardImageViewBase extends Component<FileCardImageViewProps & WithAnalyticsEventsProps, {}> {
    private wasThumbnailDisplayed;
    private lastAnalyticsAction;
    static defaultProps: {
        resizeMode: string;
        disableOverlay: boolean;
    };
    render(): JSX.Element;
    private renderCardContents;
    private renderLoadingContents;
    private renderErrorContents;
    private renderFailedContents;
    private renderUploadingCardOverlay;
    private renderPlayButton;
    onImageLoad: () => void;
    onImageError: () => void;
    private renderMediaImage;
    shouldFireLoadingStatusAnalyticsEvent: (action: AnalyticsLoadingAction) => boolean;
    fireLoadingStatusAnalyticsEvent: (action: AnalyticsLoadingAction) => void;
    private renderProgressBar;
    private renderSuccessCardContents;
    private renderSuccessCardOverlay;
    private readonly isImageNotReadyForDisplay;
    private readonly isCropped;
    private readonly isStretched;
}
export declare const FileCardImageView: React.ForwardRefExoticComponent<Pick<Pick<FileCardImageViewProps & WithAnalyticsEventsProps, "progress" | "mediaType" | "actions" | "mediaName" | "selectable" | "selected" | "error" | "onRetry" | "disableOverlay" | "dimensions" | "status" | "dataURI" | "fileSize" | "alt" | "resizeMode" | "onDisplayImage" | "previewOrientation">, "progress" | "mediaType" | "actions" | "mediaName" | "selectable" | "selected" | "error" | "onRetry" | "dimensions" | "status" | "dataURI" | "fileSize" | "alt" | "onDisplayImage" | "previewOrientation"> & Partial<Pick<Pick<FileCardImageViewProps & WithAnalyticsEventsProps, "progress" | "mediaType" | "actions" | "mediaName" | "selectable" | "selected" | "error" | "onRetry" | "disableOverlay" | "dimensions" | "status" | "dataURI" | "fileSize" | "alt" | "resizeMode" | "onDisplayImage" | "previewOrientation">, "disableOverlay" | "resizeMode">> & Partial<Pick<{
    resizeMode: string;
    disableOverlay: boolean;
}, never>> & React.RefAttributes<any>>;
