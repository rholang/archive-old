import { Component } from 'react';
export interface SliderProps {
    value: number;
    onChange: (value: number) => void;
}
export declare const defaultProps: {
    value: number;
};
export declare class Slider extends Component<SliderProps, {}> {
    static defaultProps: {
        value: number;
    };
    render(): JSX.Element;
}
