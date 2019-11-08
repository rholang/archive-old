import { Component } from 'react';
export interface ErrorIconProps {
    readonly size: 'small' | 'medium' | 'large' | 'xlarge';
}
export declare class ErrorIcon extends Component<ErrorIconProps, {}> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
}
