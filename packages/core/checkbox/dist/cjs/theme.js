"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("@atlaskit/theme");
exports.componentTokens = {
    label: {
        textColor: {
            rest: { light: theme_1.colors.N900, dark: theme_1.colors.DN600 },
            disabled: { light: theme_1.colors.N80, dark: theme_1.colors.N80 },
        },
        spacing: {
            top: '2px',
            right: '4px',
            bottom: '2px',
            left: '4px',
        },
    },
    icon: {
        borderWidth: '2px',
        borderColor: {
            rest: { light: theme_1.colors.N40, dark: theme_1.colors.DN80 },
            disabled: { light: '', dark: '' },
            checked: { light: 'currentColor', dark: 'currentColor' },
            active: { light: 'currentColor', dark: 'currentColor' },
            invalid: { light: theme_1.colors.R300, dark: theme_1.colors.R300 },
            focused: { light: theme_1.colors.B100, dark: theme_1.colors.B75 },
            hovered: { light: theme_1.colors.N40, dark: theme_1.colors.DN200 },
            hoveredAndChecked: { light: 'currentColor', dark: 'currentColor' },
        },
        boxColor: {
            rest: { light: theme_1.colors.N10, dark: theme_1.colors.DN10 },
            disabled: { light: theme_1.colors.N20, dark: theme_1.colors.DN10 },
            active: { light: theme_1.colors.B50, dark: theme_1.colors.B200 },
            hoveredAndChecked: { light: theme_1.colors.B300, dark: theme_1.colors.B75 },
            hovered: { light: theme_1.colors.N30, dark: theme_1.colors.DN30 },
            checked: { light: theme_1.colors.B400, dark: theme_1.colors.B400 },
        },
        tickColor: {
            rest: { light: 'transparent', dark: 'transparent' },
            disabledAndChecked: { light: theme_1.colors.N70, dark: theme_1.colors.DN90 },
            activeAndChecked: { light: theme_1.colors.B400, dark: theme_1.colors.DN10 },
            checked: { light: theme_1.colors.N10, dark: theme_1.colors.DN10 },
        },
        size: 'medium',
    },
    requiredIndicator: {
        textColor: {
            rest: theme_1.colors.r500,
        },
    },
};
/**
 * This function traverses the passed in object (first argument)
 * and tries to find the specified key (second argument) assumed to be at the outer most leaf nodes
 * ```
 * const x = { b:  { light: y, dark: z }}
 * evaluateMode(x, 'light')
 * ```
 * If such a value exists, a requisite object is returned with the leaf node reduced to value of the specified 2nd argument.
 * i.e. { b: y }
 */
var evaluateMode = function (obj, mode) {
    var traverse = function traverse(obj) {
        return Object.keys(obj).reduce(function (acc, curr) {
            var value = obj[curr];
            /** Return the value immediately if the value is:
             * not an object
             * an array
             * null
             * undefined
             */
            if (typeof value !== 'object' ||
                typeof value == null ||
                Array.isArray(value)) {
                acc[curr] = value;
            }
            else if (Object.keys(value).includes(mode)) {
                // if the object contains a member corresponding to the passed in mode argument
                // return the value of that member.
                acc[curr] = value[mode];
            }
            else {
                // otherwise keep traversing the object
                acc[curr] = traverse(obj[curr]);
            }
            // return the accumulator
            return acc;
        }, {});
    };
    return traverse(obj);
};
var defaultThemeFn = function (_a) {
    var tokens = _a.tokens, mode = _a.mode;
    return evaluateMode(tokens, mode);
};
exports.default = theme_1.createTheme(defaultThemeFn);
//# sourceMappingURL=theme.js.map