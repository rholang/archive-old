import React, { Component } from 'react';
import { StatefulProps } from './types';
interface State {
    isChecked: boolean;
}
export default class Toggle extends Component<StatefulProps, State> {
    static defaultProps: {
        isDisabled: boolean;
        onBlur: () => void;
        onChange: () => void;
        onFocus: () => void;
        size: string;
        label: string;
        name: string;
        value: string;
        isDefaultChecked: boolean;
    };
    state: State;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
