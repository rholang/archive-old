"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var SpotlightInner_1 = tslib_1.__importDefault(require("./SpotlightInner"));
var SpotlightManager_1 = require("./SpotlightManager");
var Spotlight = /** @class */ (function (_super) {
    tslib_1.__extends(Spotlight, _super);
    function Spotlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spotlight.prototype.render = function () {
        var _a = this.props, targetNode = _a.targetNode, target = _a.target, rest = tslib_1.__rest(_a, ["targetNode", "target"]);
        return (react_1.default.createElement(SpotlightManager_1.SpotlightConsumer, null, function (_a) {
            var opened = _a.opened, closed = _a.closed, targets = _a.targets;
            // use the targetNode prop or try get the target from context targets using name
            var actualTargetNode = targetNode ||
                (typeof target === 'string' ? targets[target] : undefined);
            return actualTargetNode ? (react_1.default.createElement(SpotlightInner_1.default, tslib_1.__assign({}, rest, { targetNode: actualTargetNode, target: target, onOpened: opened, onClosed: closed }))) : null;
        }));
    };
    Spotlight.defaultProps = {
        dialogWidth: 400,
        pulse: true,
    };
    return Spotlight;
}(react_1.default.Component));
exports.default = Spotlight;
//# sourceMappingURL=Spotlight.js.map