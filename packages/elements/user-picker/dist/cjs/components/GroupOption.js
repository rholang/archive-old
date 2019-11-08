"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var people_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/people"));
var AvatarItemOption_1 = require("./AvatarItemOption");
var i18n_1 = require("./i18n");
var HighlightText_1 = require("./HighlightText");
exports.GroupOptionIconWrapper = styled_components_1.default.span(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  padding: 2px;\n\n  > span {\n    background-color: ", ";\n    border-radius: 50%;\n    padding: 4px;\n  }\n"], ["\n  padding: 2px;\n\n  > span {\n    background-color: ", ";\n    border-radius: 50%;\n    padding: 4px;\n  }\n"])), theme_1.colors.N20);
var GroupOption = /** @class */ (function (_super) {
    tslib_1.__extends(GroupOption, _super);
    function GroupOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getPrimaryText = function () {
            var _a = _this.props, isSelected = _a.isSelected, _b = _a.group, name = _b.name, highlight = _b.highlight;
            return [
                React.createElement(AvatarItemOption_1.TextWrapper, { key: "name", color: isSelected ? theme_1.colors.N0 : theme_1.colors.N800 },
                    React.createElement(HighlightText_1.HighlightText, { highlights: highlight && highlight.name }, name)),
            ];
        };
        _this.renderAvatar = function () { return (React.createElement(exports.GroupOptionIconWrapper, null,
            React.createElement(people_1.default, { label: "group-icon", size: "medium" }))); };
        _this.renderByline = function () {
            var isSelected = _this.props.isSelected;
            return (React.createElement(AvatarItemOption_1.TextWrapper, { color: isSelected ? theme_1.colors.N50 : theme_1.colors.N200 },
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.groupByline))));
        };
        return _this;
    }
    GroupOption.prototype.render = function () {
        return (React.createElement(AvatarItemOption_1.AvatarItemOption, { avatar: this.renderAvatar(), secondaryText: this.renderByline(), primaryText: this.getPrimaryText() }));
    };
    return GroupOption;
}(React.PureComponent));
exports.GroupOption = GroupOption;
var templateObject_1;
//# sourceMappingURL=GroupOption.js.map