import { __assign } from "tslib";
import { serializeStyle } from './serialize-style';
import { createTag } from './create-tag';
import { createClassName } from './styles/util';
import { fontFamily, fontSize, fontWeight } from './styles/common';
var className = createClassName('commonTable');
export var styles = "\n." + className + " {\n  font-family: " + fontFamily + ";\n  font-size: " + fontSize + ";\n  font-weight: " + fontWeight + ";\n  margin: 0px;\n  padding: 0px;\n  display: table;\n  border-spacing: 0px;\n  width: 100%;\n}\n";
export var createTableAttrs = function (tableAttrs, tableStyle) {
    if (tableAttrs === void 0) { tableAttrs = {}; }
    if (tableStyle === void 0) { tableStyle = {}; }
    return (__assign(__assign({ cellspacing: 0, cellpadding: 0, border: 0, style: serializeStyle(tableStyle) }, tableAttrs), { class: (tableAttrs.class || '') + " " + className }));
};
export var tableDataMapper = function (_a) {
    var style = _a.style, text = _a.text, attrs = _a.attrs;
    var css = style ? serializeStyle(style) : '';
    return createTag('td', __assign({ style: css }, attrs), text ? text : '');
};
export var tableRowMapper = function (tableRow) {
    var tableColumns = tableRow.map(tableDataMapper);
    return createTag('tr', {}, tableColumns.join(''));
};
export var createTable = function (tableData, tableStyle, tableAttrs) {
    if (tableStyle === void 0) { tableStyle = {}; }
    if (tableAttrs === void 0) { tableAttrs = {}; }
    var attrs = __assign({}, createTableAttrs(tableAttrs, tableStyle));
    var tableRows = tableData.map(tableRowMapper).join('');
    return createTag('table', attrs, tableRows);
};
//# sourceMappingURL=table-util.js.map