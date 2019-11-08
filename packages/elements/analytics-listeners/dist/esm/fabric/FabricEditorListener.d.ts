import * as React from 'react';
import { UIAnalyticsEventHandler } from '@atlaskit/analytics-next';
import { ListenerProps } from '../types';
export declare const EDITOR_TAG = "fabricEditor";
export default class FabricEditorListener extends React.Component<ListenerProps> {
    handleEventWrapper: UIAnalyticsEventHandler;
    render(): JSX.Element;
}
