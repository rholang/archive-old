"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prosemirror_model_1 = require("prosemirror-model");
var slice_1 = require("../../../../../utils/slice");
exports.generateColgroup = function (table) {
    var cols = [];
    table.content.firstChild.content.forEach(function (cell) {
        var colspan = cell.attrs.colspan || 1;
        if (Array.isArray(cell.attrs.colwidth)) {
            // We slice here to guard against our colwidth array having more entries
            // Than the we actually span. We'll patch the document at a later point.
            cell.attrs.colwidth.slice(0, colspan).forEach(function (width) {
                cols.push(['col', { style: "width: " + width + "px;" }]);
            });
        }
        else {
            // When we have merged cells on the first row (firstChild),
            // We want to ensure we're creating the appropriate amount of
            // cols the table still has.
            cols.push.apply(cols, tslib_1.__spread(Array.from({ length: colspan }, function (_) { return ['col', {}]; })));
        }
    });
    return cols;
};
exports.insertColgroupFromNode = function (tableRef, table) {
    var colgroup = tableRef.querySelector('colgroup');
    if (colgroup) {
        tableRef.removeChild(colgroup);
    }
    colgroup = renderColgroupFromNode(table);
    tableRef.insertBefore(colgroup, tableRef.firstChild);
    return colgroup.children;
};
exports.hasTableBeenResized = function (table) {
    return !!slice_1.getFragmentBackingArray(table.content.firstChild.content).find(function (cell) { return cell.attrs.colwidth; });
};
function renderColgroupFromNode(table) {
    var rendered = prosemirror_model_1.DOMSerializer.renderSpec(document, 
    // @ts-ignore
    ['colgroup', {}].concat(exports.generateColgroup(table)));
    return rendered.dom;
}
//# sourceMappingURL=colgroup.js.map