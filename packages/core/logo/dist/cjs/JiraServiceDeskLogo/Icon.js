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
    return "<canvas height=\"32\" width=\"32\" aria-hidden=\"true\"></canvas>\n  <svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient x1=\"40.063%\" x2=\"69.955%\" y1=\"0%\" y2=\"50%\" id=\"" + id + "\">\n        <stop stop-color=\"" + iconGradientStart + "\" " + (iconGradientStart === 'inherit' ? 'stop-opacity="0.4"' : '') + " offset=\"0%\"></stop>\n        <stop stop-color=\"" + iconGradientStop + "\" offset=\"100%\"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"nonzero\">\n      <path d=\"M18.4838727,13.07 L26.3504842,13.1005351 C26.8138769,13.102696 27.2364009,13.3661074 27.4423455,13.781227 C27.64829,14.1963467 27.6024124,14.6921363 27.3237913,15.0624169 L15.7128101,30.5666265 C13.9597489,29.2574035 12.7986975,27.3052951 12.485161,25.1398891 C12.1716246,22.974483 12.731296,20.7732253 14.041012,19.0205325 L18.4838727,13.07 Z\" fill=\"url(#" + id + ")\"></path>\n      <path d=\"M14.0396053,19.0156579 L6.22105263,18.9660526 C5.75779361,18.9638923 5.33539149,18.700557 5.12950634,18.2855571 C4.92362119,17.8705572 4.96948557,17.3749106 5.24802632,17.0047368 L16.7411842,1.65 C18.4937397,2.9588453 19.6544561,4.91039056 19.9679021,7.0751719 C20.2813481,9.23995324 19.7218382,11.4405759 18.4125,13.1927632 L14.0396053,19.0156579 Z\" fill=\"currentColor\"></path>\n    </g>\n  </svg>";
};
var JiraServiceDeskIcon = /** @class */ (function (_super) {
    tslib_1.__extends(JiraServiceDeskIcon, _super);
    function JiraServiceDeskIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JiraServiceDeskIcon.prototype.render = function () {
        return react_1.default.createElement(Wrapper_1.default, tslib_1.__assign({}, this.props, { svg: svg }));
    };
    JiraServiceDeskIcon.defaultProps = constants_1.DefaultProps;
    return JiraServiceDeskIcon;
}(react_1.Component));
exports.default = JiraServiceDeskIcon;
//# sourceMappingURL=Icon.js.map