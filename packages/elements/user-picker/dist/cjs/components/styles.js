"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var avatar_1 = require("@atlaskit/avatar");
var theme_1 = require("@atlaskit/theme");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var utils_1 = require("./utils");
exports.BORDER_PADDING = 6;
exports.PLACEHOLDER_PADDING = 8;
exports.getStyles = memoize_one_1.default(function (width) { return ({
    menu: function (css, state) { return (tslib_1.__assign(tslib_1.__assign({}, css), { width: width, minWidth: state.selectProps.menuMinWidth })); },
    control: function (css, state) { return (tslib_1.__assign(tslib_1.__assign({}, css), { width: width, borderColor: state.isFocused
            ? css.borderColor
            : state.selectProps.subtle
                ? 'transparent'
                : theme_1.colors.N40, backgroundColor: state.isFocused
            ? css['backgroundColor']
            : state.selectProps.subtle
                ? 'transparent'
                : theme_1.colors.N10, '&:hover .fabric-user-picker__clear-indicator': { opacity: 1 }, ':hover': tslib_1.__assign(tslib_1.__assign({}, css[':hover']), { borderColor: state.isFocused
                ? css[':hover']
                    ? css[':hover'].borderColor
                    : theme_1.colors.B100
                : state.selectProps.subtle
                    ? state.selectProps.hoveringClearIndicator
                        ? theme_1.colors.R50
                        : theme_1.colors.N30
                    : theme_1.colors.N40, backgroundColor: state.selectProps.subtle && state.selectProps.hoveringClearIndicator
                ? theme_1.colors.R50
                : state.isFocused
                    ? css[':hover']
                        ? css[':hover'].backgroundColor
                        : theme_1.colors.N0
                    : state.isDisabled
                        ? theme_1.colors.N10
                        : theme_1.colors.N30 }), padding: 0, minHeight: state.selectProps.appearance === 'compact' ? 32 : 44, alignItems: 'stretch', maxWidth: '100%' })); },
    clearIndicator: function (_a) {
        var paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, css = tslib_1.__rest(_a, ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"]);
        return (tslib_1.__assign(tslib_1.__assign({}, css), { opacity: 0, transition: css.transition + ', opacity 150ms', paddingTop: 0, padding: 0, ':hover': {
                color: theme_1.colors.R400,
            } }));
    },
    indicatorsContainer: function (css) { return (tslib_1.__assign(tslib_1.__assign({}, css), { paddingRight: 4 })); },
    valueContainer: function (_a, state) {
        var paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, position = _a.position, css = tslib_1.__rest(_a, ["paddingTop", "paddingBottom", "position"]);
        return (tslib_1.__assign(tslib_1.__assign({}, css), { flexGrow: 1, padding: 0, display: 'flex', flexDirection: 'row', maxHeight: 100, overflowX: 'hidden', overflowY: 'auto', flexWrap: state.selectProps.isMulti ? 'wrap' : 'nowrap', scrollbarWidth: 'none', '::-webkit-scrollbar': {
                width: 0,
                background: 'transparent',
            } }));
    },
    multiValue: function (css) { return (tslib_1.__assign(tslib_1.__assign({}, css), { borderRadius: 24 })); },
    multiValueRemove: function (css) { return (tslib_1.__assign(tslib_1.__assign({}, css), { backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } })); },
    placeholder: function (css, state) {
        var avatarSize = utils_1.getAvatarSize(state.selectProps.appearance);
        return tslib_1.__assign(tslib_1.__assign({}, css), { paddingLeft: !state.selectProps.isMulti
                ? exports.BORDER_PADDING +
                    exports.PLACEHOLDER_PADDING +
                    2 * avatar_1.BORDER_WIDTH[avatarSize] +
                    avatar_1.AVATAR_SIZES[avatarSize]
                : exports.PLACEHOLDER_PADDING, paddingTop: 2, paddingRight: 2, display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', margin: 0 });
    },
    option: function (css) { return (tslib_1.__assign(tslib_1.__assign({}, css), { overflow: 'hidden' })); },
    input: function (_a) {
        var margin = _a.margin, css = tslib_1.__rest(_a, ["margin"]);
        return (tslib_1.__assign(tslib_1.__assign({}, css), { display: 'flex', alignSelf: 'center', paddingBottom: 1, paddingLeft: exports.PLACEHOLDER_PADDING, '& input::placeholder': {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: theme_1.colors.N100,
                opacity: 1 /* Firefox */,
            }, '& input:-ms-input-placeholder': {
                /* Internet Explorer 10-11 */
                color: theme_1.colors.N100,
            } }));
    },
}); });
exports.getPopupStyles = memoize_one_1.default(function (width, flip) { return (tslib_1.__assign(tslib_1.__assign({}, exports.getStyles(width)), { container: function (css) { return (tslib_1.__assign(tslib_1.__assign({}, css), { display: flip ? 'flex' : 'block', flexDirection: 'column-reverse' })); } })); });
//# sourceMappingURL=styles.js.map