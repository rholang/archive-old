import { Component } from 'react';
import { CardAction, CardOnClickCallback, CardEvent, OnSelectChangeFunc, OnLoadingChangeFunc } from '@atlaskit/media-card';
import { Identifier } from '@atlaskit/media-client';
import { MediaClientConfig } from '@atlaskit/media-core';
export interface FilmstripItem {
    readonly identifier: Identifier;
    readonly actions?: Array<CardAction>;
    readonly selectable?: boolean;
    readonly selected?: boolean;
    readonly onClick?: CardOnClickCallback;
    readonly onMouseEnter?: (result: CardEvent) => void;
    readonly onSelectChange?: OnSelectChangeFunc;
    readonly onLoadingChange?: OnLoadingChangeFunc;
}
export declare type FilmstripProps = {
    items: FilmstripItem[];
    shouldOpenMediaViewer?: boolean;
    mediaClientConfig?: MediaClientConfig;
};
export interface FilmstripState {
    animate: boolean;
    offset: number;
}
export declare class Filmstrip extends Component<FilmstripProps, FilmstripState> {
    state: FilmstripState;
    private handleSize;
    private handleScroll;
    private renderCards;
    render(): JSX.Element;
}
