import * as React from 'react';
import { Node as PMNode } from 'prosemirror-model';
import { EditorView } from 'prosemirror-view';
import { Context as SmartCardContext } from '@atlaskit/smart-card';
import { getPosHandler } from '../../../nodeviews';
declare type EditorContext<T> = React.Context<T> & {
    value: T;
};
export interface CardProps {
    children?: React.ReactNode;
    node: PMNode;
    selected: boolean;
    view: EditorView;
    getPos: getPosHandler;
}
export interface SmartCardProps extends CardProps {
    cardContext?: EditorContext<typeof SmartCardContext>;
}
export declare function Card(SmartCardComponent: React.ComponentType<SmartCardProps>, UnsupportedComponent: React.ComponentType): React.ComponentType<CardProps>;
export {};
