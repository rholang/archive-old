"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var range_1 = tslib_1.__importDefault(require("@atlaskit/range"));
var scale_large_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/scale-large"));
var scale_small_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/scale-small"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var styled_1 = require("./styled");
exports.defaultProps = {
    value: 0,
};
var Slider = /** @class */ (function (_super) {
    tslib_1.__extends(Slider, _super);
    function Slider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slider.prototype.render = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        return (React.createElement(styled_1.SliderWrapper, null,
            React.createElement(button_1.default, { className: "zoom_button zoom_button_small", iconAfter: React.createElement(scale_small_1.default, { label: "scale-small-icon" }), onClick: function () { return onChange(0); } }),
            React.createElement(range_1.default, { value: value, onChange: onChange }),
            React.createElement(button_1.default, { className: "zoom_button zoom_button_large", iconAfter: React.createElement(scale_large_1.default, { label: "scale-large-icon" }), onClick: function () { return onChange(100); } })));
    };
    Slider.defaultProps = exports.defaultProps;
    return Slider;
}(react_1.Component));
exports.Slider = Slider;
//# sourceMappingURL=slider.js.map