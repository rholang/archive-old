"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var TagGroup = /** @class */ (function (_super) {
    tslib_1.__extends(TagGroup, _super);
    function TagGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagGroup.prototype.render = function () {
        var _a = this.props, alignment = _a.alignment, children = _a.children;
        return react_1.default.createElement(styled_1.Container, { justify: alignment }, children);
    };
    TagGroup.defaultProps = {
        alignment: 'start',
    };
    return TagGroup;
}(react_1.PureComponent));
exports.default = TagGroup;
//# sourceMappingURL=index.js.map