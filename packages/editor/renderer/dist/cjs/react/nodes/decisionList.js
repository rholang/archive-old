"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var task_decision_1 = require("@atlaskit/task-decision");
var DecisionList = /** @class */ (function (_super) {
    tslib_1.__extends(DecisionList, _super);
    function DecisionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionList.prototype.render = function () {
        var children = this.props.children;
        if (react_1.Children.count(children) === 0) {
            return null;
        }
        return React.createElement(task_decision_1.DecisionList, null, children);
    };
    return DecisionList;
}(react_1.PureComponent));
exports.default = DecisionList;
//# sourceMappingURL=decisionList.js.map