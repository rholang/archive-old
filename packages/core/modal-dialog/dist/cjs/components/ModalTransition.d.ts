import React from 'react';
interface Props {
    /**
      Children that are conditionally rendered. The transition happens based
      on the existence or non-existence of children.
    */
    children?: React.ReactNode;
}
interface State {
    currentChildren: React.ReactNode;
}
declare class Transition extends React.Component<Props, State> {
    state: {
        currentChildren: undefined;
    };
    static getDerivedStateFromProps(props: Props, state: State): {
        currentChildren: {} | null | undefined;
    };
    onExited: () => void;
    render(): JSX.Element;
}
export declare const ModalTransitionConsumer: React.ExoticComponent<React.ConsumerProps<{
    isOpen: boolean;
    onExited: () => void;
}>>;
export default Transition;
