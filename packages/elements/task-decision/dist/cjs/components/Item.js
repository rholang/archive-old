"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var Item_1 = require("../styled/Item");
var Placeholder_1 = require("../styled/Placeholder");
var Item = /** @class */ (function (_super) {
    tslib_1.__extends(Item, _super);
    function Item() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Item.prototype.renderPlaceholder = function () {
        var _a = this.props, children = _a.children, placeholder = _a.placeholder, showPlaceholder = _a.showPlaceholder;
        if (!showPlaceholder || !placeholder || children) {
            return null;
        }
        return React.createElement(Placeholder_1.Placeholder, { contentEditable: false }, placeholder);
    };
    Item.prototype.renderMessageAppearance = function () {
        var _a = this.props, contentRef = _a.contentRef, children = _a.children, icon = _a.icon;
        return (React.createElement(Item_1.Wrapper, null,
            icon,
            this.renderPlaceholder(),
            React.createElement(Item_1.ContentWrapper, { innerRef: contentRef }, children)));
    };
    Item.prototype.render = function () {
        return this.renderMessageAppearance();
    };
    Item.defaultProps = {
        appearance: 'inline',
    };
    return Item;
}(react_1.PureComponent));
exports.default = Item;
//# sourceMappingURL=Item.js.map