import React from 'react';
import { AppearanceType, KeyboardOrMouseEvent, ButtonOnClick } from '../types';
interface Props {
    /**
      Buttons to render in the footer
    */
    actions?: Array<{
        onClick?: ButtonOnClick;
        text?: string;
    }>;
    /**
      Appearance of the primary action. Also adds an icon to the heading, if provided.
    */
    appearance?: AppearanceType;
    /**
      Deprecated, use components prop: Component to render the body of the modal.
    */
    body?: React.ElementType;
    /**
      Content of the modal
    */
    children?: React.ReactNode;
    /**
      Object describing internal components. Use this to swap out the default components.
    */
    components: {
        Header?: React.ElementType;
        Body?: React.ElementType;
        Footer?: React.ElementType;
        Container?: React.ElementType;
    };
    /**
      Deprecated, use components prop: Component to render the header of the modal.
    */
    header?: React.ElementType;
    /**
      Deprecated, use components prop: Component to render the footer of the moda.l
    */
    footer?: React.ElementType;
    /**
      Function that will be called to initiate the exit transition.
    */
    onClose: (event: KeyboardOrMouseEvent) => void;
    /**
      Function that will be called when the modal changes position in the stack.
    */
    onStackChange?: (stackIndex: number) => void;
    /**
      Whether or not the body content should scroll
    */
    shouldScroll?: boolean;
    /**
      Boolean indicating if pressing the `esc` key should close the modal
    */
    shouldCloseOnEscapePress?: boolean;
    /**
      Boolean indicating content should be rendered on a transparent background.
    */
    isChromeless?: boolean;
    /**
      Number representing where in the stack of modals, this modal sits
    */
    stackIndex?: number;
    /**
      The modal title; rendered in the header.
    */
    heading?: React.ReactNode;
    /**
     * Makes heading multiline.
     * If false and heading is longer than one line overflow will be not displayed.
     */
    isHeadingMultiline?: boolean;
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
    testId?: string;
}
interface State {
    showFooterKeyline: boolean;
    showHeaderKeyline: boolean;
    tabbableElements: Array<{}>;
}
export default class Content extends React.Component<Props, State> {
    static defaultProps: {
        autoFocus: boolean;
        components: {};
        isChromeless: boolean;
        stackIndex: number;
        isHeadingMultiline: boolean;
    };
    escapeIsHeldDown: boolean;
    _isMounted: boolean;
    scrollContainer: HTMLElement | null;
    state: State;
    componentDidMount(): void;
    UNSAFE_componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    determineKeylines: any;
    getScrollContainer: (ref: HTMLElement) => void;
    handleKeyUp: () => void;
    handleKeyDown: (event: any) => void;
    handleStackChange: (stackIndex: number) => void;
    render(): JSX.Element;
}
export {};
