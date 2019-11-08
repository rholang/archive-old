import { MediaClient, FileState } from '@atlaskit/media-client';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';
import { Outcome } from '../domain';
import { MediaViewerError } from '../error';
import { BaseState, BaseViewer } from './base-viewer';
export declare type Props = Readonly<{
    item: FileState;
    mediaClient: MediaClient;
    collectionName?: string;
    previewCount: number;
    onCanPlay?: () => void;
    onError?: () => void;
} & WithShowControlMethodProp>;
export declare type State = BaseState<string> & {
    isHDActive: boolean;
    coverUrl?: string;
};
export declare class VideoViewer extends BaseViewer<string, Props, State> {
    protected readonly initialState: {
        content: Outcome<string, MediaViewerError>;
        isHDActive: boolean;
    };
    private onHDChange;
    private onFirstPlay;
    protected renderSuccessful(content: string): JSX.Element;
    protected init(isHDActive?: boolean): Promise<void>;
    protected release(): void;
}
