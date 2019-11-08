"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var ProgressTrackerLink = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressTrackerLink, _super);
    function ProgressTrackerLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressTrackerLink.prototype.render = function () {
        var _a = this.props.item, href = _a.href, onClick = _a.onClick, label = _a.label;
        return (react_1.default.createElement(styled_1.Link, { href: href, onClick: onClick }, label));
    };
    return ProgressTrackerLink;
}(react_1.PureComponent));
exports.default = ProgressTrackerLink;
//# sourceMappingURL=index.js.map