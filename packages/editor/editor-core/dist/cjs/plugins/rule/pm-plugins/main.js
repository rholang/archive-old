"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var keymap_1 = tslib_1.__importDefault(require("./keymap"));
var input_rule_1 = tslib_1.__importDefault(require("./input-rule"));
var plugins = function (schema) {
    return [input_rule_1.default(schema), keymap_1.default()].filter(function (plugin) { return !!plugin; });
};
exports.default = plugins;
//# sourceMappingURL=main.js.map