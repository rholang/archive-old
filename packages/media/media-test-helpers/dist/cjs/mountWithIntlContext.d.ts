import { ReactWrapper } from 'enzyme';
import { Component, ReactElement } from 'react';
export declare const mountWithIntlContext: <P, S>(node: ReactElement<P, string | ((props: any) => ReactElement<any, string | any | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)>, reactContext?: Object | undefined, childContextTypes?: Object | undefined) => ReactWrapper<P, S, Component<P, S, any>>;
