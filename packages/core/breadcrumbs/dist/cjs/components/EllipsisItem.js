"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Button_1 = tslib_1.__importDefault(require("../styled/Button"));
var BreadcrumbsItem_1 = tslib_1.__importDefault(require("../styled/BreadcrumbsItem"));
var Separator_1 = tslib_1.__importDefault(require("../styled/Separator"));
var EllipsisItem = /** @class */ (function (_super) {
    tslib_1.__extends(EllipsisItem, _super);
    function EllipsisItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EllipsisItem.prototype.render = function () {
        var testId = this.props.testId;
        return (react_1.default.createElement(BreadcrumbsItem_1.default, null,
            react_1.default.createElement(Button_1.default, { appearance: "subtle-link", spacing: "none", testId: testId, onClick: this.props.onClick }, "\u2026"),
            this.props.hasSeparator ? react_1.default.createElement(Separator_1.default, null, "/") : null));
    };
    EllipsisItem.defaultProps = {
        hasSeparator: false,
        onClick: function () { },
    };
    return EllipsisItem;
}(react_1.default.Component));
exports.default = EllipsisItem;
/* eslint-enable react/prefer-stateless-function */
//# sourceMappingURL=EllipsisItem.js.map