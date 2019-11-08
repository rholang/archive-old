"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_node_resolver_1 = tslib_1.__importDefault(require("react-node-resolver"));
var SpotlightManager_1 = require("./SpotlightManager");
var SpotlightTarget = /** @class */ (function (_super) {
    tslib_1.__extends(SpotlightTarget, _super);
    function SpotlightTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpotlightTarget.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(SpotlightManager_1.TargetConsumer, null, function (targetRef) {
            return targetRef ? (react_1.default.createElement(react_node_resolver_1.default, { innerRef: targetRef(_this.props.name) }, _this.props.children)) : (_this.props.children);
        }));
    };
    return SpotlightTarget;
}(react_1.Component));
exports.default = SpotlightTarget;
//# sourceMappingURL=SpotlightTarget.js.map