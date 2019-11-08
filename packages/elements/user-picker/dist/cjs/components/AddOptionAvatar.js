"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var invite_team_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/invite-team"));
var theme_1 = require("@atlaskit/theme");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var AddOptionAvatarWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: black;\n  padding: 2px;\n\n  > span[class^='Icon__IconWrapper'] {\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"], ["\n  color: black;\n  padding: 2px;\n\n  > span[class^='Icon__IconWrapper'] {\n    background-color: ", ";\n    border-radius: 50%;\n  }\n"])), theme_1.colors.N50);
exports.AddOptionAvatar = function (_a) {
    var size = _a.size, label = _a.label;
    return (React.createElement(AddOptionAvatarWrapper, null,
        React.createElement(invite_team_1.default, { label: label, size: size, primaryColor: "white" })));
};
exports.AddOptionAvatar.defaultProps = {
    size: 'large',
};
var templateObject_1;
//# sourceMappingURL=AddOptionAvatar.js.map