"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var panelTypeColorMapping = {
    info: '#deebff',
    note: '#eae6ff',
    success: '#e3fcef',
    warning: '#fffae6',
    error: '#ffebe6',
};
exports.panel = function (node) {
    var result = [];
    node.forEach(function (n) {
        result.push(__1.encode(n));
    });
    return "{panel:bgColor=" + (panelTypeColorMapping[node.attrs.panelType] || '') + "}\n" + result.join('\n\n') + "\n{panel}";
};
//# sourceMappingURL=panel.js.map