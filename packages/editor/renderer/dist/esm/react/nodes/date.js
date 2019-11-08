import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { isPastDate, timestampToString, timestampToTaskContext, DateSharedCssClassName, } from '@atlaskit/editor-common';
var Date = /** @class */ (function (_super) {
    __extends(Date, _super);
    function Date() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Date.prototype.render = function () {
        var _a = this.props, timestamp = _a.timestamp, parentIsIncompleteTask = _a.parentIsIncompleteTask;
        var className = !!parentIsIncompleteTask && isPastDate(timestamp)
            ? 'date-node date-node-highlighted'
            : 'date-node';
        return (React.createElement("span", { className: DateSharedCssClassName.DATE_WRAPPER },
            React.createElement("span", { className: className, "data-node-type": "date", "data-timestamp": timestamp }, parentIsIncompleteTask
                ? timestampToTaskContext(timestamp)
                : timestampToString(timestamp))));
    };
    return Date;
}(PureComponent));
export default Date;
//# sourceMappingURL=date.js.map