import * as React from 'react';
import { CustomProgressBarProps } from '../types';
export default class extends React.PureComponent<CustomProgressBarProps> {
    static defaultProps: {
        value: number;
        isIndeterminate: boolean;
    };
    render(): JSX.Element;
}
