import * as React from 'react';
import { ProfileCardResourcedProps, ProfileCardResourcedState, ProfileCardAction } from '../types';
export default class ProfileCardResourced extends React.PureComponent<ProfileCardResourcedProps, ProfileCardResourcedState> {
    static defaultProps: Partial<ProfileCardResourcedProps>;
    _isMounted: boolean;
    state: ProfileCardResourcedState;
    componentDidMount(): void;
    componentDidUpdate(prevProps: ProfileCardResourcedProps, prevState: ProfileCardResourcedState): void;
    componentWillUnmount(): void;
    private callAnalytics;
    clientFetchProfile: () => void;
    handleClientSuccess(res: any): void;
    handleClientError(err: any): void;
    filterActions: () => ProfileCardAction[];
    render(): React.ReactNode;
}
