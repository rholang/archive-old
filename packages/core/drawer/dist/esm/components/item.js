import { __assign } from "tslib";
import React from 'react';
import Item from '@atlaskit/item';
export var DrawerItem = function (props) {
    var autoFocus = props.autoFocus, children = props.children, description = props.description, dnd = props.dnd, elemAfter = props.elemAfter, elemBefore = props.elemBefore, href = props.href, isCompact = props.isCompact, isDisabled = props.isDisabled, isDragging = props.isDragging, isHidden = props.isHidden, isSelected = props.isSelected, onClick = props.onClick, onKeyDown = props.onKeyDown, onMouseEnter = props.onMouseEnter, onMouseLeave = props.onMouseLeave, target = props.target, title = props.title;
    return (React.createElement(Item, __assign({ autoFocus: autoFocus, description: description, elemAfter: elemAfter, elemBefore: elemBefore, href: href, isCompact: isCompact, isDisabled: isDisabled, isDragging: isDragging, isHidden: isHidden, isSelected: isSelected, onClick: onClick, onKeyDown: onKeyDown, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, target: target, title: title }, dnd), children));
};
//# sourceMappingURL=item.js.map