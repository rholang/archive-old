"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var board_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/board"));
var issue_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/issue"));
var filter_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/filter"));
var theme_1 = require("@atlaskit/theme");
var Result_1 = require("../model/Result");
var IconWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: ", "px;\n  height: ", "px;\n  align-items: center;\n  display: flex;\n"], ["\n  width: ", "px;\n  height: ", "px;\n  align-items: center;\n  display: flex;\n"])), (7 * theme_1.gridSize()) / 2, (7 * theme_1.gridSize()) / 2);
var getIconComponent = function (contentType) {
    switch (contentType) {
        case Result_1.ContentType.JiraIssue:
            return issue_1.default;
        case Result_1.ContentType.JiraBoard:
            return board_1.default;
        case Result_1.ContentType.JiraFilter:
            return filter_1.default;
        default:
            return null;
    }
};
exports.getDefaultAvatar = function (contentType) {
    var IconComponent = getIconComponent(contentType);
    return IconComponent ? (React.createElement(IconWrapper, null,
        React.createElement(IconComponent, { label: contentType || '', size: "medium" }))) : null;
};
var templateObject_1;
//# sourceMappingURL=jira-avatar-util.js.map