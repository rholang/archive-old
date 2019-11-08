import React, { PureComponent, ElementType, ReactNode } from 'react';
interface SpotlightContext {
    opened: () => void;
    closed: () => void;
    targets: {
        [key: string]: HTMLElement | undefined;
    };
}
declare const TargetConsumer: React.ExoticComponent<React.ConsumerProps<any>>;
declare const SpotlightStateConsumer: React.ExoticComponent<React.ConsumerProps<SpotlightContext>>;
export { TargetConsumer };
export { SpotlightStateConsumer as SpotlightConsumer };
interface Props {
    /** Boolean prop for toggling blanket transparency  */
    blanketIsTinted?: boolean;
    children: ReactNode;
    component?: ElementType;
}
export default class SpotlightManager extends PureComponent<Props, {
    spotlightCount: number;
    targets: {
        [key: string]: HTMLElement | void;
    };
}> {
    static defaultProps: {
        blanketIsTinted: boolean;
    };
    componentDidMount(): void;
    state: {
        spotlightCount: number;
        targets: {};
    };
    targetRef: (name: string) => (element: void | HTMLElement) => void;
    spotlightOpen: () => void;
    spotlightClose: () => void;
    getStateProviderValue: (this: any, targets: any) => {
        opened: () => void;
        closed: () => void;
        targets: any;
    };
    render(): JSX.Element;
}
