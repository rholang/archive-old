/** @jsx jsx */
import React from 'react';
import { DefaultProgressBarProps } from '../types';
export default class ProgressBar extends React.PureComponent<DefaultProgressBarProps> {
    static defaultProps: {
        value: number;
        isIndeterminate: boolean;
    };
    render(): JSX.Element;
}
