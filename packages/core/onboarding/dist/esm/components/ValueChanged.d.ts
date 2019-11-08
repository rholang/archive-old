import React, { ReactNode } from 'react';
interface Props {
    value: any;
    onChange: Function;
    children: ReactNode;
}
export default class ValueChanged extends React.Component<Props> {
    componentDidUpdate(prevProps: Props): void;
    render(): React.ReactNode;
}
export {};
