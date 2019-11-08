import * as React from 'react';
import { ReactElement, PureComponent } from 'react';
import { CardEvent } from '@atlaskit/media-card';
import { EventHandlers, CardEventClickHandler } from '@atlaskit/editor-common';
import { Identifier } from '@atlaskit/media-client';
import { MediaProps } from './media';
export interface MediaGroupProps {
    children?: React.ReactNode;
    eventHandlers?: EventHandlers;
}
export interface MediaGroupState {
    animate: boolean;
    offset: number;
}
export default class MediaGroup extends PureComponent<MediaGroupProps, MediaGroupState> {
    state: MediaGroupState;
    private handleSize;
    private handleScroll;
    render(): JSX.Element;
    renderSingleFile(child: ReactElement<MediaProps>): React.ReactElement<MediaProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    renderSingleLink(child: ReactElement<MediaProps>): React.ReactElement<MediaProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    onMediaClick: (cardClickHandler: CardEventClickHandler, child: React.ReactElement<MediaProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>, surroundingItems: Identifier[]) => (event: CardEvent, analyticsEvent?: any) => void;
    cloneFileCard(child: ReactElement<MediaProps>, surroundingItems: Identifier[]): React.ReactElement<MediaProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    renderStrip(): JSX.Element;
    private mapMediaPropsToIdentifier;
}
