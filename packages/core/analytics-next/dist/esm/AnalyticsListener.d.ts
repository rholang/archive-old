import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UIAnalyticsEvent from './UIAnalyticsEvent';
declare type Props = {
    /** Children! */
    children?: React.ReactNode;
    /** The channel to listen for events on. */
    channel?: string;
    /** A function which will be called when an event is fired on this Listener's
     * channel. It is passed the event and the channel as arguments. */
    onEvent: (event: UIAnalyticsEvent, channel?: string) => void;
};
declare class AnalyticsListener extends Component<Props> {
    static contextTypes: {
        getAtlaskitAnalyticsEventHandlers: PropTypes.Requireable<any>;
    };
    static childContextTypes: {
        getAtlaskitAnalyticsEventHandlers: PropTypes.Requireable<any>;
    };
    getChildContext: () => {
        getAtlaskitAnalyticsEventHandlers: () => any[];
    };
    getAnalyticsEventHandlers: () => any[];
    render(): JSX.Element;
}
export default AnalyticsListener;
