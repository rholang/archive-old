import { Component } from 'react';
import { ChildrenType, FunctionType } from '../../types';
declare type Props = {
    /** Flag elements to be displayed. */
    children?: ChildrenType;
    /** Handler which will be called when a Flag's dismiss button is clicked.
     * Receives the id of the dismissed Flag as a parameter.
     */
    onDismissed?: FunctionType;
};
export default class FlagGroup extends Component<Props, {}> {
    private animationTimeoutId;
    componentWillUnmount(): void;
    renderChildren: () => JSX.Element[];
    render(): JSX.Element;
}
export {};
