"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var item_1 = tslib_1.__importDefault(require("@atlaskit/item"));
exports.DrawerItem = function (props) {
    var autoFocus = props.autoFocus, children = props.children, description = props.description, dnd = props.dnd, elemAfter = props.elemAfter, elemBefore = props.elemBefore, href = props.href, isCompact = props.isCompact, isDisabled = props.isDisabled, isDragging = props.isDragging, isHidden = props.isHidden, isSelected = props.isSelected, onClick = props.onClick, onKeyDown = props.onKeyDown, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, target = props.target, title = props.title;
    return (react_1.default.createElement(item_1.default, tslib_1.__assign({ autoFocus: autoFocus, description: description, elemAfter: elemAfter, elemBefore: elemBefore, href: href, isCompact: isCompact, isDisabled: isDisabled, isDragging: isDragging, isHidden: isHidden, isSelected: isSelected, onClick: onClick, onKeyDown: onKeyDown, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, target: target, title: title }, dnd), children));
};
//# sourceMappingURL=item.js.map