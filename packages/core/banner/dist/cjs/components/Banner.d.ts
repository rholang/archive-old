import React from 'react';
interface Props {
    appearance?: 'warning' | 'error' | 'announcement';
    /** Visual style to be used for the banner */
    /** Content to be shown next to the icon. Typically text content but can contain links. */
    children?: React.ReactNode;
    /** Icon to be shown left of the main content. Typically an Atlaskit [@atlaskit/icon](packages/core/icon) */
    icon?: React.ReactChild;
    /** Defines whether the banner is shown. An animation is used when the value is changed. */
    isOpen?: boolean;
    /** Returns the inner ref of the component. This is exposed so the height can be used in page. */
    innerRef?: (element: HTMLElement) => void;
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
    testId?: string;
}
declare class Banner extends React.Component<Props, {
    height: number;
}> {
    state: {
        height: number;
    };
    static defaultProps: {
        appearance: string;
        isOpen: boolean;
    };
    containerRef?: HTMLElement;
    getHeight: () => void;
    innerRef: (ref: HTMLElement) => void;
    render(): JSX.Element;
}
export default Banner;
