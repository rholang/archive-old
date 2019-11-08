"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var editor_json_transformer_1 = require("@atlaskit/editor-json-transformer");
function createEncoder(parser, encoder) {
    return function (value) { return encoder.encode(parser.parse(value)); };
}
var ADFEncoder = /** @class */ (function () {
    function ADFEncoder(createTransformerWithSchema) {
        var transformer = createTransformerWithSchema(adf_schema_1.defaultSchema);
        this.encode = createEncoder(transformer, new editor_json_transformer_1.JSONTransformer());
    }
    return ADFEncoder;
}());
exports.ADFEncoder = ADFEncoder;
exports.getText = function (node) {
    return (node.text ||
        (node.attrs && (node.attrs.text || node.attrs.shortName)) ||
        "[" + (typeof node.type === 'string' ? node.type : node.type.name) + "]");
};
exports.getEventHandler = function (eventHandlers, type, eventName) {
    if (eventName === void 0) { eventName = 'onClick'; }
    return (eventHandlers &&
        type &&
        eventHandlers[type] &&
        eventHandlers[type][eventName]);
};
//# sourceMappingURL=utils.js.map