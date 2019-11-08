"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var styled_1 = require("./styled");
var Content = /** @class */ (function (_super) {
    tslib_1.__extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getLinkComponent = function () {
            var _a = _this.props, linkComponent = _a.linkComponent, href = _a.href;
            if (!href)
                return null;
            if (linkComponent)
                return styled_components_1.default(linkComponent)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n        ", ";\n      "], ["\n        ", ";\n      "])), styled_1.linkStyles);
            return styled_1.Link;
        };
        return _this;
    }
    Content.prototype.render = function () {
        var _a = this.props, children = _a.children, href = _a.href, isFocused = _a.isFocused, isRemovable = _a.isRemovable, markedForRemoval = _a.markedForRemoval, color = _a.color;
        var styledProps = {
            isFocused: isFocused,
            isRemovable: isRemovable,
            markedForRemoval: markedForRemoval,
            color: color,
        };
        var LinkComponent = this.getLinkComponent();
        return href && LinkComponent ? (react_1.default.createElement(LinkComponent, tslib_1.__assign({}, styledProps, { href: href, tabIndex: -1 }), children)) : (react_1.default.createElement(styled_1.Text, tslib_1.__assign({}, styledProps), children));
    };
    return Content;
}(react_1.Component));
exports.default = Content;
var templateObject_1;
//# sourceMappingURL=index.js.map