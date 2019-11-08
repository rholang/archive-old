import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { TabPane } from '../styled';
var TabContent = /** @class */ (function (_super) {
    __extends(TabContent, _super);
    function TabContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabContent.prototype.render = function () {
        var _a = this.props, data = _a.data, elementProps = _a.elementProps;
        return React.createElement(TabPane, __assign({}, elementProps), data.content);
    };
    TabContent.defaultProps = {
        data: {},
        elementProps: {},
    };
    return TabContent;
}(Component));
export default TabContent;
//# sourceMappingURL=TabContent.js.map