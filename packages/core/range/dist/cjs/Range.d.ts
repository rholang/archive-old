import { ThemeProp } from '@atlaskit/theme/components';
import React, { Component } from 'react';
interface Props {
    /** if the field range needs to be disabled */
    isDisabled?: boolean;
    /** Maximum value of the range */
    max: number;
    /** Minimum value of the range */
    min: number;
    /** Hook to be invoked on change of the range */
    onChange?: (value: number) => any;
    /** Step value for the range */
    step?: number;
    /** Value of the range */
    value?: number;
    /** The default value */
    defaultValue: number;
    /** Callback to receive a reference. */
    inputRef?: (input?: HTMLInputElement) => any;
    /** The theme object to be passed down. See
    [@atlaskit/theme](https://atlaskit.atlassian.com/packages/core/theme) for more details on themeing.
    */
    theme?: ThemeProp<any, any>;
}
interface State {
    value: number;
}
export default class Slider extends Component<Props, State> {
    static defaultProps: {
        isDisabled: boolean;
        defaultValue: number;
        min: number;
        max: number;
        step: number;
        onChange: () => void;
    };
    state: State;
    range?: HTMLInputElement;
    componentDidMount(): void;
    getValue: () => number;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export {};
