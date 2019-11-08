import { MediaClient, FileState } from '@atlaskit/media-client';
import { Outcome } from '../domain';
import { MediaViewerError } from '../error';
import { BaseState, BaseViewer } from './base-viewer';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';
export declare type Props = Readonly<{
    item: FileState;
    mediaClient: MediaClient;
    collectionName?: string;
    previewCount: number;
    onCanPlay?: () => void;
    onError?: () => void;
} & WithShowControlMethodProp>;
export declare type State = BaseState<string> & {
    coverUrl?: string;
};
export declare class AudioViewer extends BaseViewer<string, Props, State> {
    protected readonly initialState: {
        content: Outcome<string, MediaViewerError>;
    };
    private renderCover;
    private saveAudioElement;
    private onFirstPlay;
    protected renderSuccessful(src: string): JSX.Element;
    private loadCover;
    private setCoverUrl;
    protected init(): Promise<void>;
    protected release(): void;
}
