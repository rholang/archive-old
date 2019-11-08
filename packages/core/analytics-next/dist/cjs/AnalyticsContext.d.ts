import React, { Component } from 'react';
import PropTypes from 'prop-types';
interface Props {
    /** Children! */
    children: React.ReactNode;
    /** Arbitrary data. Any events created below this component in the tree will
     * have this added as an item in their context array. */
    data: unknown;
}
interface State {
    getAtlaskitAnalyticsContext: () => any[];
    getAtlaskitAnalyticsEventHandlers: () => any[];
}
declare class AnalyticsContext extends Component<Props, State> {
    static contextTypes: {
        getAtlaskitAnalyticsContext: PropTypes.Requireable<any>;
        getAtlaskitAnalyticsEventHandlers: PropTypes.Requireable<any>;
    };
    static childContextTypes: {
        getAtlaskitAnalyticsContext: PropTypes.Requireable<any>;
        getAtlaskitAnalyticsEventHandlers: PropTypes.Requireable<any>;
    };
    constructor(props: Props);
    getChildContext: () => {
        getAtlaskitAnalyticsContext: () => any[];
    };
    getAnalyticsContext: () => any[];
    getAnalyticsEventHandlers: () => any;
    render(): JSX.Element;
}
export default AnalyticsContext;
