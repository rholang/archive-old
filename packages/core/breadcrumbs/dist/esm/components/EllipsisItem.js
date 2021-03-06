import { __extends } from "tslib";
import React from 'react';
import Button from '../styled/Button';
import ItemWrapper from '../styled/BreadcrumbsItem';
import Separator from '../styled/Separator';
var EllipsisItem = /** @class */ (function (_super) {
    __extends(EllipsisItem, _super);
    function EllipsisItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EllipsisItem.prototype.render = function () {
        var testId = this.props.testId;
        return (React.createElement(ItemWrapper, null,
            React.createElement(Button, { appearance: "subtle-link", spacing: "none", testId: testId, onClick: this.props.onClick }, "\u2026"),
            this.props.hasSeparator ? React.createElement(Separator, null, "/") : null));
    };
    EllipsisItem.defaultProps = {
        hasSeparator: false,
        onClick: function () { },
    };
    return EllipsisItem;
}(React.Component));
export default EllipsisItem;
/* eslint-enable react/prefer-stateless-function */
//# sourceMappingURL=EllipsisItem.js.map