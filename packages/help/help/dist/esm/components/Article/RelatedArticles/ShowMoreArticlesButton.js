import { __extends } from "tslib";
import * as React from 'react';
import { injectIntl } from 'react-intl';
import { messages } from '../../../messages';
import { ToggleShowMoreArticles } from './styled';
var ShowMoreArticlesButton = /** @class */ (function (_super) {
    __extends(ShowMoreArticlesButton, _super);
    function ShowMoreArticlesButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowMoreArticlesButton.prototype.render = function () {
        var _a = this.props, formatMessage = _a.intl.formatMessage, showMoreToggeled = _a.showMoreToggeled, toggleRelatedArticles = _a.toggleRelatedArticles;
        if (showMoreToggeled) {
            return (React.createElement(ToggleShowMoreArticles, { onClick: toggleRelatedArticles }, formatMessage(messages.help_panel_related_article_show_more)));
        }
        else {
            return (React.createElement(ToggleShowMoreArticles, { onClick: toggleRelatedArticles }, formatMessage(messages.help_panel_related_article_show_less)));
        }
    };
    return ShowMoreArticlesButton;
}(React.Component));
export { ShowMoreArticlesButton };
export default injectIntl(ShowMoreArticlesButton);
//# sourceMappingURL=ShowMoreArticlesButton.js.map