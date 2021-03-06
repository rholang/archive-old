import { __assign, __extends, __makeTemplateObject } from "tslib";
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, Text, linkStyles } from './styled';
var Content = /** @class */ (function (_super) {
    __extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getLinkComponent = function () {
            var _a = _this.props, linkComponent = _a.linkComponent, href = _a.href;
            if (!href)
                return null;
            if (linkComponent)
                return styled(linkComponent)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        ", ";\n      "], ["\n        ", ";\n      "])), linkStyles);
            return Link;
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
        return href && LinkComponent ? (React.createElement(LinkComponent, __assign({}, styledProps, { href: href, tabIndex: -1 }), children)) : (React.createElement(Text, __assign({}, styledProps), children));
    };
    return Content;
}(Component));
export default Content;
var templateObject_1;
//# sourceMappingURL=index.js.map