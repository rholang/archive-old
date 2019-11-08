"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var FieldStyles_1 = require("../styled/FieldStyles");
var CommentField = /** @class */ (function (_super) {
    tslib_1.__extends(CommentField, _super);
    function CommentField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommentField.prototype.render = function () {
        var _a = this.props, children = _a.children, hasAuthor = _a.hasAuthor, href = _a.href, onClick = _a.onClick, onFocus = _a.onFocus, onMouseOver = _a.onMouseOver;
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        return href ? (react_1.default.createElement(FieldStyles_1.Anchor, { href: href, hasAuthor: hasAuthor, onClick: onClick, onFocus: onFocus, onMouseOver: onMouseOver }, children)) : (react_1.default.createElement(FieldStyles_1.Span, { hasAuthor: hasAuthor, onClick: onClick, onFocus: onFocus, onMouseOver: onMouseOver }, children));
        /* eslint-enable jsx-a11y/no-static-element-interactions */
    };
    return CommentField;
}(react_1.Component));
exports.default = CommentField;
//# sourceMappingURL=Field.js.map