import React from 'react';
interface Props {
    /**
     Whether the modal for this stack position is open
    */
    isOpen: boolean;
    /**
     Children is a function that gets passed the current stack index
    */
    children: (index: number) => React.ReactNode;
}
interface State {
    stackIndex: number;
}
declare class StackConsumer extends React.Component<Props, State> {
    state: {
        stackIndex: number;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Props): void;
    update: () => void;
    render(): React.ReactNode;
}
export default StackConsumer;
