import { createTheme, colors } from '@atlaskit/theme';
export var componentTokens = {
    label: {
        textColor: {
            rest: { light: colors.N900, dark: colors.DN600 },
            disabled: { light: colors.N80, dark: colors.N80 },
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
            rest: { light: colors.N40, dark: colors.DN80 },
            disabled: { light: '', dark: '' },
            checked: { light: 'currentColor', dark: 'currentColor' },
            active: { light: 'currentColor', dark: 'currentColor' },
            invalid: { light: colors.R300, dark: colors.R300 },
            focused: { light: colors.B100, dark: colors.B75 },
            hovered: { light: colors.N40, dark: colors.DN200 },
            hoveredAndChecked: { light: 'currentColor', dark: 'currentColor' },
        },
        boxColor: {
            rest: { light: colors.N10, dark: colors.DN10 },
            disabled: { light: colors.N20, dark: colors.DN10 },
            active: { light: colors.B50, dark: colors.B200 },
            hoveredAndChecked: { light: colors.B300, dark: colors.B75 },
            hovered: { light: colors.N30, dark: colors.DN30 },
            checked: { light: colors.B400, dark: colors.B400 },
        },
        tickColor: {
            rest: { light: 'transparent', dark: 'transparent' },
            disabledAndChecked: { light: colors.N70, dark: colors.DN90 },
            activeAndChecked: { light: colors.B400, dark: colors.DN10 },
            checked: { light: colors.N10, dark: colors.DN10 },
        },
        size: 'medium',
    },
    requiredIndicator: {
        textColor: {
            rest: colors.r500,
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
export default createTheme(defaultThemeFn);
//# sourceMappingURL=theme.js.map