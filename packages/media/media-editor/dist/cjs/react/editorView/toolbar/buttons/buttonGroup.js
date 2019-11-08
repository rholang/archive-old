"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("./styles");
var ButtonGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var children = this.props.children;
        return (React.createElement(styles_1.Group, null, React.Children.map(children, function (child, idx) {
            if (!child) {
                return null;
            }
            return React.createElement(styles_1.GroupItem, { key: idx }, child);
        })));
    };
    return ButtonGroup;
}(React.Component));
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=buttonGroup.js.map