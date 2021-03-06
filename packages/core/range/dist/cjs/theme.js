"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
exports.thumb = {
    default: {
        background: colors.N0,
        // This border color is not being used - awaiting focus state lift to props
        border: colors.N800,
    },
    disabled: {
        boxShadow: colors.N60A,
    },
    focus: {
        // This border color is not being used - awaiting focus state lift to props
        background: colors.N0,
        border: colors.B200,
    },
};
exports.track = {
    background: colors.N30A,
    default: {
        lower: colors.B400,
        upper: colors.N30,
    },
    disabled: {
        lower: colors.N50,
        upper: colors.N30,
    },
    hover: {
        lower: colors.B300,
        upper: colors.N40,
    },
};
exports.Theme = components_1.createTheme(function () { return ({
    thumb: exports.thumb,
    track: exports.track,
}); });
//# sourceMappingURL=theme.js.map