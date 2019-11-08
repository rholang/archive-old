"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var styled_1 = require("./styled");
var ProgressBar = /** @class */ (function (_super) {
    tslib_1.__extends(ProgressBar, _super);
    function ProgressBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressBar.prototype.render = function () {
        if (typeof this.props.progress !== 'number') {
            return null;
        }
        var progress = Math.min(1, Math.max(0, this.props.progress));
        var progressBarStyle = { width: progress * 100 + "%" };
        return (React.createElement(styled_1.ProgressWrapper, null,
            React.createElement("div", { className: 'progressBar', style: progressBarStyle })));
    };
    return ProgressBar;
}(react_1.Component));
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=index.js.map