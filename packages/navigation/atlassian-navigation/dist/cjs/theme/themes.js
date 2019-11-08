"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors_1 = require("@atlaskit/theme/colors");
var themeGenerator_1 = require("./themeGenerator");
exports.atlassianTheme = themeGenerator_1.generateTheme({
    name: 'atlassian',
    primary: {
        backgroundColor: colors_1.B500,
        color: colors_1.N0,
    },
    secondary: {
        backgroundColor: colors_1.B200,
        color: colors_1.N0,
    },
});
exports.defaultTheme = exports.atlassianTheme;
//# sourceMappingURL=themes.js.map