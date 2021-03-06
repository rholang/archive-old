import React from 'react';
interface Props {
    children: React.ReactNode;
    fit: boolean;
    onClick?: React.MouseEventHandler;
    testId?: string;
}
declare const _default: ({ fit, children, ...rest }: Props) => JSX.Element;
export default _default;
