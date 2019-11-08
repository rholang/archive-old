import { Component, ReactNode } from 'react';
interface Props {
    banner?: ReactNode;
    navigation?: ReactNode;
    children?: ReactNode;
    isBannerOpen?: boolean;
    bannerHeight: number;
}
export default class Page extends Component<Props> {
    static displayName: string;
    static defaultProps: {
        isBannerOpen: boolean;
        bannerHeight: number;
    };
    render(): JSX.Element;
}
export {};
