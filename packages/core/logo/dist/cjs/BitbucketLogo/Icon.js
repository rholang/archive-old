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
    return "<canvas height=\"32\" width=\"32\" aria-hidden=\"true\"></canvas>\n  <svg viewBox=\"0 0 32 32\" xmlns=\"http://www.w3.org/2000/svg\" focusable=\"false\" aria-hidden=\"true\">\n    <defs>\n      <linearGradient x1=\"100%\" x2=\"45.339%\" y1=\"29.23%\" y2=\"75.038%\" id=\"" + id + "\">\n        <stop stop-color=\"" + iconGradientStart + "\" " + (iconGradientStart === 'inherit' ? 'stop-opacity="0.4"' : '') + " offset=\"0%\"></stop>\n        <stop stop-color=\"" + iconGradientStop + "\" offset=\"100%\"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke=\"none\" stroke-width=\"1\" fill-rule=\"nonzero\">\n      <path d=\"M4.78580435,5 C4.55423538,4.99701333 4.33319771,5.09657765 4.18198458,5.27198488 C4.03077145,5.44739211 3.96486141,5.68068714 4.00193478,5.9092887 L7.32946109,26.1096074 C7.3703589,26.355373 7.49665951,26.578828 7.68612174,26.7406224 C7.87680866,26.9055104 8.11992598,26.9972003 8.37200761,26.9992993 L14.5488998,19.5995707 L13.6827239,19.5995707 L12.3227102,12.3958093 L27.3886833,12.3958093 L28.4469072,5.91712739 C28.4862006,5.68935393 28.4229655,5.45584955 28.2741046,5.27903 C28.1252437,5.10221045 27.9059335,5.00010264 27.6747957,5 L4.78580435,5 Z\" fill=\"currentColor\"/>\n      <path fill=\"url(#" + id + ")\" d=\"M27.3886833,12.3958093 L20.0320674,12.3958093 L18.7974728,19.5995707 L13.7023207,19.5995707 L7.68612174,26.7445417 C7.87680866,26.9094297 8.11992598,27.0011197 8.37200761,27.0032187 L24.3394307,27.0032187 C24.727754,27.0082167 25.0611955,26.7281258 25.1233002,26.3447683 L27.3886833,12.3958093 Z\"/>\n    </g>\n  </svg>";
};
var BitbucketIcon = /** @class */ (function (_super) {
    tslib_1.__extends(BitbucketIcon, _super);
    function BitbucketIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BitbucketIcon.prototype.render = function () {
        return react_1.default.createElement(Wrapper_1.default, tslib_1.__assign({}, this.props, { svg: svg }));
    };
    BitbucketIcon.defaultProps = constants_1.DefaultProps;
    return BitbucketIcon;
}(react_1.Component));
exports.default = BitbucketIcon;
//# sourceMappingURL=Icon.js.map