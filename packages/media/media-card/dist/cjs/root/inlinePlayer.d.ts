import * as React from 'react';
import { Component } from 'react';
import { MediaClient, FileIdentifier, FileState } from '@atlaskit/media-client';
import { Subscription } from 'rxjs/Subscription';
import { CardDimensions } from '..';
import { WithAnalyticsEventsProps, UIAnalyticsEvent } from '@atlaskit/analytics-next';
export interface InlinePlayerOwnProps {
    identifier: FileIdentifier;
    mediaClient: MediaClient;
    dimensions: CardDimensions;
    selected?: boolean;
    onError?: (error: Error) => void;
    readonly onClick?: (event: React.MouseEvent<HTMLDivElement>, analyticsEvent?: UIAnalyticsEvent) => void;
}
export declare type InlinePlayerProps = InlinePlayerOwnProps & WithAnalyticsEventsProps;
export interface InlinePlayerState {
    fileSrc?: string;
}
export declare const getPreferredVideoArtifact: (fileState: FileState) => "video_1280.mp4" | "video_640.mp4" | "document.pdf" | "audio.mp3" | undefined;
export declare class InlinePlayerBase extends Component<InlinePlayerProps, InlinePlayerState> {
    subscription?: Subscription;
    state: InlinePlayerState;
    divRef: React.RefObject<HTMLDivElement>;
    static defaultProps: {
        dimensions: {
            width: number;
            height: number;
        };
    };
    componentDidMount(): Promise<void>;
    setFileSrc: (fileSrc: string) => void;
    setBinaryURL: () => Promise<void>;
    unsubscribe: () => void;
    revoke: () => void;
    componentWillUnmount(): void;
    private getStyle;
    onDownloadClick: () => Promise<void>;
    onFirstPlay: () => Promise<void>;
    render(): JSX.Element;
}
export declare const InlinePlayer: React.ForwardRefExoticComponent<Pick<Pick<InlinePlayerProps, "onError" | "onClick" | "selected" | "dimensions" | "identifier" | "mediaClient">, "onError" | "onClick" | "selected" | "identifier" | "mediaClient"> & Partial<Pick<Pick<InlinePlayerProps, "onError" | "onClick" | "selected" | "dimensions" | "identifier" | "mediaClient">, "dimensions">> & Partial<Pick<{
    dimensions: {
        width: number;
        height: number;
    };
}, never>> & React.RefAttributes<any>>;
