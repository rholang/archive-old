"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var consts_1 = require("../../consts");
var editor_common_1 = require("@atlaskit/editor-common");
var TableRow = function (props) {
    var children = props.children, allowColumnSorting = props.allowColumnSorting, rowIndex = props.index;
    if (allowColumnSorting) {
        var isHeaderRow_1 = !rowIndex;
        children = React.Children.toArray(children).map(function (child, index) {
            if (React.isValidElement(child)) {
                var tableOrderStatus = props.tableOrderStatus;
                var sortOrdered = editor_common_1.SortOrder.NO_ORDER;
                if (tableOrderStatus) {
                    sortOrdered =
                        index === tableOrderStatus.columnIndex
                            ? tableOrderStatus.order
                            : editor_common_1.SortOrder.NO_ORDER;
                }
                return React.cloneElement(child, {
                    columnIndex: index,
                    onSorting: props.onSorting,
                    sortOrdered: sortOrdered,
                    isHeaderRow: isHeaderRow_1,
                });
            }
        });
    }
    return (React.createElement("tr", null,
        props.isNumberColumnEnabled && (React.createElement("td", { className: consts_1.RendererCssClassName.NUMBER_COLUMN }, props.index)),
        children));
};
exports.default = TableRow;
//# sourceMappingURL=tableRow.js.map