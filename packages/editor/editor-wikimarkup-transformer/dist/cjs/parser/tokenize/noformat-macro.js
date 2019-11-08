"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_macro_1 = require("./common-macro");
var attrs_1 = require("../utils/attrs");
var title_1 = require("../utils/title");
exports.noformatMacro = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    return common_macro_1.commonMacro(input.substring(position), schema, {
        keyword: 'noformat',
        paired: true,
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
var rawContentProcessor = function (rawAttrs, rawContent, length, schema, _context) {
    var output = [];
    var codeBlock = schema.nodes.codeBlock;
    var parsedAttrs = attrs_1.parseAttrs(rawAttrs);
    var trimedContent = rawContent.replace(/^\s+|\s+$/g, '');
    var textNode = trimedContent.length
        ? schema.text(trimedContent)
        : undefined;
    if (parsedAttrs.title) {
        output.push(title_1.title(parsedAttrs.title, schema));
    }
    output.push(codeBlock.createChecked({ language: 'java' }, textNode));
    return {
        type: 'pmnode',
        nodes: output,
        length: length,
    };
};
//# sourceMappingURL=noformat-macro.js.map