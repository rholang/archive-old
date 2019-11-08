import * as React from 'react';
export declare type State = {
    valueSize: number;
    previousValueSize: number;
};
declare type Props = {
    children: React.ReactChild;
    getValue: () => any[];
    selectProps: any;
};
export declare class MultiValueContainer extends React.PureComponent<Props, State> {
    static getDerivedStateFromProps(nextProps: Props, prevState: State): {
        valueSize: number;
        previousValueSize: number;
    };
    private containerRef;
    private timeoutId;
    constructor(props: Props);
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    scrollToBottom: () => void;
    private showPlaceholder;
    private addPlaceholder;
    private renderChildren;
    render(): JSX.Element;
}
export {};
