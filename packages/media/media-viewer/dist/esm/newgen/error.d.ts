import * as React from 'react';
import { ReactNode } from 'react';
import { FormattedMessage, InjectedIntlProps } from 'react-intl';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
export declare type ErrorName = 'previewFailed' | 'metadataFailed' | 'unsupported' | 'idNotFound' | 'noPDFArtifactsFound' | 'failedProcessing';
export declare type Props = Readonly<{
    error: MediaViewerError;
    children?: ReactNode;
}>;
export declare type FormatMessageFn = (messageDescriptor: FormattedMessage.MessageDescriptor) => string;
export declare class MediaViewerError {
    readonly errorName: ErrorName;
    readonly fileState?: import("@atlaskit/media-client").UploadingFileState | import("@atlaskit/media-client").ProcessingFileState | import("@atlaskit/media-client").ProcessedFileState | import("@atlaskit/media-client").ErrorFileState | import("@atlaskit/media-client").ProcessingFailedState | undefined;
    readonly innerError?: Error | undefined;
    constructor(errorName: ErrorName, fileState?: import("@atlaskit/media-client").UploadingFileState | import("@atlaskit/media-client").ProcessingFileState | import("@atlaskit/media-client").ProcessedFileState | import("@atlaskit/media-client").ErrorFileState | import("@atlaskit/media-client").ProcessingFailedState | undefined, innerError?: Error | undefined);
}
export declare const createError: (name: ErrorName, innerError?: Error | undefined, fileState?: import("@atlaskit/media-client").UploadingFileState | import("@atlaskit/media-client").ProcessingFileState | import("@atlaskit/media-client").ProcessedFileState | import("@atlaskit/media-client").ErrorFileState | import("@atlaskit/media-client").ProcessingFailedState | undefined) => MediaViewerError;
export declare class ErrorMessage extends React.Component<Props & InjectedIntlProps & WithAnalyticsEventsProps, {}> {
    private fireAnalytics;
    componentDidMount(): void;
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Readonly<{
    error: MediaViewerError;
    children?: React.ReactNode;
}> & WithAnalyticsEventsProps, "children" | "error"> & React.RefAttributes<any>>;
export default _default;
