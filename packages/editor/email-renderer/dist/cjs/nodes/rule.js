"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adf_schema_1 = require("@atlaskit/adf-schema");
var create_tag_1 = require("../create-tag");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('rule') + " {\n  border: none;\n  border-bottom: 1px solid " + adf_schema_1.N30 + ";\n}\n";
function rule() {
    return create_tag_1.createTag('hr', { class: util_1.createClassName('rule') });
}
exports.default = rule;
//# sourceMappingURL=rule.js.map