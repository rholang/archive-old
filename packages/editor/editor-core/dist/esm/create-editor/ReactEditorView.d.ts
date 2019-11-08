/// <reference types="react-intl" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { EditorState } from 'prosemirror-state';
import { DirectEditorProps, EditorView } from 'prosemirror-view';
import { CreateUIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ErrorReporter, ProviderFactory, Transformer } from '@atlaskit/editor-common';
import { Dispatch, EventDispatcher } from '../event-dispatcher';
import { AnalyticsEventPayload, DispatchAnalyticsEvent, FULL_WIDTH_MODE } from '../plugins/analytics';
import { EditorConfig, EditorPlugin, EditorProps } from '../types';
import { PortalProviderAPI } from '../ui/PortalProvider';
export interface EditorViewProps {
    editorProps: EditorProps;
    createAnalyticsEvent?: CreateUIAnalyticsEvent;
    providerFactory: ProviderFactory;
    portalProviderAPI: PortalProviderAPI;
    allowAnalyticsGASV3?: boolean;
    disabled?: boolean;
    render?: (props: {
        editor: JSX.Element;
        view?: EditorView;
        config: EditorConfig;
        eventDispatcher: EventDispatcher;
        transformer?: Transformer<string>;
        dispatchAnalyticsEvent: DispatchAnalyticsEvent;
    }) => JSX.Element;
    onEditorCreated: (instance: {
        view: EditorView;
        config: EditorConfig;
        eventDispatcher: EventDispatcher;
        transformer?: Transformer<string>;
    }) => void;
    onEditorDestroyed: (instance: {
        view: EditorView;
        config: EditorConfig;
        eventDispatcher: EventDispatcher;
        transformer?: Transformer<string>;
    }) => void;
}
export default class ReactEditorView<T = {}> extends React.Component<EditorViewProps & T> {
    view?: EditorView;
    eventDispatcher: EventDispatcher;
    contentTransformer?: Transformer<string>;
    config: EditorConfig;
    editorState: EditorState;
    errorReporter: ErrorReporter;
    dispatch: Dispatch;
    analyticsEventHandler: (payloadChannel: {
        payload: AnalyticsEventPayload;
        channel?: string;
    }) => void;
    static contextTypes: {
        getAtlaskitAnalyticsEventHandlers: PropTypes.Requireable<any>;
        intl: ReactIntl.IntlShape;
    };
    private canDispatchTransactions;
    private focusTimeoutId;
    constructor(props: EditorViewProps & T);
    private broadcastDisabled;
    UNSAFE_componentWillReceiveProps(nextProps: EditorViewProps): void;
    formatFullWidthAppearance: (appearance: "full-width" | "comment" | "full-page" | "chromeless" | "mobile" | undefined) => FULL_WIDTH_MODE;
    reconfigureState: (props: EditorViewProps) => void;
    /**
     * Deactivate analytics event handler, if exist any.
     */
    deactivateAnalytics(): void;
    /**
     * Create analytics event handler, if createAnalyticsEvent exist
     * @param createAnalyticsEvent
     */
    activateAnalytics(createAnalyticsEvent?: CreateUIAnalyticsEvent): void;
    componentDidMount(): void;
    /**
     * Clean up any non-PM resources when the editor is unmounted
     */
    componentWillUnmount(): void;
    getPlugins(editorProps: EditorProps, prevEditorProps?: EditorProps, createAnalyticsEvent?: CreateUIAnalyticsEvent): EditorPlugin[];
    createEditorState: (options: {
        props: EditorViewProps;
        replaceDoc?: boolean | undefined;
    }) => EditorState<any>;
    private dispatchTransaction;
    getDirectEditorProps: (state?: EditorState<any> | undefined) => DirectEditorProps<any>;
    createEditorView: (node: HTMLDivElement) => void;
    handleEditorViewRef: (node: HTMLDivElement) => void;
    dispatchAnalyticsEvent: (payload: AnalyticsEventPayload) => void;
    render(): JSX.Element;
}
