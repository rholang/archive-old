import { Component } from 'react';
import { StaticCardProps } from './types';
export interface ErrorCardProps extends StaticCardProps {
    readonly size: 'small' | 'medium' | 'large' | 'xlarge';
}
export declare class CardError extends Component<ErrorCardProps, {}> {
    static defaultProps: {
        size: string;
    };
    render(): JSX.Element;
    readonly icon: JSX.Element;
}
