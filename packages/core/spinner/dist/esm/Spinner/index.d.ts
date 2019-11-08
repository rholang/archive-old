import { Component } from 'react';
import { Transition } from 'react-transition-group';
import { SpinnerProps, SpinnerState } from '../types';
export default class Spinner extends Component<SpinnerProps, SpinnerState> {
    static defaultProps: {
        delay: number;
        isCompleting: boolean;
        invertColor: boolean;
        onComplete: () => void;
        size: string;
    };
    transitionNode: Transition | null;
    constructor(props: SpinnerProps);
    enter: () => void;
    idle: () => void;
    exit: () => void;
    endListener: (node: HTMLElement, done: () => void) => void;
    validateSize: () => number;
    render(): JSX.Element;
}
