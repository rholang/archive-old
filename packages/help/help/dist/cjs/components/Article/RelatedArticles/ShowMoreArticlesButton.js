"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var messages_1 = require("../../../messages");
var styled_1 = require("./styled");
var ShowMoreArticlesButton = /** @class */ (function (_super) {
    tslib_1.__extends(ShowMoreArticlesButton, _super);
    function ShowMoreArticlesButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowMoreArticlesButton.prototype.render = function () {
        var _a = this.props, formatMessage = _a.intl.formatMessage, showMoreToggeled = _a.showMoreToggeled, toggleRelatedArticles = _a.toggleRelatedArticles;
        if (showMoreToggeled) {
            return (React.createElement(styled_1.ToggleShowMoreArticles, { onClick: toggleRelatedArticles }, formatMessage(messages_1.messages.help_panel_related_article_show_more)));
        }
        else {
            return (React.createElement(styled_1.ToggleShowMoreArticles, { onClick: toggleRelatedArticles }, formatMessage(messages_1.messages.help_panel_related_article_show_less)));
        }
    };
    return ShowMoreArticlesButton;
}(React.Component));
exports.ShowMoreArticlesButton = ShowMoreArticlesButton;
exports.default = react_intl_1.injectIntl(ShowMoreArticlesButton);
//# sourceMappingURL=ShowMoreArticlesButton.js.map