import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import SpotlightInner from './SpotlightInner';
import { SpotlightConsumer } from './SpotlightManager';
var Spotlight = /** @class */ (function (_super) {
    __extends(Spotlight, _super);
    function Spotlight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spotlight.prototype.render = function () {
        var _a = this.props, targetNode = _a.targetNode, target = _a.target, rest = __rest(_a, ["targetNode", "target"]);
        return (React.createElement(SpotlightConsumer, null, function (_a) {
            var opened = _a.opened, closed = _a.closed, targets = _a.targets;
            // use the targetNode prop or try get the target from context targets using name
            var actualTargetNode = targetNode ||
                (typeof target === 'string' ? targets[target] : undefined);
            return actualTargetNode ? (React.createElement(SpotlightInner, __assign({}, rest, { targetNode: actualTargetNode, target: target, onOpened: opened, onClosed: closed }))) : null;
        }));
    };
    Spotlight.defaultProps = {
        dialogWidth: 400,
        pulse: true,
    };
    return Spotlight;
}(React.Component));
export default Spotlight;
//# sourceMappingURL=Spotlight.js.map