import * as React from 'react';
import { MediaClient, FileState, Identifier } from '@atlaskit/media-client';
import { InjectedIntlProps } from 'react-intl';
import { Outcome } from './domain';
import { MediaViewerError } from './error';
export declare type Props = {
    readonly identifier: Identifier;
    readonly mediaClient: MediaClient;
    readonly onClose?: () => void;
};
export declare type State = {
    item: Outcome<FileState, MediaViewerError>;
};
export declare class Header extends React.Component<Props & InjectedIntlProps, State> {
    state: State;
    private subscription?;
    UNSAFE_componentWillUpdate(nextProps: Props): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private init;
    private renderDownload;
    render(): JSX.Element;
    private renderMetadata;
    private renderMetadataLayout;
    private renderSize;
    private renderSeparator;
    private renderFileTypeText;
    private getMediaIcon;
    private needsReset;
    private release;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
