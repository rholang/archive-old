"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var select_1 = require("@atlaskit/select");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var ClearIndicator = /** @class */ (function (_super) {
    tslib_1.__extends(ClearIndicator, _super);
    function ClearIndicator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleMouseDown = function (event) {
            if (event && event.type === 'mousedown' && event.button !== 0) {
                return;
            }
            _this.props.clearValue();
            // Prevent focus when clear on blurred state
            var selectProps = _this.props.selectProps;
            if (selectProps && !selectProps.isFocused) {
                event.stopPropagation();
            }
        };
        return _this;
    }
    ClearIndicator.prototype.render = function () {
        var clearValueLabel = this.props.selectProps.clearValueLabel;
        return (React.createElement(tooltip_1.default, { content: clearValueLabel },
            React.createElement(select_1.components.ClearIndicator, tslib_1.__assign({}, this.props, { innerProps: tslib_1.__assign(tslib_1.__assign({}, this.props.innerProps), { onMouseDown: this.handleMouseDown }) }))));
    };
    return ClearIndicator;
}(React.PureComponent));
exports.ClearIndicator = ClearIndicator;
//# sourceMappingURL=ClearIndicator.js.map