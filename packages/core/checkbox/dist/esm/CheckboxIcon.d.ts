import { Component } from 'react';
import { ExtenderType } from './utils';
import { CheckboxIconProps, ThemeProps, ThemeTokens } from './types';
export default class CheckboxIcon extends Component<CheckboxIconProps, {}> {
    static defaultProps: {
        primaryColor: string;
        secondaryColor: string;
        isIndeterminate: boolean;
        theme: (current: (prop: ThemeProps) => ThemeTokens, props: ThemeProps) => ThemeTokens;
    };
    createExtender?: ExtenderType;
    constructor(props: CheckboxIconProps);
    render(): JSX.Element;
}
