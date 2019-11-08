"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = require("@atlaskit/theme/components");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
exports.defaultColors = memoize_one_1.default(function (theme) {
    var akTheme = { theme: theme };
    return {
        lineNumberColor: components_1.themed({ light: colors.N90, dark: colors.DN90 })(akTheme),
        lineNumberBgColor: components_1.themed({ light: colors.N30, dark: colors.DN20 })(akTheme),
        backgroundColor: components_1.themed({ light: colors.N20, dark: colors.DN50 })(akTheme),
        textColor: components_1.themed({ light: colors.N800, dark: colors.DN800 })(akTheme),
        substringColor: components_1.themed({ light: colors.N400, dark: colors.DN400 })(akTheme),
        keywordColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        attributeColor: components_1.themed({ light: colors.T300, dark: colors.T200 })(akTheme),
        selectorTagColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        docTagColor: components_1.themed({ light: colors.Y300, dark: colors.Y300 })(akTheme),
        nameColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        builtInColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        literalColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        bulletColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        codeColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        additionColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
        regexpColor: components_1.themed({ light: colors.T300, dark: colors.T200 })(akTheme),
        symbolColor: components_1.themed({ light: colors.T300, dark: colors.T200 })(akTheme),
        variableColor: components_1.themed({ light: colors.T300, dark: colors.T200 })(akTheme),
        templateVariableColor: components_1.themed({ light: colors.T300, dark: colors.T200 })(akTheme),
        linkColor: components_1.themed({ light: colors.P300, dark: colors.P100 })(akTheme),
        selectorAttributeColor: components_1.themed({ light: colors.T300, dark: colors.T200 })(akTheme),
        selectorPseudoColor: components_1.themed({ light: colors.T300, dark: colors.T200 })(akTheme),
        typeColor: components_1.themed({ light: colors.T500, dark: colors.T300 })(akTheme),
        stringColor: components_1.themed({ light: colors.G300, dark: colors.G300 })(akTheme),
        selectorIdColor: components_1.themed({ light: colors.T500, dark: colors.T300 })(akTheme),
        selectorClassColor: components_1.themed({ light: colors.T500, dark: colors.T300 })(akTheme),
        quoteColor: components_1.themed({ light: colors.T500, dark: colors.T300 })(akTheme),
        templateTagColor: components_1.themed({ light: colors.T500, dark: colors.T300 })(akTheme),
        deletionColor: components_1.themed({ light: colors.T500, dark: colors.T300 })(akTheme),
        titleColor: components_1.themed({ light: colors.P300, dark: colors.P100 })(akTheme),
        sectionColor: components_1.themed({ light: colors.P300, dark: colors.P100 })(akTheme),
        commentColor: components_1.themed({ light: colors.N400, dark: colors.DN400 })(akTheme),
        metaKeywordColor: components_1.themed({ light: colors.G300, dark: colors.G300 })(akTheme),
        metaColor: components_1.themed({ light: colors.N400, dark: colors.DN400 })(akTheme),
        functionColor: components_1.themed({ light: colors.N800, dark: colors.DN800 })(akTheme),
        numberColor: components_1.themed({ light: colors.B400, dark: colors.B100 })(akTheme),
    };
});
//# sourceMappingURL=defaultTheme.js.map