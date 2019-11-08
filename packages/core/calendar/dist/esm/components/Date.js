import { __extends } from "tslib";
import React, { Component } from 'react';
import { DateDiv, DateTd } from '../styled/Date';
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isActive: false,
        };
        _this.onMouseDown = function (e) {
            // Prevent mousedown triggering an ancestor onBlur event in IE11 resulting
            // in dates not being selectable.
            e.preventDefault();
            _this.setState({ isActive: true });
        };
        _this.onMouseUp = function () {
            _this.setState({ isActive: false });
        };
        _this.onClick = function () {
            var _a = _this.props, day = _a.children, month = _a.month, onClick = _a.onClick, year = _a.year, disabled = _a.disabled;
            if (!disabled && onClick) {
                onClick({ year: year, month: month, day: day });
            }
        };
        return _this;
    }
    default_1.prototype.render = function () {
        var _a = this.props, children = _a.children, disabled = _a.disabled, focused = _a.focused, isToday = _a.isToday, previouslySelected = _a.previouslySelected, selected = _a.selected, sibling = _a.sibling, testId = _a.testId;
        return (React.createElement(DateTd, { "aria-selected": selected ? 'true' : 'false', role: "gridcell", onClick: this.onClick, onMouseDown: this.onMouseDown, onMouseUp: this.onMouseUp, "data-testid": testId && selected ? testId + "--selected-day" : undefined },
            React.createElement(DateDiv, { disabled: disabled, focused: focused, isToday: isToday, previouslySelected: previouslySelected, selected: selected, sibling: sibling, isActive: this.state.isActive }, children)));
    };
    default_1.defaultProps = {
        disabled: false,
        focused: false,
        isToday: false,
        onClick: function () { },
        previouslySelected: false,
        selected: false,
        sibling: false,
        today: '',
    };
    return default_1;
}(Component));
export default default_1;
//# sourceMappingURL=Date.js.map