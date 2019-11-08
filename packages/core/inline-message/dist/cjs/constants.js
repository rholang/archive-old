"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var constants_1 = require("@atlaskit/theme/constants");
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/warning"));
var check_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check-circle"));
var info_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/info"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
exports.itemSpacing = constants_1.gridSize() / 2;
exports.typesMapping = {
    connectivity: {
        icon: warning_1.default,
        iconSize: 'medium',
    },
    confirmation: {
        icon: check_circle_1.default,
        iconSize: 'medium',
    },
    info: {
        icon: info_1.default,
        iconSize: 'medium',
    },
    warning: {
        icon: warning_1.default,
        iconSize: 'medium',
    },
    error: {
        icon: error_1.default,
        iconSize: 'medium',
    },
};
//# sourceMappingURL=constants.js.map