"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mediaSingle_1 = tslib_1.__importDefault(require("../nodes/mediaSingle"));
var attrs_1 = require("../utils/attrs");
var common_formatter_1 = require("./common-formatter");
exports.media = function (_a) {
    var input = _a.input, position = _a.position, schema = _a.schema, context = _a.context;
    var rawContentProcessor = function (raw, length) {
        /**
         * !image.gif|align=right, vspace=4|ignore-this!
         * If it splits into more than 2 items, we ignore the rest
         */
        var _a = tslib_1.__read(raw.split('|'), 2), rawContent = _a[0], _b = _a[1], rawAttrs = _b === void 0 ? '' : _b;
        var node = mediaSingle_1.default(schema, rawContent, attrs_1.parseAttrs(rawAttrs, ','));
        return {
            type: 'pmnode',
            nodes: [node],
            length: length,
        };
    };
    return common_formatter_1.commonFormatter(input, position, schema, {
        opening: '!',
        closing: '!',
        context: context,
        rawContentProcessor: rawContentProcessor,
    });
};
//# sourceMappingURL=media.js.map