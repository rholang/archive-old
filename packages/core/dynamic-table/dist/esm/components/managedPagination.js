import { __extends, __read, __spread } from "tslib";
import React from 'react';
import Pagination from '@atlaskit/pagination';
var ManagedPagination = /** @class */ (function (_super) {
    __extends(ManagedPagination, _super);
    function ManagedPagination() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onChange = function (_event, newValue, analyticsEvent) {
            _this.props.onChange(newValue, analyticsEvent);
        };
        return _this;
    }
    ManagedPagination.prototype.render = function () {
        var _a = this.props, total = _a.total, _b = _a.value, value = _b === void 0 ? 1 : _b, i18n = _a.i18n;
        var pages = __spread(Array(total)).map(function (_, index) { return index + 1; });
        // Pagination accepts array now thus selectedIndex starts with 0
        // So, we are substracting value by one thus not breaking dynamic table
        var selectedIndex = value - 1;
        return (React.createElement(Pagination, { selectedIndex: selectedIndex, i18n: i18n, onChange: this.onChange, pages: pages }));
    };
    return ManagedPagination;
}(React.Component));
export default ManagedPagination;
//# sourceMappingURL=managedPagination.js.map