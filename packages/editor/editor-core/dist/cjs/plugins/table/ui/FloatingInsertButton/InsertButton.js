"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var editor_common_1 = require("@atlaskit/editor-common");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var types_1 = require("../../types");
var styles_1 = require("../styles");
var messages_1 = tslib_1.__importDefault(require("../messages"));
var utils_1 = require("../../../../utils");
var keymaps = tslib_1.__importStar(require("../../../../keymaps"));
var getInsertLineHeight = function (tableRef) {
    // The line gets height 100% from the table,
    // but since we have an overflow on the left,
    // we should add an offset to make up for it.
    var LINE_OFFSET = 3;
    return tableRef.offsetHeight + styles_1.tableToolbarSize + LINE_OFFSET;
};
var getToolbarSize = function (tableRef) {
    var parent = utils_1.closestElement(tableRef, "." + types_1.TableCssClassName.TABLE_CONTAINER);
    if (parent) {
        return parent.querySelector("." + types_1.TableCssClassName.NUMBERED_COLUMN)
            ? styles_1.tableToolbarSize + editor_common_1.akEditorTableNumberColumnWidth - 1
            : styles_1.tableToolbarSize;
    }
    return styles_1.tableToolbarSize;
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
    return type === 'row' ? messages_1.default.insertRow : messages_1.default.insertColumn;
};
var InsertButton = function (_a) {
    var onMouseDown = _a.onMouseDown, tableRef = _a.tableRef, type = _a.type, formatMessage = _a.intl.formatMessage;
    var content = (React.createElement(tooltip_1.default, { content: keymaps.renderTooltipContent(formatMessage(tooltipMessageByType(type)), type === 'row' ? keymaps.addRowAfter : keymaps.addColumnAfter), position: "top" },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: types_1.TableCssClassName.CONTROLS_INSERT_BUTTON_INNER },
                React.createElement("button", { type: "button", className: types_1.TableCssClassName.CONTROLS_INSERT_BUTTON, onMouseDown: onMouseDown },
                    React.createElement("svg", { className: types_1.TableCssClassName.CONTROLS_BUTTON_ICON },
                        React.createElement("path", { d: "M10 4a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H5a1 1 0 1 1 0-2h4V5a1 1 0 0 1 1-1z", fill: "currentColor", fillRule: "evenodd" })))),
            React.createElement("div", { className: types_1.TableCssClassName.CONTROLS_INSERT_LINE, style: type === 'row'
                    ? { width: getInsertLineWidth(tableRef) }
                    : { height: getInsertLineHeight(tableRef) } }))));
    var floatingButtonClassName = type === 'column'
        ? types_1.TableCssClassName.CONTROLS_FLOATING_BUTTON_COLUMN
        : types_1.TableCssClassName.CONTROLS_FLOATING_BUTTON_ROW;
    return (React.createElement("div", { className: floatingButtonClassName },
        React.createElement("div", { className: types_1.TableCssClassName.CONTROLS_INSERT_BUTTON_WRAP + " " + types_1.TableCssClassName.CONTROLS_INSERT_ROW }, content)));
};
exports.default = react_intl_1.injectIntl(InsertButton);
//# sourceMappingURL=InsertButton.js.map