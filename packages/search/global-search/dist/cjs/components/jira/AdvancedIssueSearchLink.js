"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var quick_search_1 = require("@atlaskit/quick-search");
var theme_1 = require("@atlaskit/theme");
var search_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/search"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var messages_1 = require("../../messages");
var Return_1 = tslib_1.__importDefault(require("../../assets/Return"));
var Result_1 = require("../../model/Result");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: ", "px 0;\n"], ["\n  padding: ", "px 0;\n"])), theme_1.gridSize());
var AdvancedIssueSearchLink = /** @class */ (function (_super) {
    tslib_1.__extends(AdvancedIssueSearchLink, _super);
    function AdvancedIssueSearchLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedIssueSearchLink.prototype.render = function () {
        return (React.createElement(Wrapper, null,
            React.createElement(quick_search_1.ResultBase, { href: "/issues", resultId: "jira-advanced-issue-search", text: React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.jira_advanced_issue_search)), icon: React.createElement(search_1.default, { size: "medium", label: "Advanced search" }), type: Result_1.AnalyticsType.TopLinkPreQueryAdvancedSearchJira, elemAfter: React.createElement(Return_1.default, null), key: "advanced-search-link", onClick: this.props.onClick })));
    };
    return AdvancedIssueSearchLink;
}(React.Component));
exports.default = AdvancedIssueSearchLink;
var templateObject_1;
//# sourceMappingURL=AdvancedIssueSearchLink.js.map