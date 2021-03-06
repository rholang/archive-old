"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = tslib_1.__importDefault(require("react"));
var constants_1 = require("@atlaskit/theme/constants");
exports.groupItemStyles = {
    flex: '1 0 auto',
    display: 'flex',
    /* margins don't flip when the layout uses dir="rtl", whereas pseudos do */
    '& + &::before': {
        content: "''",
        display: 'inline-block',
        width: constants_1.gridSize() / 2 + "px",
    },
};
var ButtonGroup = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonGroup, _super);
    function ButtonGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonGroup.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, children = _a.children;
        return (core_1.jsx("div", { css: { display: 'inline-flex' } }, react_1.default.Children.map(children, function (child, idx) {
            if (!child) {
                return null;
            }
            return (core_1.jsx("div", { key: idx, css: exports.groupItemStyles }, appearance
                ? react_1.default.cloneElement(child, { appearance: appearance })
                : child));
        })));
    };
    return ButtonGroup;
}(react_1.default.Component));
exports.default = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map