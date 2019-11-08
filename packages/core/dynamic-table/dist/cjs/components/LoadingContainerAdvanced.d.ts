import React from 'react';
import { SpinnerSizeType } from '../types';
export interface Props {
    children: React.ReactElement<any>;
    isLoading?: boolean;
    spinnerSize?: SpinnerSizeType;
    contentsOpacity: number;
    targetRef?: () => React.ComponentType<any> | undefined;
}
export default class LoadingContainerAdvanced extends React.Component<Props, {}> {
    children?: HTMLElement;
    spinner?: HTMLElement;
    static defaultProps: {
        isLoading: boolean;
        spinnerSize: string;
        contentsOpacity: number;
    };
    componentDidMount: () => void;
    UNSAFE_componentWillReceiveProps: (nextProps: Props) => void;
    componentDidUpdate: () => void;
    componentWillUnmount: () => void;
    getTargetNode: (nextProps?: Props) => Element | Text | null;
    getThisNode: () => Element | Text | null;
    getSpinnerNode: () => Element | Text | null;
    hasTargetNode: (nextProps?: Props | undefined) => boolean;
    isVerticallyVisible: (elementRect: {
        top: number;
        bottom: number;
    }, viewportHeight: number) => boolean;
    isFullyVerticallyVisible: (elementRect: {
        top: number;
        bottom: number;
    }, viewportHeight: number) => boolean;
    attachListeners(): void;
    detachListeners(): void;
    handleResize: () => void;
    handleScroll: () => void;
    translateSpinner: (spinnerNode: HTMLElement, transformY: number, isFixed?: boolean | undefined) => void;
    updateTargetAppearance: () => void;
    updateSpinnerPosition(): void;
    render(): JSX.Element;
}
