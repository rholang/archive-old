"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/warning"));
var error_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/error"));
var check_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check-circle"));
var info_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/info"));
var question_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/question-circle"));
exports.baseAppearanceObj = {
    info: {
        backgroundColor: colors.B50,
        Icon: info_1.default,
        primaryIconColor: colors.B500,
    },
    warning: {
        backgroundColor: colors.Y50,
        Icon: warning_1.default,
        primaryIconColor: colors.Y500,
    },
    error: {
        backgroundColor: colors.R50,
        Icon: error_1.default,
        primaryIconColor: colors.R500,
    },
    confirmation: {
        backgroundColor: colors.G50,
        Icon: check_circle_1.default,
        primaryIconColor: colors.G500,
    },
    change: {
        backgroundColor: colors.P50,
        Icon: question_circle_1.default,
        primaryIconColor: colors.P500,
    },
};
//# sourceMappingURL=theme.js.map