"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var pagination_1 = tslib_1.__importDefault(require("@atlaskit/pagination"));
var ManagedPagination = /** @class */ (function (_super) {
    tslib_1.__extends(ManagedPagination, _super);
    function ManagedPagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (_event, newValue, analyticsEvent) {
            _this.props.onChange(newValue, analyticsEvent);
        };
        return _this;
    }
    ManagedPagination.prototype.render = function () {
        var _a = this.props, total = _a.total, _b = _a.value, value = _b === void 0 ? 1 : _b, i18n = _a.i18n;
        var pages = tslib_1.__spread(Array(total)).map(function (_, index) { return index + 1; });
        // Pagination accepts array now thus selectedIndex starts with 0
        // So, we are substracting value by one thus not breaking dynamic table
        var selectedIndex = value - 1;
        return (react_1.default.createElement(pagination_1.default, { selectedIndex: selectedIndex, i18n: i18n, onChange: this.onChange, pages: pages }));
    };
    return ManagedPagination;
}(react_1.default.Component));
exports.default = ManagedPagination;
//# sourceMappingURL=managedPagination.js.map