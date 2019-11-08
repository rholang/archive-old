"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_macro_1 = require("./common-macro");
exports.anchorMacro = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    return common_macro_1.commonMacro(input.substring(position), schema, {
        keyword: 'anchor',
        paired: false,
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
var rawContentProcessor = function (_rawAttrs, _rawContent, length, _schema, _context) {
    return {
        type: 'text',
        text: '',
        length: length,
    };
};
//# sourceMappingURL=anchor-macro.js.map