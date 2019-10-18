import * as React from 'react';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
import { ThemeProvider } from 'styled-components';
import { itemThemeNamespace } from '@atlaskit/item';
import { gridSize } from '@atlaskit/theme/constants';
import { injectIntl, InjectedIntlProps } from 'react-intl';

import { messages } from '../../../messages';
import { ArticleItem } from '../../../model/Article';

import RelatedArticlesList from './RelatedArticlesList';
import ShowMoreArticlesButton from './ShowMoreArticlesButton';
import { ItemGroupTitle, RelatedArticlesContainer } from './styled';

const ITEM_THEME = {
  padding: {
    default: {
      bottom: gridSize(),
      left: gridSize(),
      top: gridSize(),
      right: gridSize(),
    },
  },
};

const MAX_ITEMS_TO_DISPLAY_TOGGLED_ON = 3;
const MAX_ITEMS_TO_DISPLAY_TOGGLED_OFF = 5;

interface Props {
  /* List of related articles. This prop is optional */
  relatedArticles?: ArticleItem[];
  /* Function executed when the user clicks one of the related articles */
  onRelatedArticlesListItemClick?: (
    id: string,
    analyticsEvent: UIAnalyticsEvent,
  ) => void;
}

interface State {
  showMoreToggled: boolean;
}

export class RelatedArticlesContent extends React.Component<
  Props & InjectedIntlProps,
  State
> {
  state = {
    showMoreToggled: true,
  };

  getNumberOfArticlesToDisplay = (showMoreToggeled: boolean) => {
    return showMoreToggeled
      ? MAX_ITEMS_TO_DISPLAY_TOGGLED_ON
      : MAX_ITEMS_TO_DISPLAY_TOGGLED_OFF;
  };

  toggleRelatedArticles = () => {
    this.setState({ showMoreToggled: !this.state.showMoreToggled });
  };

  render() {
    const {
      intl: { formatMessage },
      relatedArticles,
      onRelatedArticlesListItemClick,
    } = this.props;

    // if there are related articles, display list of related articles
    return (
      relatedArticles &&
      relatedArticles.length > 0 && (
        <RelatedArticlesContainer>
          <ThemeProvider theme={{ [itemThemeNamespace]: ITEM_THEME }}>
            <>
              <ItemGroupTitle>
                {formatMessage(messages.help_panel_related_article_title)}
              </ItemGroupTitle>

              <RelatedArticlesList
                onRelatedArticlesListItemClick={onRelatedArticlesListItemClick}
                relatedArticles={relatedArticles}
                numberOfArticlesToDisplay={this.getNumberOfArticlesToDisplay(
                  this.state.showMoreToggled,
                )}
              />
              {relatedArticles.length > MAX_ITEMS_TO_DISPLAY_TOGGLED_ON && (
                <ShowMoreArticlesButton
                  toggleRelatedArticles={this.toggleRelatedArticles}
                  showMoreToggeled={this.state.showMoreToggled}
                />
              )}
            </>
          </ThemeProvider>
        </RelatedArticlesContainer>
      )
    );
  }
}

export default injectIntl(RelatedArticlesContent);
