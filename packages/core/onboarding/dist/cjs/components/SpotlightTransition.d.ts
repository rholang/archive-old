import React, { ReactNode } from 'react';
interface Props {
    /**
      Children that are conditionally rendered. The transition happens based
      on the existence or non-existence of children.
    */
    children?: ReactNode;
}
interface State {
    currentChildren: ReactNode;
}
interface TransitionContextType {
    isOpen: boolean;
    onExited: () => void;
}
declare class Transition extends React.Component<Props, State> {
    static getDerivedStateFromProps(props: Props, state: State): {
        currentChildren: {} | null | undefined;
    };
    state: {
        currentChildren: undefined;
    };
    onExited: () => void;
    render(): JSX.Element;
}
export declare const SpotlightTransitionConsumer: React.ExoticComponent<React.ConsumerProps<TransitionContextType>>;
export default Transition;
