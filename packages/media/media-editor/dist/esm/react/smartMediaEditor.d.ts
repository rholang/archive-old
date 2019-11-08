import * as React from 'react';
import { Subscription } from 'rxjs/Subscription';
import { InjectedIntlProps } from 'react-intl';
import { WithAnalyticsEventsProps } from '@atlaskit/analytics-next';
import { MediaClient, FileIdentifier } from '@atlaskit/media-client';
import { CancelInputType, Dimensions } from '../common';
export declare const convertFileNameToPng: (fileName?: string | undefined) => string;
export interface SmartMediaEditorProps {
    identifier: FileIdentifier;
    mediaClient: MediaClient;
    onUploadStart?: (identifier: FileIdentifier, dimensions: Dimensions) => void;
    onFinish?: (identifier: FileIdentifier) => void;
    onClose?: () => void;
}
export interface SmartMediaEditorState {
    hasError: boolean;
    errorMessage?: any;
    imageUrl?: string;
    hasBeenEdited: boolean;
    closeIntent: boolean;
}
export declare class SmartMediaEditor extends React.Component<SmartMediaEditorProps & InjectedIntlProps & WithAnalyticsEventsProps, SmartMediaEditorState> {
    fileName?: string;
    state: SmartMediaEditorState;
    getFileSubscription?: Subscription;
    uploadFileSubscription?: Subscription;
    static contextTypes: {
        intl: ReactIntl.IntlShape;
    };
    private getFileUnsubscribeTimeoutId;
    private uploadFileUnsubscribeTimeoutId;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Readonly<SmartMediaEditorProps>): void;
    componentWillUnmount(): void;
    getFile: (identifier: FileIdentifier) => Promise<void>;
    setRemoteImageUrl: (identifier: FileIdentifier) => Promise<void>;
    copyFileToUserCollection: (fileId: string) => Promise<void>;
    private onSave;
    private onAnyEdit;
    private closeConfirmationDialog;
    private closeAnyway;
    private renderDeleteConfirmation;
    onCancel: (input: CancelInputType) => void;
    onError: (error: any) => void;
    private clickShellNotPass;
    renderLoading: () => JSX.Element;
    renderEditor: (imageUrl: string) => JSX.Element;
    renderError: (error: any) => JSX.Element;
    render(): JSX.Element;
}
export default class extends React.Component<SmartMediaEditorProps> {
    render(): JSX.Element;
}
