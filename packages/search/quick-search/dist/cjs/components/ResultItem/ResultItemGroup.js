"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var item_1 = require("@atlaskit/item");
var styled_1 = require("./styled");
var ResultItemGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ResultItemGroup, _super);
    function ResultItemGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultItemGroup.prototype.render = function () {
        var _a = this.props, title = _a.title, children = _a.children;
        var wrappedTitle = (React.createElement(styled_1.ResultItemGroupHeader, null,
            React.createElement(styled_1.ResultItemGroupTitle, null, title)));
        return React.createElement(item_1.ItemGroup, { title: wrappedTitle }, children);
    };
    return ResultItemGroup;
}(React.Component));
exports.default = ResultItemGroup;
//# sourceMappingURL=ResultItemGroup.js.map