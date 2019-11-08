import * as React from 'react';
import { BrowserProps } from './browser';
import { WithMediaClientConfigProps } from '@atlaskit/media-client';
declare type BrowserWithMediaClientConfigProps = WithMediaClientConfigProps<BrowserProps>;
declare type BrowserWithMediaClientConfigComponent = React.ComponentType<BrowserWithMediaClientConfigProps>;
declare type State = {
    Browser?: BrowserWithMediaClientConfigComponent;
};
export declare class BrowserLoader extends React.PureComponent<BrowserWithMediaClientConfigProps, State> {
    private mounted;
    static displayName: string;
    static Browser?: BrowserWithMediaClientConfigComponent;
    state: {
        Browser: React.ComponentClass<WithMediaClientConfigProps<BrowserProps>, any> | React.FunctionComponent<WithMediaClientConfigProps<BrowserProps>> | undefined;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    UNSAFE_componentWillMount(): Promise<void>;
    render(): JSX.Element | null;
}
export {};
