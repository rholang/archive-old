import * as React from 'react';
import { UIAnalyticsEventHandler } from '@atlaskit/analytics-next';
import { ListenerProps } from '../types';
export declare const ELEMENTS_TAG = "fabricElements";
export default class FabricElementsListener extends React.Component<ListenerProps> {
    handleEventWrapper: UIAnalyticsEventHandler;
    render(): JSX.Element;
}
