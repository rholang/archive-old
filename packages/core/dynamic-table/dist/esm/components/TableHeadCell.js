import { __assign, __extends, __rest } from "tslib";
import React from 'react';
import { HeadCell } from '../styled/TableHead';
var TableHeadCell = /** @class */ (function (_super) {
    __extends(TableHeadCell, _super);
    function TableHeadCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableHeadCell.prototype.render = function () {
        var _a = this.props, content = _a.content, inlineStyles = _a.inlineStyles, rest = __rest(_a, ["content", "inlineStyles"]);
        return (React.createElement(HeadCell, __assign({ style: inlineStyles }, rest, { tabIndex: rest.isSortable ? 0 : undefined }),
            React.createElement("span", null, content)));
    };
    TableHeadCell.defaultProps = {
        innerRef: function () { },
        inlineStyles: {},
    };
    return TableHeadCell;
}(React.Component));
export default TableHeadCell;
//# sourceMappingURL=TableHeadCell.js.map