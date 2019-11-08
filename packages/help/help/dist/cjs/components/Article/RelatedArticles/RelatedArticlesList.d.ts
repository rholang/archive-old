import * as React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ArticleItem } from '../../../model/Article';
declare type Props = {
    relatedArticles?: ArticleItem[];
    numberOfArticlesToDisplay?: number;
    onRelatedArticlesListItemClick?: (id: string, analyticsEvent: UIAnalyticsEvent) => void;
};
declare const RelatedArticlesList: React.SFC<Props>;
export default RelatedArticlesList;
