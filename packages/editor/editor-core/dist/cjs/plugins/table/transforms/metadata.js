"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("../pm-plugins/main");
var fix_tables_1 = require("./fix-tables");
exports.setMeta = function (meta) { return function (tr) {
    if ('problem' in meta) {
        // Send analytics event whenever we encounter with a problem
        fix_tables_1.fireAnalytics(meta);
    }
    return tr.setMeta(main_1.pluginKey, meta);
}; };
//# sourceMappingURL=metadata.js.map