"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Skeleton_1 = tslib_1.__importDefault(require("../styled/Skeleton"));
var Skeleton = /** @class */ (function (_super) {
    tslib_1.__extends(Skeleton, _super);
    function Skeleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skeleton.prototype.render = function () {
        return react_1.default.createElement(Skeleton_1.default, tslib_1.__assign({}, this.props));
    };
    Skeleton.defaultProps = {
        appearance: 'circle',
        size: 'medium',
        weight: 'normal',
    };
    return Skeleton;
}(react_1.Component));
exports.default = Skeleton;
//# sourceMappingURL=Skeleton.js.map