import { __extends } from "tslib";
import React, { Component } from 'react';
import { AvatarSectionDiv, Container, ContentSectionDiv, Highlight, NestedCommentsDiv, } from '../styled/LayoutStyles';
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.renderAvatar = function () {
        var avatar = this.props.avatar;
        return avatar ? React.createElement(AvatarSectionDiv, null, avatar) : null;
    };
    Layout.prototype.renderNestedComments = function () {
        var children = this.props.children;
        return children ? React.createElement(NestedCommentsDiv, null, children) : null;
    };
    Layout.prototype.render = function () {
        var _a = this.props, content = _a.content, highlighted = _a.highlighted, id = _a.id;
        return (React.createElement(Container, { id: id },
            this.renderAvatar(),
            React.createElement(ContentSectionDiv, null, content),
            this.renderNestedComments(),
            highlighted && React.createElement(Highlight, null)));
    };
    return Layout;
}(Component));
export default Layout;
//# sourceMappingURL=Layout.js.map