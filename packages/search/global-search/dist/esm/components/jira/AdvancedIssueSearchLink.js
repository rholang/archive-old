import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { ResultBase } from '@atlaskit/quick-search';
import { gridSize } from '@atlaskit/theme';
import SearchIcon from '@atlaskit/icon/glyph/search';
import styled from 'styled-components';
import { messages } from '../../messages';
import Return from '../../assets/Return';
import { AnalyticsType } from '../../model/Result';
var Wrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: ", "px 0;\n"], ["\n  padding: ", "px 0;\n"])), gridSize());
var AdvancedIssueSearchLink = /** @class */ (function (_super) {
    __extends(AdvancedIssueSearchLink, _super);
    function AdvancedIssueSearchLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedIssueSearchLink.prototype.render = function () {
        return (React.createElement(Wrapper, null,
            React.createElement(ResultBase, { href: "/issues", resultId: "jira-advanced-issue-search", text: React.createElement(FormattedMessage, __assign({}, messages.jira_advanced_issue_search)), icon: React.createElement(SearchIcon, { size: "medium", label: "Advanced search" }), type: AnalyticsType.TopLinkPreQueryAdvancedSearchJira, elemAfter: React.createElement(Return, null), key: "advanced-search-link", onClick: this.props.onClick })));
    };
    return AdvancedIssueSearchLink;
}(React.Component));
export default AdvancedIssueSearchLink;
var templateObject_1;
//# sourceMappingURL=AdvancedIssueSearchLink.js.map