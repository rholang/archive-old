import React from 'react';
import { SpinnerSizeType } from '../types';
interface Props {
    children: React.ReactNode;
    isLoading?: boolean;
    spinnerSize?: SpinnerSizeType;
    contentsOpacity: number;
}
export default class LoadingContainer extends React.Component<Props, {}> {
    static defaultProps: {
        isLoading: boolean;
        spinnerSize: string;
        contentsOpacity: number;
    };
    render(): JSX.Element;
}
export {};
