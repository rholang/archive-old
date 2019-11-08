import React from 'react';
import PropTypes from 'prop-types';
import { CreateEventMap, CreateUIAnalyticsEvent, AnalyticsEventCreator } from './types';
import UIAnalyticsEvent from './UIAnalyticsEvent';
export interface AnalyticsContextConsumerProps<Props> {
    children: (props: {
        createAnalyticsEvent: CreateUIAnalyticsEvent;
        patchedEventProps: CreateEventMap;
    }) => React.ReactNode;
    createEventMap: CreateEventMap;
    wrappedComponentProps: Props;
}
/**
 * This component is used to grab the analytics functions off context.
 * It uses legacy context, but provides an API similar to 16.3 context.
 * This makes it easier to use with the forward ref API.
 */
declare class AnalyticsContextConsumer<Props extends Record<string, any>> extends React.Component<AnalyticsContextConsumerProps<Props>> {
    static contextTypes: {
        getAtlaskitAnalyticsEventHandlers: PropTypes.Requireable<any>;
        getAtlaskitAnalyticsContext: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        createEventMap: {};
    };
    /**
     * Store references to the original and patched event props so we can
     * determine when to update the patched props
     */
    originalEventProps: CreateEventMap;
    patchedEventProps: CreateEventMap;
    constructor(props: AnalyticsContextConsumerProps<Props>);
    updatePatchedEventProps: (props: Props) => Record<string, Record<string, any> | AnalyticsEventCreator>;
    mapCreateEventsToProps: (changedPropNames: string[], props: Props) => {};
    createAnalyticsEvent: (payload: Record<string, any>) => UIAnalyticsEvent;
    render(): React.ReactNode;
}
export default AnalyticsContextConsumer;
