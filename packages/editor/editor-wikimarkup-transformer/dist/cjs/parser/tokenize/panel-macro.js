"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var common_macro_1 = require("./common-macro");
var text_1 = require("../text");
var attrs_1 = require("../utils/attrs");
var normalize_1 = require("../utils/normalize");
var panel_type_1 = require("../utils/panel-type");
var title_1 = require("../utils/title");
var allowedNodeType = ['paragraph', 'heading', 'orderedList', 'bulletList'];
exports.panelMacro = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    return common_macro_1.commonMacro(input.substring(position), schema, {
        keyword: 'panel',
        paired: true,
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
var rawContentProcessor = function (rawAttrs, rawContent, length, schema, context) {
    var e_1, _a;
    var output = [];
    var parsedAttrs = attrs_1.parseAttrs(rawAttrs);
    var nodeAttrs = tslib_1.__assign(tslib_1.__assign({}, parsedAttrs), { panelType: panel_type_1.getPanelType(parsedAttrs) });
    var parsedContent = text_1.parseString({
        schema: schema,
        context: context,
        ignoreTokenTypes: [],
        input: rawContent,
    });
    var normalizedContent = normalize_1.normalizePMNodes(parsedContent, schema);
    var contentBuffer = parsedAttrs.title
        ? [title_1.title(parsedAttrs.title, schema)]
        : [];
    try {
        for (var normalizedContent_1 = tslib_1.__values(normalizedContent), normalizedContent_1_1 = normalizedContent_1.next(); !normalizedContent_1_1.done; normalizedContent_1_1 = normalizedContent_1.next()) {
            var n = normalizedContent_1_1.value;
            if (allowedNodeType.indexOf(n.type.name) !== -1) {
                contentBuffer.push(n);
            }
            else {
                var panelNode = schema.nodes.panel.createChecked(nodeAttrs, contentBuffer.length
                    ? contentBuffer
                    : schema.nodes.paragraph.createChecked());
                contentBuffer = [];
                output.push(panelNode);
                output.push(n);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (normalizedContent_1_1 && !normalizedContent_1_1.done && (_a = normalizedContent_1.return)) _a.call(normalizedContent_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (contentBuffer.length > 0) {
        var panelNode = schema.nodes.panel.createChecked(nodeAttrs, contentBuffer);
        output.push(panelNode);
    }
    return {
        type: 'pmnode',
        nodes: output.length ? output : [emptyPanel(schema)],
        length: length,
    };
};
function emptyPanel(schema) {
    var p = schema.nodes.paragraph.createChecked();
    return schema.nodes.panel.createChecked({}, p);
}
//# sourceMappingURL=panel-macro.js.map