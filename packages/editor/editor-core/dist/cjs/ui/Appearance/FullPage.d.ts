import * as React from 'react';
import { EditorAppearanceComponentProps } from '../../types';
interface State {
    showKeyline: boolean;
    containerWidth?: number;
}
export default class Editor extends React.Component<EditorAppearanceComponentProps, State> {
    state: State;
    static displayName: string;
    private appearance;
    private scrollContainer;
    private contentArea;
    private scheduledKeylineUpdate;
    private scheduledWidthUpdate;
    stopPropagation: (event: React.MouseEvent<HTMLDivElement, any>) => void;
    scrollContainerRef: (ref: HTMLElement | null) => void;
    updateToolbarKeyline: () => boolean;
    private scheduleUpdateToolbarKeyline;
    updateContainerWidth: () => void;
    private scheduleUpdateContainerWidth;
    handleResize: () => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
