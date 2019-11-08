import React from 'react';
interface Props {
    /** A ref to the container that the content should be layered around for height calculation
     * purposes. This must be an ancestor element as component does not attach the layered content around
     * the ref itself. */
    containerRef: HTMLElement | null;
    /**
     * The content to render in the layer.
     */
    content: React.ReactNode;
    /**
     * input value from the menu.
     */
    inputValue: string;
}
/**
 * This component renders layered content with fixed positioning.
 * Scroll is locked outside the layer to prevent the layered content from detaching from the
 * container ref.
 */
export default class FixedLayer extends React.Component<Props> {
    scheduleUpdate: () => void;
    componentDidUpdate(prevProps: any): void;
    render(): JSX.Element;
}
export {};
