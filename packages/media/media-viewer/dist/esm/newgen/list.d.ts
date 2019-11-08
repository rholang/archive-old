import * as React from 'react';
import { MediaClient, Identifier } from '@atlaskit/media-client';
import { WithShowControlMethodProp } from '@atlaskit/media-ui';
export declare type Props = Readonly<{
    onClose?: () => void;
    onNavigationChange?: (selectedItem: Identifier) => void;
    defaultSelectedItem: Identifier;
    items: Identifier[];
    mediaClient: MediaClient;
} & WithShowControlMethodProp>;
export declare type State = {
    selectedItem: Identifier;
    previewCount: number;
};
export declare class List extends React.Component<Props, State> {
    state: State;
    render(): JSX.Element;
    renderContent(items: Identifier[]): JSX.Element;
    onNavigationChange: (selectedItem: Identifier) => void;
}
