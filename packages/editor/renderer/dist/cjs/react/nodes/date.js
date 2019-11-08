"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_common_1 = require("@atlaskit/editor-common");
var Date = /** @class */ (function (_super) {
    tslib_1.__extends(Date, _super);
    function Date() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Date.prototype.render = function () {
        var _a = this.props, timestamp = _a.timestamp, parentIsIncompleteTask = _a.parentIsIncompleteTask;
        var className = !!parentIsIncompleteTask && editor_common_1.isPastDate(timestamp)
            ? 'date-node date-node-highlighted'
            : 'date-node';
        return (React.createElement("span", { className: editor_common_1.DateSharedCssClassName.DATE_WRAPPER },
            React.createElement("span", { className: className, "data-node-type": "date", "data-timestamp": timestamp }, parentIsIncompleteTask
                ? editor_common_1.timestampToTaskContext(timestamp)
                : editor_common_1.timestampToString(timestamp))));
    };
    return Date;
}(react_1.PureComponent));
exports.default = Date;
//# sourceMappingURL=date.js.map