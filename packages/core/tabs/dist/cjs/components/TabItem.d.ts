import { Component } from 'react';
import { TabItemComponentProvided } from '../types';
export default class TabItem extends Component<TabItemComponentProvided> {
    static defaultProps: {
        data: {};
        elementProps: {};
        innerRef: () => void;
        isSelected: boolean;
    };
    render(): JSX.Element;
}
