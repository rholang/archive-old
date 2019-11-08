"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var MultiLineLayout = /** @class */ (function (_super) {
    tslib_1.__extends(MultiLineLayout, _super);
    function MultiLineLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiLineLayout.prototype.render = function () {
        var _a = this.props, left = _a.left, middle = _a.middle, right = _a.right;
        return (React.createElement(styled_1.Wrapper, null,
            React.createElement(styled_1.Left, null, left),
            React.createElement(styled_1.Middle, null, middle),
            React.createElement(styled_1.Right, null, right)));
    };
    return MultiLineLayout;
}(React.Component));
exports.MultiLineLayout = MultiLineLayout;
//# sourceMappingURL=index.js.map