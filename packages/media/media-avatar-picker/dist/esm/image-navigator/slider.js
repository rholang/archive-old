import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import FieldRange from '@atlaskit/range';
import ScaleLargeIcon from '@atlaskit/icon/glyph/media-services/scale-large';
import ScaleSmallIcon from '@atlaskit/icon/glyph/media-services/scale-small';
import Button from '@atlaskit/button';
import { SliderWrapper } from './styled';
export var defaultProps = {
    value: 0,
};
var Slider = /** @class */ (function (_super) {
    __extends(Slider, _super);
    function Slider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Slider.prototype.render = function () {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        return (React.createElement(SliderWrapper, null,
            React.createElement(Button, { className: "zoom_button zoom_button_small", iconAfter: React.createElement(ScaleSmallIcon, { label: "scale-small-icon" }), onClick: function () { return onChange(0); } }),
            React.createElement(FieldRange, { value: value, onChange: onChange }),
            React.createElement(Button, { className: "zoom_button zoom_button_large", iconAfter: React.createElement(ScaleLargeIcon, { label: "scale-large-icon" }), onClick: function () { return onChange(100); } })));
    };
    Slider.defaultProps = defaultProps;
    return Slider;
}(Component));
export { Slider };
//# sourceMappingURL=slider.js.map