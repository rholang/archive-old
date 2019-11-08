import React from 'react';
import { WidthNames } from '../shared-variables';
import { WrapperProps as OuterProps } from './ModalWrapper';
interface Props extends OuterProps {
    /**
      Whether or not the dialog is visible
    */
    isOpen: boolean;
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
    testId?: string;
}
interface State {
    dialogNode: Node | null;
    scrollDistance: number;
}
declare class Modal extends React.Component<Props, State> {
    static defaultProps: {
        autoFocus: boolean;
        scrollBehavior: "inside" | "outside";
        shouldCloseOnEscapePress: boolean;
        shouldCloseOnOverlayClick: boolean;
        isChromeless: boolean;
        isOpen: boolean;
        stackIndex: number;
        width: WidthNames;
        isHeadingMultiline: boolean;
        onClose: () => void;
    };
    state: {
        dialogNode: null;
        scrollDistance: number;
        isExiting: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleWindowScroll: () => void;
    handleOverlayClick: (e: React.MouseEvent<Element, MouseEvent>) => void;
    render(): JSX.Element;
}
export declare const ModalDialogWithoutAnalytics: typeof Modal;
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Pick<Props, "body" | "footer" | "header" | "children" | "isOpen" | "stackIndex" | "isChromeless" | "appearance" | "height" | "scrollBehavior" | "width" | "isHeadingMultiline" | "actions" | "onClose" | "testId" | "autoFocus" | "heading" | "components" | "onStackChange" | "shouldCloseOnEscapePress" | "onCloseComplete" | "onOpenComplete" | "shouldCloseOnOverlayClick">, "body" | "footer" | "header" | "children" | "appearance" | "height" | "actions" | "testId" | "heading" | "components" | "onStackChange" | "onCloseComplete" | "onOpenComplete"> & Partial<Pick<Pick<Props, "body" | "footer" | "header" | "children" | "isOpen" | "stackIndex" | "isChromeless" | "appearance" | "height" | "scrollBehavior" | "width" | "isHeadingMultiline" | "actions" | "onClose" | "testId" | "autoFocus" | "heading" | "components" | "onStackChange" | "shouldCloseOnEscapePress" | "onCloseComplete" | "onOpenComplete" | "shouldCloseOnOverlayClick">, "isOpen" | "stackIndex" | "isChromeless" | "scrollBehavior" | "width" | "isHeadingMultiline" | "onClose" | "autoFocus" | "shouldCloseOnEscapePress" | "shouldCloseOnOverlayClick">> & Partial<Pick<{
    autoFocus: boolean;
    scrollBehavior: "inside" | "outside";
    shouldCloseOnEscapePress: boolean;
    shouldCloseOnOverlayClick: boolean;
    isChromeless: boolean;
    isOpen: boolean;
    stackIndex: number;
    width: WidthNames;
    isHeadingMultiline: boolean;
    onClose: () => void;
}, never>> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "body" | "footer" | "header" | "children" | "isOpen" | "stackIndex" | "isChromeless" | "key" | "appearance" | "height" | "scrollBehavior" | "width" | "isHeadingMultiline" | "actions" | "onClose" | "testId" | "autoFocus" | "analyticsContext" | "heading" | "components" | "onStackChange" | "shouldCloseOnEscapePress" | "onCloseComplete" | "onOpenComplete" | "shouldCloseOnOverlayClick"> & React.RefAttributes<any>>;
export default _default;
