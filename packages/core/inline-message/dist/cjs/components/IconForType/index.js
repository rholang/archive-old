"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styledIconForType_1 = tslib_1.__importDefault(require("./styledIconForType"));
var constants_1 = require("../../constants");
var SelectedIconForType = /** @class */ (function (_super) {
    tslib_1.__extends(SelectedIconForType, _super);
    function SelectedIconForType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedIconForType.prototype.render = function () {
        var _a = this.props, type = _a.type, isHovered = _a.isHovered, isOpen = _a.isOpen;
        var _b = type, _c = constants_1.typesMapping[_b], SelectedIcon = _c.icon, iconSize = _c.iconSize;
        return (react_1.default.createElement(styledIconForType_1.default, { appearance: type, isHovered: isHovered, isOpen: isOpen },
            react_1.default.createElement(SelectedIcon, { label: "Inline message icon", size: iconSize })));
    };
    return SelectedIconForType;
}(react_1.default.Component));
exports.default = SelectedIconForType;
//# sourceMappingURL=index.js.map