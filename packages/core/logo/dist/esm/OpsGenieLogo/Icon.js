import { __assign, __extends } from "tslib";
/* eslint-disable max-len */
import React, { Component } from 'react';
import { uid } from 'react-uid';
import { DefaultProps } from '../constants';
import Wrapper from '../Wrapper';
var svg = function (iconGradientStart, iconGradientStop) {
    var id = uid({ iconGradientStart: iconGradientStop });
    return "<canvas height=\"32\" width=\"32\" aria-hidden=\"true\"></canvas>\n  <svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient id=\"" + id + "-1\" x1=\"50%\" x2=\"50%\" y1=\"0%\" y2=\"100%\">\n        <stop\n          offset=\"0%\"\n          stop-color=\"" + iconGradientStop + "\"\n        />\n        <stop\n          offset=\"82%\"\n          stop-color=\"" + iconGradientStart + "\"\n          " + (iconGradientStart === 'inherit' ? 'stop-opacity="0.4"' : '') + "\n        />\n      </linearGradient>\n      <linearGradient id=\"" + id + "-2\" x1=\"7.133%\" x2=\"50%\" y1=\"13.352%\" y2=\"58.228%\">\n        <stop\n          offset=\"0%\"\n          stop-color=\"" + iconGradientStop + "\"\n        />\n        <stop\n          offset=\"100%\"\n          stop-color=\"" + iconGradientStart + "\"\n          " + (iconGradientStart === 'inherit' ? 'stop-opacity="0.4"' : '') + "\n        />\n      </linearGradient>\n    </defs>\n    <g fill=\"none\" fill-rule=\"evenodd\">\n      <circle cx=\"16\" cy=\"10\" r=\"6\" fill=\"url(#" + id + "-1)\" fill-rule=\"nonzero\"/>\n      <path fill=\"url(#" + id + "-2)\" fill-rule=\"nonzero\" d=\"M15.4917902,27.8535048 C11.5895108,25.3649677 8.34369777,21.9735337 6.02870456,17.9658651 C5.84991535,17.6419027 5.96743197,17.2343451 6.2912577,17.0553085 L6.31918889,17.0553085 L10.8440409,14.8208136 C11.1613558,14.6649408 11.5451782,14.7822878 11.7210802,15.088953 C14.0054511,18.9171632 17.3801037,21.9767185 21.4132015,23.876104 C19.9238268,25.3786979 18.2733698,26.7125519 16.4917267,27.8535048 C16.1850328,28.0418894 15.7984841,28.0418894 15.4917902,27.8535048 Z\"/>\n      <path fill=\"currentColor\" fill-rule=\"nonzero\" d=\"M16.5084854,27.8535048 C20.4118869,25.3663345 23.6579925,21.9745949 25.971571,17.9658651 C26.1485439,17.6413306 26.0345395,17.23488 25.7146041,17.0497222 L25.6810867,17.0497222 L21.1506484,14.8152274 C20.834975,14.6599316 20.4529644,14.7774733 20.2791954,15.0833668 C17.9924232,18.9191667 14.6087636,21.9817774 10.5647291,23.876104 C12.0560656,25.3787865 13.7083825,26.7126296 15.4917902,27.8535048 C15.802544,28.0488317 16.1977316,28.0488317 16.5084854,27.8535048 Z\"/>\n    </g>\n  </svg>";
};
var OpsGenieIcon = /** @class */ (function (_super) {
    __extends(OpsGenieIcon, _super);
    function OpsGenieIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpsGenieIcon.prototype.render = function () {
        return React.createElement(Wrapper, __assign({}, this.props, { svg: svg }));
    };
    OpsGenieIcon.defaultProps = DefaultProps;
    return OpsGenieIcon;
}(Component));
export default OpsGenieIcon;
//# sourceMappingURL=Icon.js.map