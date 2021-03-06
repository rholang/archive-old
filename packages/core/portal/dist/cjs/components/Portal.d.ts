import React, { ReactNode } from 'react';
import { layers } from '@atlaskit/theme';
declare type Props = {
    children: ReactNode;
    zIndex: number | string;
};
declare type State = {
    container?: HTMLElement;
    portalIsMounted: boolean;
};
declare type LayerKey = keyof typeof layers;
export declare type PortalEventDetail = {
    layer: LayerKey | null;
    zIndex: number;
};
export declare type PortalEvent = CustomEvent<PortalEventDetail>;
declare class Portal extends React.Component<Props, State> {
    static defaultProps: {
        zIndex: number;
    };
    state: {
        container: HTMLElement | undefined;
        portalIsMounted: boolean;
    };
    componentDidUpdate(prevProps: Props, prevState: State): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
}
export default Portal;
