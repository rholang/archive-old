"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var PageHeader = /** @class */ (function (_super) {
    tslib_1.__extends(PageHeader, _super);
    function PageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageHeader.prototype.render = function () {
        var _a = this.props, breadcrumbs = _a.breadcrumbs, actions = _a.actions, bottomBar = _a.bottomBar, children = _a.children, disableTitleStyles = _a.disableTitleStyles, truncateTitle = _a.truncateTitle;
        return (react_1.default.createElement(styled_1.Outer, null,
            breadcrumbs,
            react_1.default.createElement(styled_1.TitleWrapper, { truncate: truncateTitle },
                react_1.default.createElement(styled_1.TitleContainer, { truncate: truncateTitle }, disableTitleStyles ? (children) : (react_1.default.createElement(styled_1.StyledTitle, { truncate: truncateTitle }, children))),
                react_1.default.createElement(styled_1.ActionsWrapper, null, actions)),
            bottomBar && react_1.default.createElement(styled_1.BottomBarWrapper, null,
                " ",
                bottomBar,
                " ")));
    };
    PageHeader.defaultProps = {
        disableTitleStyles: false,
        truncateTitle: false,
    };
    return PageHeader;
}(react_1.Component));
exports.default = PageHeader;
//# sourceMappingURL=index.js.map