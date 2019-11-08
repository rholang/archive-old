import { __extends } from "tslib";
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { itemThemeNamespace } from '@atlaskit/item';
import { gridSize } from '@atlaskit/theme/constants';
import { injectIntl } from 'react-intl';
import { messages } from '../../../messages';
import RelatedArticlesList from './RelatedArticlesList';
import ShowMoreArticlesButton from './ShowMoreArticlesButton';
import { ItemGroupTitle, RelatedArticlesContainer } from './styled';
var ITEM_THEME = {
    padding: {
        default: {
            bottom: gridSize(),
            left: gridSize(),
            top: gridSize(),
            right: gridSize(),
        },
    },
};
var MAX_ITEMS_TO_DISPLAY_TOGGLED_ON = 3;
var MAX_ITEMS_TO_DISPLAY_TOGGLED_OFF = 5;
var RelatedArticlesContent = /** @class */ (function (_super) {
    __extends(RelatedArticlesContent, _super);
    function RelatedArticlesContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showMoreToggled: true,
        };
        _this.getNumberOfArticlesToDisplay = function (showMoreToggeled) {
            return showMoreToggeled
                ? MAX_ITEMS_TO_DISPLAY_TOGGLED_ON
                : MAX_ITEMS_TO_DISPLAY_TOGGLED_OFF;
        };
        _this.toggleRelatedArticles = function () {
            _this.setState({ showMoreToggled: !_this.state.showMoreToggled });
        };
        return _this;
    }
    RelatedArticlesContent.prototype.render = function () {
        var _a;
        var _b = this.props, formatMessage = _b.intl.formatMessage, relatedArticles = _b.relatedArticles, onRelatedArticlesListItemClick = _b.onRelatedArticlesListItemClick;
        // if there are related articles, display list of related articles
        return (relatedArticles &&
            relatedArticles.length > 0 && (React.createElement(RelatedArticlesContainer, null,
            React.createElement(ThemeProvider, { theme: (_a = {}, _a[itemThemeNamespace] = ITEM_THEME, _a) },
                React.createElement(React.Fragment, null,
                    React.createElement(ItemGroupTitle, null, formatMessage(messages.help_panel_related_article_title)),
                    React.createElement(RelatedArticlesList, { onRelatedArticlesListItemClick: onRelatedArticlesListItemClick, relatedArticles: relatedArticles, numberOfArticlesToDisplay: this.getNumberOfArticlesToDisplay(this.state.showMoreToggled) }),
                    relatedArticles.length > MAX_ITEMS_TO_DISPLAY_TOGGLED_ON && (React.createElement(ShowMoreArticlesButton, { toggleRelatedArticles: this.toggleRelatedArticles, showMoreToggeled: this.state.showMoreToggled })))))));
    };
    return RelatedArticlesContent;
}(React.Component));
export { RelatedArticlesContent };
export default injectIntl(RelatedArticlesContent);
//# sourceMappingURL=RelatedArticlesContent.js.map