"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var main_1 = tslib_1.__importDefault(require("./pm-plugins/main"));
var keymap_1 = tslib_1.__importDefault(require("./pm-plugins/keymap"));
var selection_1 = require("./selection");
exports.GapCursorSelection = selection_1.GapCursorSelection;
exports.Side = selection_1.Side;
var actions_1 = require("./actions");
exports.setCursorForTopLevelBlocks = actions_1.setCursorForTopLevelBlocks;
var gapCursorPlugin = function () { return ({
    name: 'gapCursor',
    pmPlugins: function () {
        return [
            {
                name: 'gapCursorKeymap',
                plugin: function () { return keymap_1.default(); },
            },
            {
                name: 'gapCursor',
                plugin: function () { return main_1.default; },
            },
        ];
    },
}); };
exports.default = gapCursorPlugin;
//# sourceMappingURL=index.js.map