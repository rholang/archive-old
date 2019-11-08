import { Component } from 'react';
import { NavigatorPropsType } from './Navigator';
export default class RightNavigator extends Component<NavigatorPropsType> {
    static defaultProps: {
        'aria-label': string;
        iconBefore: JSX.Element;
        isDisabled: boolean;
    };
    render(): JSX.Element;
}
