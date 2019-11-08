"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var item_1 = tslib_1.__importDefault(require("@atlaskit/item"));
var fade_in_1 = require("./fade-in");
var SwitcherItem = /** @class */ (function (_super) {
    tslib_1.__extends(SwitcherItem, _super);
    function SwitcherItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitcherItem.prototype.render = function () {
        var _a = this.props, icon = _a.icon, description = _a.description, rest = tslib_1.__rest(_a, ["icon", "description"]);
        return (React.createElement(fade_in_1.FadeIn, null,
            React.createElement(item_1.default, tslib_1.__assign({ elemBefore: icon, description: description }, rest))));
    };
    return SwitcherItem;
}(React.Component));
exports.default = SwitcherItem;
//# sourceMappingURL=item.js.map