"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mark_serializers_1 = require("./mark-serializers");
exports.applyMarks = function (marks, text) {
    var e_1, _a;
    var output = text;
    try {
        for (var marks_1 = tslib_1.__values(marks), marks_1_1 = marks_1.next(); !marks_1_1.done; marks_1_1 = marks_1.next()) {
            var mark = marks_1_1.value;
            // ignore marks with unknown type
            if (mark_serializers_1.markSerializers[mark.type.name]) {
                output = mark_serializers_1.markSerializers[mark.type.name]({ mark: mark, text: output });
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (marks_1_1 && !marks_1_1.done && (_a = marks_1.return)) _a.call(marks_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return output;
};
//# sourceMappingURL=apply-marks.js.map