"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("../styled");
var TabContent = /** @class */ (function (_super) {
    tslib_1.__extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContent.prototype.render = function () {
        var _a = this.props, data = _a.data, elementProps = _a.elementProps;
        return react_1.default.createElement(styled_1.TabPane, tslib_1.__assign({}, elementProps), data.content);
    };
    TabContent.defaultProps = {
        data: {},
        elementProps: {},
    };
    return TabContent;
}(react_1.Component));
exports.default = TabContent;
//# sourceMappingURL=TabContent.js.map