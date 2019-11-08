import * as React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { InjectedIntlProps } from 'react-intl';
import { ArticleItem } from '../../../model/Article';
interface Props {
    relatedArticles?: ArticleItem[];
    onRelatedArticlesListItemClick?: (id: string, analyticsEvent: UIAnalyticsEvent) => void;
}
interface State {
    showMoreToggled: boolean;
}
export declare class RelatedArticlesContent extends React.Component<Props & InjectedIntlProps, State> {
    state: {
        showMoreToggled: boolean;
    };
    getNumberOfArticlesToDisplay: (showMoreToggeled: boolean) => 3 | 5;
    toggleRelatedArticles: () => void;
    render(): false | JSX.Element | undefined;
}
declare const _default: React.ComponentClass<Props, any> & {
    WrappedComponent: ReactIntl.ComponentConstructor<Props & InjectedIntlProps>;
};
export default _default;
