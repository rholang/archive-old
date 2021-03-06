import { __extends } from "tslib";
import React from 'react';
import Button from '@atlaskit/button';
import { baseAppearanceObj } from '../theme';
import { Container, ContentContainer, Title, Description, Actions, Action, IconWrapper, } from './styled';
var SectionMessage = /** @class */ (function (_super) {
    __extends(SectionMessage, _super);
    function SectionMessage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderAction = function (action, linkComponent) {
            var href = action.href, key = action.key, onClick = action.onClick, text = action.text, testId = action.testId;
            return (React.createElement(Action, { key: key, "data-testid": testId }, onClick || href ? (React.createElement(Button, { appearance: "link", spacing: "none", onClick: onClick, href: href, component: linkComponent }, text)) : (text)));
        };
        return _this;
    }
    SectionMessage.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, title = _a.title, actions = _a.actions, appearance = _a.appearance, icon = _a.icon, linkComponent = _a.linkComponent, testId = _a.testId;
        //needs typecasting because TS is not recognising default props :(
        var appearanceObj = baseAppearanceObj[appearance] || baseAppearanceObj.info;
        var Icon = icon || appearanceObj.Icon;
        return (React.createElement(Container, { backgroundColor: appearanceObj.backgroundColor, "data-testid": testId },
            React.createElement(IconWrapper, null,
                React.createElement(Icon, { primaryColor: appearanceObj.primaryIconColor, secondaryColor: appearanceObj.backgroundColor })),
            React.createElement(ContentContainer, null,
                title ? React.createElement(Title, null, title) : null,
                children ? React.createElement(Description, null, children) : null,
                actions && actions.length ? (React.createElement(Actions, null, actions.map(function (action) { return _this.renderAction(action, linkComponent); }))) : null)));
    };
    SectionMessage.defaultProps = {
        appearance: 'info',
    };
    return SectionMessage;
}(React.Component));
export default SectionMessage;
//# sourceMappingURL=SectionMessage.js.map