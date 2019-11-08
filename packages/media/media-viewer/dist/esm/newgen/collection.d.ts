import * as React from 'react';
import { MediaClient, Identifier } from '@atlaskit/media-client';
import { Outcome } from './domain';
import { MediaViewerError } from './error';
import { MediaCollectionItem } from '@atlaskit/media-store';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';
export declare type Props = Readonly<{
    onClose?: () => void;
    defaultSelectedItem?: Identifier;
    collectionName: string;
    mediaClient: MediaClient;
    pageSize: number;
} & WithShowControlMethodProp>;
export declare type State = {
    items: Outcome<MediaCollectionItem[], MediaViewerError>;
};
export declare class Collection extends React.Component<Props, State> {
    state: State;
    private subscription?;
    UNSAFE_componentWillUpdate(nextProps: Props): void;
    componentWillUnmount(): void;
    componentDidMount(): void;
    render(): JSX.Element;
    private init;
    private release;
    private needsReset;
    private onNavigationChange;
    private shouldLoadNext;
    private isLastItem;
}
