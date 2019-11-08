"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var table_util_1 = require("../table-util");
var util_1 = require("../styles/util");
exports.styles = "\n." + util_1.createClassName('mark-indentation-1') + " {\n  padding-left: 30px;\n}\n." + util_1.createClassName('mark-indentation-2') + " {\n  padding-left: 60px;\n}\n." + util_1.createClassName('mark-indentation-3') + " {\n  padding-left: 90px;\n}\n." + util_1.createClassName('mark-indentation-4') + " {\n  padding-left: 120px;\n}\n." + util_1.createClassName('mark-indentation-5') + " {\n  padding-left: 150px;\n}\n." + util_1.createClassName('mark-indentation-6') + " {\n  padding-left: 180px;\n}\n";
function code(_a) {
    var mark = _a.mark, text = _a.text;
    // Outlook accepts padding on <td> element, thus we wrap it with table here
    return table_util_1.createTable([
        [
            {
                text: text,
                attrs: {
                    class: util_1.createClassName("mark-indentation-" + mark.attrs.level),
                },
            },
        ],
    ]);
}
exports.default = code;
//# sourceMappingURL=indentation.js.map