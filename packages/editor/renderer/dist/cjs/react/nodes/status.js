"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var element_1 = require("@atlaskit/status/element");
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var Status = /** @class */ (function (_super) {
    tslib_1.__extends(Status, _super);
    function Status() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Status.prototype.render = function () {
        var _a = this.props, text = _a.text, color = _a.color, localId = _a.localId;
        return (React.createElement(analytics_namespaced_context_1.FabricElementsAnalyticsContext, { data: {
                userContext: 'document',
            } },
            React.createElement(element_1.Status, { text: text, color: color, localId: localId })));
    };
    return Status;
}(react_1.PureComponent));
exports.default = Status;
//# sourceMappingURL=status.js.map