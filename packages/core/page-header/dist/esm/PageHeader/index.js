import { __extends } from "tslib";
import React, { Component } from 'react';
import { Outer, TitleWrapper, StyledTitle, ActionsWrapper, BottomBarWrapper, TitleContainer, } from './styled';
var PageHeader = /** @class */ (function (_super) {
    __extends(PageHeader, _super);
    function PageHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageHeader.prototype.render = function () {
        var _a = this.props, breadcrumbs = _a.breadcrumbs, actions = _a.actions, bottomBar = _a.bottomBar, children = _a.children, disableTitleStyles = _a.disableTitleStyles, truncateTitle = _a.truncateTitle;
        return (React.createElement(Outer, null,
            breadcrumbs,
            React.createElement(TitleWrapper, { truncate: truncateTitle },
                React.createElement(TitleContainer, { truncate: truncateTitle }, disableTitleStyles ? (children) : (React.createElement(StyledTitle, { truncate: truncateTitle }, children))),
                React.createElement(ActionsWrapper, null, actions)),
            bottomBar && React.createElement(BottomBarWrapper, null,
                " ",
                bottomBar,
                " ")));
    };
    PageHeader.defaultProps = {
        disableTitleStyles: false,
        truncateTitle: false,
    };
    return PageHeader;
}(Component));
export default PageHeader;
//# sourceMappingURL=index.js.map