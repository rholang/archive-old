import { __extends } from "tslib";
import React from 'react';
import TableRow from './TableRow';
import withSortedPageRows from '../hoc/withSortedPageRows';
var Body = /** @class */ (function (_super) {
    __extends(Body, _super);
    function Body() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Body.prototype.render = function () {
        var _a = this.props, pageRows = _a.pageRows, head = _a.head, isFixedSize = _a.isFixedSize, highlightedRowIndex = _a.highlightedRowIndex;
        return (React.createElement("tbody", null, pageRows.map(function (row, rowIndex) { return (React.createElement(TableRow, { head: head, isFixedSize: isFixedSize, key: rowIndex, row: row, isHighlighted: highlightedRowIndex === rowIndex })); })));
    };
    return Body;
}(React.Component));
export default withSortedPageRows(Body);
//# sourceMappingURL=Body.js.map