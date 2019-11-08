"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Icon_1 = require("../styled/Icon");
var getStatusSVG_1 = tslib_1.__importDefault(require("../helpers/getStatusSVG"));
var Status = /** @class */ (function (_super) {
    tslib_1.__extends(Status, _super);
    function Status() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Status.prototype.render = function () {
        var _a = this.props, borderColor = _a.borderColor, children = _a.children, status = _a.status, size = _a.size;
        return (react_1.default.createElement(Icon_1.Outer, { size: size, bgColor: borderColor },
            react_1.default.createElement(Icon_1.Inner, null, children || (status && getStatusSVG_1.default(status)))));
    };
    return Status;
}(react_1.Component));
exports.default = Status;
//# sourceMappingURL=Status.js.map