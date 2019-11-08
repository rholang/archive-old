/// <reference types="react" />
/// <reference types="@emotion/core" />
import { CreateUIAnalyticsEvent, WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { LocalUploadComponentReact, LocalUploadComponentBaseProps } from '../localUploadReact';
import { LocalFileWithSource, UploadService } from '../../service/types';
import { ClipboardConfig } from '../types';
export declare const getFilesFromClipboard: (files: FileList) => File[];
export interface ClipboardOwnProps {
    config: ClipboardConfig;
}
export declare type ClipboardProps = LocalUploadComponentBaseProps & WithAnalyticsEventsProps & {
    config: ClipboardConfig;
};
declare class ClipboardImpl {
    static instances: ClipboardImpl[];
    uploadService: UploadService;
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
    constructor(uploadService: UploadService);
    static readonly latestInstance: ClipboardImpl | undefined;
    activate(opts?: {
        createAnalyticsEvent?: CreateUIAnalyticsEvent;
    }): void;
    deactivate(): void;
    onFilesPasted(files: LocalFileWithSource[]): void;
    private fireAnalyticsEvent;
    static handleEvent: (event: Event) => void;
}
export declare class ClipboardBase extends LocalUploadComponentReact<ClipboardProps> {
    clipboard: ClipboardImpl;
    static defaultProps: {
        config: ClipboardConfig;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): null;
}
export declare const Clipboard: import("react").ForwardRefExoticComponent<Pick<Pick<Pick<ClipboardProps, "onError" | "mediaClient" | "config" | "onUploadsStart" | "onPreviewUpdate" | "onStatusUpdate" | "onProcessing" | "onEnd">, "onError" | "mediaClient" | "onUploadsStart" | "onPreviewUpdate" | "onStatusUpdate" | "onProcessing" | "onEnd"> & Partial<Pick<Pick<ClipboardProps, "onError" | "mediaClient" | "config" | "onUploadsStart" | "onPreviewUpdate" | "onStatusUpdate" | "onProcessing" | "onEnd">, "config">> & Partial<Pick<{
    config: ClipboardConfig;
}, never>> & import("react").RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "key" | "onError" | "analyticsContext" | "mediaClient" | "config" | "onUploadsStart" | "onPreviewUpdate" | "onStatusUpdate" | "onProcessing" | "onEnd"> & import("react").RefAttributes<any>>;
export {};
