"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = require("styled-components");
var item_1 = require("@atlaskit/item");
var constants_1 = require("@atlaskit/theme/constants");
var react_intl_1 = require("react-intl");
var messages_1 = require("../../../messages");
var RelatedArticlesList_1 = tslib_1.__importDefault(require("./RelatedArticlesList"));
var ShowMoreArticlesButton_1 = tslib_1.__importDefault(require("./ShowMoreArticlesButton"));
var styled_1 = require("./styled");
var ITEM_THEME = {
    padding: {
        default: {
            bottom: constants_1.gridSize(),
            left: constants_1.gridSize(),
            top: constants_1.gridSize(),
            right: constants_1.gridSize(),
        },
    },
};
var MAX_ITEMS_TO_DISPLAY_TOGGLED_ON = 3;
var MAX_ITEMS_TO_DISPLAY_TOGGLED_OFF = 5;
var RelatedArticlesContent = /** @class */ (function (_super) {
    tslib_1.__extends(RelatedArticlesContent, _super);
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
            relatedArticles.length > 0 && (React.createElement(styled_1.RelatedArticlesContainer, null,
            React.createElement(styled_components_1.ThemeProvider, { theme: (_a = {}, _a[item_1.itemThemeNamespace] = ITEM_THEME, _a) },
                React.createElement(React.Fragment, null,
                    React.createElement(styled_1.ItemGroupTitle, null, formatMessage(messages_1.messages.help_panel_related_article_title)),
                    React.createElement(RelatedArticlesList_1.default, { onRelatedArticlesListItemClick: onRelatedArticlesListItemClick, relatedArticles: relatedArticles, numberOfArticlesToDisplay: this.getNumberOfArticlesToDisplay(this.state.showMoreToggled) }),
                    relatedArticles.length > MAX_ITEMS_TO_DISPLAY_TOGGLED_ON && (React.createElement(ShowMoreArticlesButton_1.default, { toggleRelatedArticles: this.toggleRelatedArticles, showMoreToggeled: this.state.showMoreToggled })))))));
    };
    return RelatedArticlesContent;
}(React.Component));
exports.RelatedArticlesContent = RelatedArticlesContent;
exports.default = react_intl_1.injectIntl(RelatedArticlesContent);
//# sourceMappingURL=RelatedArticlesContent.js.map