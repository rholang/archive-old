"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var BreadcrumbsStateless_1 = tslib_1.__importDefault(require("./BreadcrumbsStateless"));
var Breadcrumbs = /** @class */ (function (_super) {
    tslib_1.__extends(Breadcrumbs, _super);
    function Breadcrumbs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isExpanded: false };
        _this.expand = function () { return _this.setState({ isExpanded: true }); };
        return _this;
    }
    Breadcrumbs.prototype.render = function () {
        return (react_1.default.createElement(BreadcrumbsStateless_1.default, tslib_1.__assign({}, this.props, { isExpanded: this.state.isExpanded, onExpand: this.expand })));
    };
    return Breadcrumbs;
}(react_1.default.Component));
exports.default = Breadcrumbs;
//# sourceMappingURL=Breadcrumbs.js.map