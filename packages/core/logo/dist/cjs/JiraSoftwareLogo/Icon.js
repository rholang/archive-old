"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* eslint-disable max-len */
var react_1 = tslib_1.__importStar(require("react"));
var react_uid_1 = require("react-uid");
var constants_1 = require("../constants");
var Wrapper_1 = tslib_1.__importDefault(require("../Wrapper"));
var svg = function (iconGradientStart, iconGradientStop) {
    var id = react_uid_1.uid({ iconGradientStart: iconGradientStop });
    return "<canvas height=\"32\" width=\"32\" aria-hidden=\"true\"></canvas>\n  <svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient x1=\"108.695%\" x2=\"12.439%\" y1=\"-14.936%\" y2=\"45.215%\" id=\"" + id + "-1\">\n        <stop stop-color=\"" + iconGradientStart + "\" " + (iconGradientStart === 'inherit' ? 'stop-opacity="0.4"' : '') + " offset=\"0%\"></stop>\n        <stop stop-color=\"" + iconGradientStop + "\" offset=\"100%\"></stop>\n      </linearGradient>\n      <linearGradient x1=\"0%\" x2=\"91.029%\" y1=\"118.55%\" y2=\"63.971%\" id=\"" + id + "-2\">\n        <stop stop-color=\"" + iconGradientStart + "\" " + (iconGradientStart === 'inherit' ? 'stop-opacity="0.4"' : '') + " offset=\"0%\"></stop>\n        <stop stop-color=\"" + iconGradientStop + "\" offset=\"100%\"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"nonzero\">\n      <path d=\"M15.9669691 29.3616152C17.2195568 28.1097726 17.9233158 26.4114623 17.9233158 24.6405626 17.9233158 22.8696629 17.2195568 21.1713527 15.9669691 19.91951L7.26805808 11.2489111 3.31143376 15.2055354C2.89743442 15.6200502 2.89743442 16.291565 3.31143376 16.7060799L15.9669691 29.3616152zM28.6225045 15.2055354L15.9669691 2.55 15.9280399 2.58892922C13.3485687 5.19994003 13.3612164 9.40374108 15.9563521 11.9991833L24.6623412 20.6662432 28.6225045 16.7060799C29.0365039 16.291565 29.0365039 15.6200502 28.6225045 15.2055354z\" fill=\"currentColor\"/>\n      <path d=\"M15.9669691,11.9921053 C13.3718335,9.39666304 13.3591857,5.19286199 15.938657,2.58185118 L6.91061706,11.6063521 L11.6316697,16.3274047 L15.9669691,11.9921053 Z\" fill=\"url(#" + id + "-1\"/>\n      <path d=\"M20.2951906,15.5912886 L15.9669691,19.91951 C17.2195568,21.1713527 17.9233158,22.8696629 17.9233158,24.6405626 C17.9233158,26.4114623 17.2195568,28.1097726 15.9669691,29.3616152 L25.0162432,20.3123412 L20.2951906,15.5912886 Z\" fill=\"url(#" + id + "-2\"/>\n    </g>\n  </svg>";
};
var JiraSoftwareIcon = /** @class */ (function (_super) {
    tslib_1.__extends(JiraSoftwareIcon, _super);
    function JiraSoftwareIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JiraSoftwareIcon.prototype.render = function () {
        return react_1.default.createElement(Wrapper_1.default, tslib_1.__assign({}, this.props, { svg: svg }));
    };
    JiraSoftwareIcon.defaultProps = constants_1.DefaultProps;
    return JiraSoftwareIcon;
}(react_1.Component));
exports.default = JiraSoftwareIcon;
//# sourceMappingURL=Icon.js.map