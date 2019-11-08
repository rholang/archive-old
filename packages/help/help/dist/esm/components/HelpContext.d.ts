import React from 'react';
import { CreateUIAnalyticsEvent, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { Article, ArticleItem, ArticleFeedback } from '../model/Article';
import { REQUEST_STATE } from '../model/Requests';
import { VIEW } from './constants';
export interface HistoryItem {
    uid: number;
    id: string;
    state: REQUEST_STATE;
    article?: Article;
}
export interface Props {
    articleId?: string;
    articleIdSetter?(id: string): void;
    onGetArticle?(id: string): Promise<Article>;
    onSearch?(value: string): Promise<ArticleItem[]>;
    onButtonCloseClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
    onWasHelpfulSubmit?(value: ArticleFeedback, analyticsEvent?: UIAnalyticsEvent): Promise<boolean>;
    onWasHelpfulYesButtonClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
    onWasHelpfulNoButtonClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
    defaultContent?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
export interface State {
    view: VIEW;
    footer?: React.ReactNode;
    defaultContent?: React.ReactNode;
    articleId: string;
    history: HistoryItem[];
    hasNavigatedToDefaultContent: boolean;
    searchValue: string;
    searchResult: ArticleItem[];
    searchState: REQUEST_STATE;
}
export interface HelpContextInterface {
    help: {
        view: VIEW;
        isBackbuttonVisible(): boolean;
        isDefaultContent(): boolean;
        isFooter(): boolean;
        isSearchVisible(): boolean;
        loadArticle(id?: string): void;
        isArticleVisible(): boolean;
        getCurrentArticle(): HistoryItem | undefined;
        articleIdSetter?(id: string): void;
        onButtonCloseClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
        onWasHelpfulYesButtonClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
        onWasHelpfulNoButtonClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
        history: HistoryItem[];
        footer?: React.ReactNode;
        defaultContent?: React.ReactNode;
        navigateBack(): void;
        onWasHelpfulSubmit?(value: ArticleFeedback, analyticsEvent?: UIAnalyticsEvent): Promise<boolean>;
        onSearch(value: string): void;
        searchResult: ArticleItem[];
        searchState: REQUEST_STATE;
        searchValue: string;
        articleId?: string;
    };
}
export declare const HelpContextProvider: React.ForwardRefExoticComponent<Pick<Props & {
    createAnalyticsEvent?: CreateUIAnalyticsEvent | undefined;
}, "children" | "articleId" | "articleIdSetter" | "onGetArticle" | "onSearch" | "onButtonCloseClick" | "onWasHelpfulSubmit" | "onWasHelpfulYesButtonClick" | "onWasHelpfulNoButtonClick" | "defaultContent" | "footer"> & React.RefAttributes<any>>;
export declare const HelpContextConsumer: React.ExoticComponent<React.ConsumerProps<Partial<HelpContextInterface>>>;
export declare const withHelp: <P extends Object>(WrappedComponent: React.ComponentType<P>) => (props: any) => JSX.Element;
