import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { ContentWrapper, Wrapper } from '../styled/Item';
import { Placeholder } from '../styled/Placeholder';
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.renderPlaceholder = function () {
        var _a = this.props, children = _a.children, placeholder = _a.placeholder, showPlaceholder = _a.showPlaceholder;
        if (!showPlaceholder || !placeholder || children) {
            return null;
        }
        return React.createElement(Placeholder, { contentEditable: false }, placeholder);
    };
    Item.prototype.renderMessageAppearance = function () {
        var _a = this.props, contentRef = _a.contentRef, children = _a.children, icon = _a.icon;
        return (React.createElement(Wrapper, null,
            icon,
            this.renderPlaceholder(),
            React.createElement(ContentWrapper, { innerRef: contentRef }, children)));
    };
    Item.prototype.render = function () {
        return this.renderMessageAppearance();
    };
    Item.defaultProps = {
        appearance: 'inline',
    };
    return Item;
}(PureComponent));
export default Item;
//# sourceMappingURL=Item.js.map