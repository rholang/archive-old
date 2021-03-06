import * as React from 'react';
import { RendererCssClassName } from '../../consts';
import { SortOrder } from '@atlaskit/editor-common';
var TableRow = function (props) {
    var children = props.children, allowColumnSorting = props.allowColumnSorting, rowIndex = props.index;
    if (allowColumnSorting) {
        var isHeaderRow_1 = !rowIndex;
        children = React.Children.toArray(children).map(function (child, index) {
            if (React.isValidElement(child)) {
                var tableOrderStatus = props.tableOrderStatus;
                var sortOrdered = SortOrder.NO_ORDER;
                if (tableOrderStatus) {
                    sortOrdered =
                        index === tableOrderStatus.columnIndex
                            ? tableOrderStatus.order
                            : SortOrder.NO_ORDER;
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
        props.isNumberColumnEnabled && (React.createElement("td", { className: RendererCssClassName.NUMBER_COLUMN }, props.index)),
        children));
};
export default TableRow;
//# sourceMappingURL=tableRow.js.map