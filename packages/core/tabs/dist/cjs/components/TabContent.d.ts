import { Component } from 'react';
import { TabContentComponentProvided } from '../types';
export default class TabContent extends Component<TabContentComponentProvided> {
    static defaultProps: {
        data: {};
        elementProps: {};
    };
    render(): JSX.Element;
}
