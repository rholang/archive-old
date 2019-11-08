"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var LazyContent = /** @class */ (function (_super) {
    tslib_1.__extends(LazyContent, _super);
    function LazyContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LazyContent.prototype.render = function () {
        var _a = this.props, children = _a.children, placeholder = _a.placeholder, onRender = _a.onRender;
        return (React.createElement(styled_1.Wrapper, { offset: 300, onRender: onRender, placeholder: placeholder, content: children }));
    };
    return LazyContent;
}(React.Component));
exports.LazyContent = LazyContent;
//# sourceMappingURL=index.js.map