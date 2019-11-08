"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var theme_1 = require("../theme");
var styled_1 = require("./styled");
var SectionMessage = /** @class */ (function (_super) {
    tslib_1.__extends(SectionMessage, _super);
    function SectionMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderAction = function (action, linkComponent) {
            var href = action.href, key = action.key, onClick = action.onClick, text = action.text, testId = action.testId;
            return (react_1.default.createElement(styled_1.Action, { key: key, "data-testid": testId }, onClick || href ? (react_1.default.createElement(button_1.default, { appearance: "link", spacing: "none", onClick: onClick, href: href, component: linkComponent }, text)) : (text)));
        };
        return _this;
    }
    SectionMessage.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, title = _a.title, actions = _a.actions, appearance = _a.appearance, icon = _a.icon, linkComponent = _a.linkComponent, testId = _a.testId;
        //needs typecasting because TS is not recognising default props :(
        var appearanceObj = theme_1.baseAppearanceObj[appearance] || theme_1.baseAppearanceObj.info;
        var Icon = icon || appearanceObj.Icon;
        return (react_1.default.createElement(styled_1.Container, { backgroundColor: appearanceObj.backgroundColor, "data-testid": testId },
            react_1.default.createElement(styled_1.IconWrapper, null,
                react_1.default.createElement(Icon, { primaryColor: appearanceObj.primaryIconColor, secondaryColor: appearanceObj.backgroundColor })),
            react_1.default.createElement(styled_1.ContentContainer, null,
                title ? react_1.default.createElement(styled_1.Title, null, title) : null,
                children ? react_1.default.createElement(styled_1.Description, null, children) : null,
                actions && actions.length ? (react_1.default.createElement(styled_1.Actions, null, actions.map(function (action) { return _this.renderAction(action, linkComponent); }))) : null)));
    };
    SectionMessage.defaultProps = {
        appearance: 'info',
    };
    return SectionMessage;
}(react_1.default.Component));
exports.default = SectionMessage;
//# sourceMappingURL=SectionMessage.js.map