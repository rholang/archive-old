"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var serialize_style_1 = require("./serialize-style");
var create_tag_1 = require("./create-tag");
var util_1 = require("./styles/util");
var common_1 = require("./styles/common");
var className = util_1.createClassName('commonTable');
exports.styles = "\n." + className + " {\n  font-family: " + common_1.fontFamily + ";\n  font-size: " + common_1.fontSize + ";\n  font-weight: " + common_1.fontWeight + ";\n  margin: 0px;\n  padding: 0px;\n  display: table;\n  border-spacing: 0px;\n  width: 100%;\n}\n";
exports.createTableAttrs = function (tableAttrs, tableStyle) {
    if (tableAttrs === void 0) { tableAttrs = {}; }
    if (tableStyle === void 0) { tableStyle = {}; }
    return (tslib_1.__assign(tslib_1.__assign({ cellspacing: 0, cellpadding: 0, border: 0, style: serialize_style_1.serializeStyle(tableStyle) }, tableAttrs), { class: (tableAttrs.class || '') + " " + className }));
};
exports.tableDataMapper = function (_a) {
    var style = _a.style, text = _a.text, attrs = _a.attrs;
    var css = style ? serialize_style_1.serializeStyle(style) : '';
    return create_tag_1.createTag('td', tslib_1.__assign({ style: css }, attrs), text ? text : '');
};
exports.tableRowMapper = function (tableRow) {
    var tableColumns = tableRow.map(exports.tableDataMapper);
    return create_tag_1.createTag('tr', {}, tableColumns.join(''));
};
exports.createTable = function (tableData, tableStyle, tableAttrs) {
    if (tableStyle === void 0) { tableStyle = {}; }
    if (tableAttrs === void 0) { tableAttrs = {}; }
    var attrs = tslib_1.__assign({}, exports.createTableAttrs(tableAttrs, tableStyle));
    var tableRows = tableData.map(exports.tableRowMapper).join('');
    return create_tag_1.createTag('table', attrs, tableRows);
};
//# sourceMappingURL=table-util.js.map