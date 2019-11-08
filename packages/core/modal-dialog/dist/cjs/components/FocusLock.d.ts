import React from 'react';
interface Props {
    /**
      Boolean indicating whether to focus on the first tabbable element inside the focus lock.
    */
    autoFocus: boolean | (() => HTMLElement | null);
    /**
      Content inside the focus lock.
    */
    children?: React.ReactNode;
    /**
      Whether the focus lock is active or not.
    */
    isEnabled: boolean;
    /**
      Whether to return the focus to the previous active element.
    */
    shouldReturnFocus: boolean;
}
export default class FocusLock extends React.Component<Props> {
    static defaultProps: {
        autoFocus: boolean;
        isEnabled: boolean;
        shouldReturnFocus: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
