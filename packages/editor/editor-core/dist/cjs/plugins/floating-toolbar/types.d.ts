import { InjectedIntl } from 'react-intl';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { NodeType, Node } from 'prosemirror-model';
import { Command } from '../../types';
import { ButtonAppearance } from './ui/Button';
import { DropdownOptions, RenderOptionsPropsT } from './ui/Dropdown';
import { SelectOptions, SelectOption } from './ui/Select';
import { ProviderFactory } from '@atlaskit/editor-common';
import React from 'react';
import { DispatchAnalyticsEvent } from '../analytics';
export declare type Icon = React.ComponentType<{
    label: string;
}>;
export declare type RenderOptionsProps = RenderOptionsPropsT<Command>;
export declare type AlignType = 'left' | 'center' | 'right';
export declare type FloatingToolbarButton<T> = {
    type: 'button';
    title: string;
    onClick: T;
    showTitle?: boolean;
    onMouseEnter?: T;
    onMouseLeave?: T;
    icon?: Icon;
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    appearance?: ButtonAppearance;
    href?: string;
    target?: string;
    className?: string;
};
export declare type FloatingToolbarInput<T> = {
    type: 'input';
    onSubmit: (...args: any[]) => T;
    onBlur: (...args: any[]) => T;
    defaultValue?: string;
    placeholder?: string;
    hidden?: boolean;
};
export declare type FloatingToolbarCustom = {
    type: 'custom';
    render: (view?: EditorView, idx?: number, dispatchAnalyticsEvent?: DispatchAnalyticsEvent) => React.ComponentClass | React.SFC | React.ReactElement<any> | null;
    hidden?: boolean;
};
export declare type FloatingToolbarSelect<T> = {
    type: 'select';
    options: SelectOptions<T>;
    hidden?: boolean;
    hideExpandIcon?: boolean;
    defaultValue?: SelectOption;
    placeholder?: string;
    onChange: (selected: SelectOption) => T;
};
export declare type FloatingToolbarSeparator = {
    type: 'separator';
    hidden?: boolean;
};
export declare type FloatingToolbarDropdown<T> = {
    type: 'dropdown';
    title: string;
    icon?: Icon;
    options: DropdownOptions<T>;
    hidden?: boolean;
    hideExpandIcon?: boolean;
};
export declare type FloatingToolbarItem<T> = FloatingToolbarButton<T> | FloatingToolbarDropdown<T> | FloatingToolbarSelect<T> | FloatingToolbarInput<T> | FloatingToolbarCustom | FloatingToolbarSeparator;
export interface FloatingToolbarConfig {
    title: string;
    /**
     * Override the DOM reference used to apply as the target for the
     * floating toolbar, if the config matches.
     *
     * By default, it will find the DOM reference of the node from the
     * head of the current selection.
     */
    getDomRef?: (view: EditorView) => HTMLElement | undefined;
    visible?: boolean;
    nodeType: NodeType | NodeType[];
    items: Array<FloatingToolbarItem<Command>> | ((node: Node) => Array<FloatingToolbarItem<Command>>);
    align?: AlignType;
    className?: string;
    height?: number;
    width?: number;
    offset?: [number, number];
    forcePlacement?: boolean;
}
export declare type FloatingToolbarHandler = (state: EditorState, intl: InjectedIntl, providerFactory: ProviderFactory) => FloatingToolbarConfig | undefined;
