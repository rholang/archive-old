import React from 'react';
import { Props as SpotlightProps } from './Spotlight';
export interface Props extends SpotlightProps {
    /** the spotlight tagert dom element */
    targetNode: HTMLElement;
    /** Called when the component has been mounted */
    onOpened: () => any;
    /** Called when the component has been unmounted */
    onClosed: () => any;
}
interface State {
    replacementElement: HTMLElement | null;
}
declare class SpotlightInner extends React.Component<Props, State> {
    static defaultProps: {
        dialogWidth: number;
        pulse: boolean;
    };
    state: {
        replacementElement: null;
    };
    componentDidUpdate(prevProps: Props): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    isPositionFixed: (element: Element) => boolean;
    hasPositionFixedParent: (element: HTMLElement) => boolean;
    getTargetNodeStyle: () => {
        height?: undefined;
        left?: undefined;
        top?: undefined;
        width?: undefined;
        position?: undefined;
    } | {
        height: number;
        left: number;
        top: number;
        width: number;
        position: string;
    };
    render(): JSX.Element;
}
export default SpotlightInner;
