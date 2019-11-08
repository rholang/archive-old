import { Component } from 'react';
import { ButtonProps, ButtonAppearances } from '@atlaskit/button';
declare type Diff<T, U> = T extends U ? never : T;
declare type PagePropsType = Diff<ButtonProps, {
    appearance?: ButtonAppearances;
    autoFocus: boolean;
    isDisabled: boolean;
    isLoading: boolean;
    spacing: 'compact' | 'default' | 'none';
    shouldFitContainer: boolean;
    type: 'button' | 'submit';
}> & {
    page?: any;
};
export default class Page extends Component<PagePropsType> {
    render(): JSX.Element;
}
export {};
