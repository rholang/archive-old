import * as React from 'react';
import { WithAnalyticsEventsProps, UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { Article, ArticleItem, ArticleFeedback } from '../model/Article';
export interface Props extends WithAnalyticsEventsProps {
    articleId?: string;
    articleIdSetter?(id: string): void;
    onGetArticle?(id: string): Promise<Article>;
    onSearch?(value: string): Promise<ArticleItem[]>;
    onButtonCloseClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
    onWasHelpfulSubmit?(value: ArticleFeedback, analyticsEvent?: UIAnalyticsEvent): Promise<boolean>;
    onWasHelpfulYesButtonClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
    onWasHelpfulNoButtonClick?(event?: React.MouseEvent<HTMLElement, MouseEvent>, analyticsEvent?: UIAnalyticsEvent): void;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
export declare class Help extends React.Component<Props> {
    render(): JSX.Element;
}
declare const _default: React.ForwardRefExoticComponent<Pick<Pick<Props, "children" | "articleId" | "articleIdSetter" | "onGetArticle" | "onSearch" | "onButtonCloseClick" | "onWasHelpfulSubmit" | "onWasHelpfulYesButtonClick" | "onWasHelpfulNoButtonClick" | "footer"> & React.RefAttributes<any> & import("@atlaskit/analytics-next/dist/cjs/withAnalyticsContext").WithContextProps, "key" | "children" | "articleId" | "articleIdSetter" | "onGetArticle" | "onSearch" | "onButtonCloseClick" | "onWasHelpfulSubmit" | "onWasHelpfulYesButtonClick" | "onWasHelpfulNoButtonClick" | "footer" | "analyticsContext"> & React.RefAttributes<any>>;
export default _default;
