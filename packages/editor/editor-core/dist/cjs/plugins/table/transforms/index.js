"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var merge_1 = require("./merge");
exports.mergeCells = merge_1.mergeCells;
exports.canMergeCells = merge_1.canMergeCells;
exports.removeEmptyColumns = merge_1.removeEmptyColumns;
var fix_tables_1 = require("./fix-tables");
exports.fireAnalytics = fix_tables_1.fireAnalytics;
exports.fixTables = fix_tables_1.fixTables;
exports.fixAutoSizedTable = fix_tables_1.fixAutoSizedTable;
var delete_columns_1 = require("./delete-columns");
exports.deleteColumns = delete_columns_1.deleteColumns;
var delete_rows_1 = require("./delete-rows");
exports.deleteRows = delete_rows_1.deleteRows;
var column_width_1 = require("./column-width");
exports.updateColumnWidths = column_width_1.updateColumnWidths;
var metadata_1 = require("./metadata");
exports.setMeta = metadata_1.setMeta;
//# sourceMappingURL=index.js.map