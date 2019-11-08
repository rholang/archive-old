import { __assign, __extends } from "tslib";
/* eslint-disable max-len */
import React, { Component } from 'react';
import { uid } from 'react-uid';
import { DefaultProps } from '../constants';
import Wrapper from '../Wrapper';
var svg = function (iconGradientStart, iconGradientStop) {
    var id = uid({ iconGradientStart: iconGradientStop });
    return "<canvas height=\"32\" width=\"32\" aria-hidden=\"true\"></canvas>\n  <svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient x1=\"26.51%\" y1=\"20.831%\" y2=\"63.912%\" id=\"" + id + "\">\n        <stop stop-color=\"" + iconGradientStart + "\" " + (iconGradientStart === 'inherit' ? 'stop-opacity="0.4"' : '') + " offset=\"17%\"></stop>\n        <stop stop-color=\"" + iconGradientStop + "\" offset=\"100%\"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"nonzero\">\n      <path d=\"M15.52,20.5269517 C15.52,25.2103264 19.3166253,29.0069517 24,29.0069517 L24,12.11 L15.52,17.9183271 L15.52,20.5269517 Z\" fill=\"url(#" + id + ")\"></path>\n      <path d=\"M23.9969697,12.1078788 L23.9969697,4.26454545 C23.9961315,3.79791901 23.7375983,3.36992522 23.3249582,3.15205124 C22.912318,2.93417725 22.4130783,2.9620669 22.0272727,3.22454545 L2.35,16.6578788 C4.98320643,20.5274016 10.2540962,21.5307928 14.1248485,18.8993939 L23.9969697,12.1078788 Z\" fill=\"currentColor\"></path>\n    </g>\n  </svg>";
};
var JiraCoreIcon = /** @class */ (function (_super) {
    __extends(JiraCoreIcon, _super);
    function JiraCoreIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JiraCoreIcon.prototype.render = function () {
        return React.createElement(Wrapper, __assign({}, this.props, { svg: svg }));
    };
    JiraCoreIcon.defaultProps = DefaultProps;
    return JiraCoreIcon;
}(Component));
export default JiraCoreIcon;
//# sourceMappingURL=Icon.js.map