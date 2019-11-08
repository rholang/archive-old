"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var Page = /** @class */ (function (_super) {
    tslib_1.__extends(Page, _super);
    function Page() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Page.prototype.render = function () {
        return react_1.default.createElement(button_1.default, tslib_1.__assign({}, this.props, { appearance: "subtle" }));
    };
    return Page;
}(react_1.Component));
exports.default = Page;
//# sourceMappingURL=index.js.map