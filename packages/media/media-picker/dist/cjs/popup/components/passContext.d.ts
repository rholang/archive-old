/// <reference types="react-intl" />
/// <reference types="@emotion/core" />
import { Component } from 'react';
import { AppProxyReactContext } from './app';
import { Store } from 'redux';
import { State } from '../domain';
import { UIAnalyticsEventHandler } from '@atlaskit/analytics-next';
export interface PassContextProps {
    store: Store<State>;
    proxyReactContext?: AppProxyReactContext;
}
export default class PassContext extends Component<PassContextProps, any> {
    static childContextTypes: {
        store(): void;
        getAtlaskitAnalyticsEventHandlers(): void;
        intl: ReactIntl.IntlShape;
    };
    private createDefaultI18nProvider;
    getChildContext(): {
        store: Store<State>;
        getAtlaskitAnalyticsEventHandlers: UIAnalyticsEventHandler;
        intl: ReactIntl.InjectedIntl | ReactIntl.IntlShape;
    };
    render(): import("react").ReactNode;
}
