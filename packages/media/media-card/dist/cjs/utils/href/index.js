"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var react_1 = require("react");
var styled_1 = require("./styled");
var Href = /** @class */ (function (_super) {
    tslib_1.__extends(Href, _super);
    function Href() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Href.prototype.render = function () {
        var _a = this.props, linkUrl = _a.linkUrl, underline = _a.underline, children = _a.children, className = _a.className, otherProps = tslib_1.__rest(_a, ["linkUrl", "underline", "children", "className"]);
        var classNames = classnames_1.default(className, { underline: underline });
        return (React.createElement(styled_1.A, tslib_1.__assign({}, otherProps, { href: linkUrl, className: classNames, target: "_blank", rel: "noopener" }), children));
    };
    return Href;
}(react_1.Component));
exports.Href = Href;
//# sourceMappingURL=index.js.map