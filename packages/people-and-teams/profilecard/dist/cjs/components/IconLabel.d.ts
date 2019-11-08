import * as React from 'react';
declare type Props = {
    icon: string;
    children?: React.ReactNode;
};
export default class IconLabel extends React.PureComponent<Props> {
    static defaultProps: {
        icon: string;
    };
    render(): JSX.Element | null;
}
export {};
