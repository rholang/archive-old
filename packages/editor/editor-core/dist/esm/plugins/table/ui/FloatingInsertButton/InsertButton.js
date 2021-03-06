import * as React from 'react';
import { injectIntl } from 'react-intl';
import { akEditorTableNumberColumnWidth } from '@atlaskit/editor-common';
import Tooltip from '@atlaskit/tooltip';
import { TableCssClassName as ClassName } from '../../types';
import { tableToolbarSize } from '../styles';
import tableMessages from '../messages';
import { closestElement } from '../../../../utils';
import * as keymaps from '../../../../keymaps';
var getInsertLineHeight = function (tableRef) {
    // The line gets height 100% from the table,
    // but since we have an overflow on the left,
    // we should add an offset to make up for it.
    var LINE_OFFSET = 3;
    return tableRef.offsetHeight + tableToolbarSize + LINE_OFFSET;
};
var getToolbarSize = function (tableRef) {
    var parent = closestElement(tableRef, "." + ClassName.TABLE_CONTAINER);
    if (parent) {
        return parent.querySelector("." + ClassName.NUMBERED_COLUMN)
            ? tableToolbarSize + akEditorTableNumberColumnWidth - 1
            : tableToolbarSize;
    }
    return tableToolbarSize;
};
var getInsertLineWidth = function (tableRef) {
    // The line gets width 100% from the table,
    // but since we have an overflow on the left,
    // we should add an offset to make up for it.
    var LINE_OFFSET = 4;
    var parentElement = tableRef.parentElement, offsetWidth = tableRef.offsetWidth;
    var parentOffsetWidth = parentElement.offsetWidth;
    var scrollLeft = parentElement.scrollLeft;
    var diff = offsetWidth - parentOffsetWidth;
    var toolbarSize = getToolbarSize(tableRef);
    return (Math.min(offsetWidth + toolbarSize, parentOffsetWidth + toolbarSize - Math.max(scrollLeft - diff, 0)) + LINE_OFFSET);
};
var tooltipMessageByType = function (type) {
    return type === 'row' ? tableMessages.insertRow : tableMessages.insertColumn;
};
var InsertButton = function (_a) {
    var onMouseDown = _a.onMouseDown, tableRef = _a.tableRef, type = _a.type, formatMessage = _a.intl.formatMessage;
    var content = (React.createElement(Tooltip, { content: keymaps.renderTooltipContent(formatMessage(tooltipMessageByType(type)), type === 'row' ? keymaps.addRowAfter : keymaps.addColumnAfter), position: "top" },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: ClassName.CONTROLS_INSERT_BUTTON_INNER },
                React.createElement("button", { type: "button", className: ClassName.CONTROLS_INSERT_BUTTON, onMouseDown: onMouseDown },
                    React.createElement("svg", { className: ClassName.CONTROLS_BUTTON_ICON },
                        React.createElement("path", { d: "M10 4a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z", fill: "currentColor", fillRule: "evenodd" })))),
            React.createElement("div", { className: ClassName.CONTROLS_INSERT_LINE, style: type === 'row'
                    ? { width: getInsertLineWidth(tableRef) }
                    : { height: getInsertLineHeight(tableRef) } }))));
    var floatingButtonClassName = type === 'column'
        ? ClassName.CONTROLS_FLOATING_BUTTON_COLUMN
        : ClassName.CONTROLS_FLOATING_BUTTON_ROW;
    return (React.createElement("div", { className: floatingButtonClassName },
        React.createElement("div", { className: ClassName.CONTROLS_INSERT_BUTTON_WRAP + " " + ClassName.CONTROLS_INSERT_ROW }, content)));
};
export default injectIntl(InsertButton);
//# sourceMappingURL=InsertButton.js.map