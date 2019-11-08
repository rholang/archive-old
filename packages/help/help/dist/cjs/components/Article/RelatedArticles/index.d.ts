import * as React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ArticleItem } from '../../../model/Article';
interface Props {
    isLoading?: boolean;
    relatedArticles?: ArticleItem[];
    onRelatedArticlesListItemClick?: (id: string, analyticsEvent: UIAnalyticsEvent) => void;
}
declare const RelatedArticles: React.SFC<Props>;
export default RelatedArticles;
