"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var Margin = /** @class */ (function (_super) {
    tslib_1.__extends(Margin, _super);
    function Margin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Margin.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, size = _a.size, circular = _a.circular;
        var Element = circular ? styled_1.MarginWrapperCircle : styled_1.MarginWrapperSquare;
        return React.createElement(Element, { width: width, height: height, size: size });
    };
    return Margin;
}(React.Component));
exports.Margin = Margin;
//# sourceMappingURL=margin.js.map