import * as React from 'react';
import { EditorProps } from '../../types';
interface State {
    showKeyline: boolean;
    containerWidth?: number;
}
export declare class FullPage extends React.Component<EditorProps, State> {
    state: {
        showKeyline: boolean;
    };
    static displayName: string;
    private scrollContainer;
    private scheduledKeylineUpdate;
    scrollContainerRef: (ref: HTMLElement | null) => void;
    updateToolbarKeyline: () => boolean;
    private scheduleUpdateToolbarKeyline;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
