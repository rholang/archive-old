import * as React from 'react';
import { Component } from 'react';
import { HelpContextInterface } from '../HelpContext';
export interface Props {
}
export interface State {
    skipArticleFadeInAnimation: boolean;
}
export declare class Article extends Component<Props & HelpContextInterface, State> {
    state: {
        article: import("../HelpContext").HistoryItem | undefined;
        skipArticleFadeInAnimation: boolean;
    };
    refArticleContainer: React.RefObject<HTMLDivElement>;
    constructor(props: Props & HelpContextInterface);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props & HelpContextInterface): void;
    onArticleEntered(): void;
    onArticleExited(): void;
    renderArticleContent(): JSX.Element | null;
    render(): JSX.Element;
}
declare const _default: (props: any) => JSX.Element;
export default _default;
