import React from 'react';
interface IProps {
    hasSeparator?: boolean;
    onClick?: (event: React.MouseEvent) => any;
    /** A `testId` prop is provided for specified elements, which is a unique string that appears as a data attribute `data-testid` in the rendered code, serving as a hook for automated tests */
    testId?: string;
}
export default class EllipsisItem extends React.Component<IProps, {}> {
    static defaultProps: IProps;
    render(): JSX.Element;
}
export {};
