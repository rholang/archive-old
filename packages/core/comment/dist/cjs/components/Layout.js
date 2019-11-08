"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var LayoutStyles_1 = require("../styled/LayoutStyles");
var Layout = /** @class */ (function (_super) {
    tslib_1.__extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.renderAvatar = function () {
        var avatar = this.props.avatar;
        return avatar ? react_1.default.createElement(LayoutStyles_1.AvatarSectionDiv, null, avatar) : null;
    };
    Layout.prototype.renderNestedComments = function () {
        var children = this.props.children;
        return children ? react_1.default.createElement(LayoutStyles_1.NestedCommentsDiv, null, children) : null;
    };
    Layout.prototype.render = function () {
        var _a = this.props, content = _a.content, highlighted = _a.highlighted, id = _a.id;
        return (react_1.default.createElement(LayoutStyles_1.Container, { id: id },
            this.renderAvatar(),
            react_1.default.createElement(LayoutStyles_1.ContentSectionDiv, null, content),
            this.renderNestedComments(),
            highlighted && react_1.default.createElement(LayoutStyles_1.Highlight, null)));
    };
    return Layout;
}(react_1.Component));
exports.default = Layout;
//# sourceMappingURL=Layout.js.map