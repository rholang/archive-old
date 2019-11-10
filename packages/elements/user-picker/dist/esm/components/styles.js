import { __assign, __rest } from "tslib";
import { AVATAR_SIZES, BORDER_WIDTH } from '@atlaskit/avatar';
import { colors } from '@atlaskit/theme';
import memoizeOne from 'memoize-one';
import { getAvatarSize } from './utils';
export var BORDER_PADDING = 6;
export var PLACEHOLDER_PADDING = 8;
export var getStyles = memoizeOne(function (width) { return ({
    menu: function (css, state) { return (__assign(__assign({}, css), { width: width, minWidth: state.selectProps.menuMinWidth })); },
    control: function (css, state) { return (__assign(__assign({}, css), { width: width, borderColor: state.isFocused
            ? css.borderColor
            : state.selectProps.subtle
                ? 'transparent'
                : colors.N40, backgroundColor: state.isFocused
            ? css['backgroundColor']
            : state.selectProps.subtle
                ? 'transparent'
                : colors.N10, '&:hover .fabric-user-picker__clear-indicator': { opacity: 1 }, ':hover': __assign(__assign({}, css[':hover']), { borderColor: state.isFocused
                ? css[':hover']
                    ? css[':hover'].borderColor
                    : colors.B100
                : state.selectProps.subtle
                    ? state.selectProps.hoveringClearIndicator
                        ? colors.R50
                        : colors.N30
                    : colors.N40, backgroundColor: state.selectProps.subtle && state.selectProps.hoveringClearIndicator
                ? colors.R50
                : state.isFocused
                    ? css[':hover']
                        ? css[':hover'].backgroundColor
                        : colors.N0
                    : state.isDisabled
                        ? colors.N10
                        : colors.N30 }), padding: 0, minHeight: state.selectProps.appearance === 'compact' ? 32 : 44, alignItems: 'stretch', maxWidth: '100%' })); },
    clearIndicator: function (_a) {
        var paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, css = __rest(_a, ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"]);
        return (__assign(__assign({}, css), { opacity: 0, transition: css.transition + ', opacity 150ms', paddingTop: 0, padding: 0, ':hover': {
                color: colors.R400,
            } }));
    },
    indicatorsContainer: function (css) { return (__assign(__assign({}, css), { paddingRight: 4 })); },
    valueContainer: function (_a, state) {
        var paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, position = _a.position, css = __rest(_a, ["paddingTop", "paddingBottom", "position"]);
        return (__assign(__assign({}, css), { flexGrow: 1, padding: 0, display: 'flex', flexDirection: 'row', maxHeight: 100, overflowX: 'hidden', overflowY: 'auto', flexWrap: state.selectProps.isMulti ? 'wrap' : 'nowrap', scrollbarWidth: 'none', '::-webkit-scrollbar': {
                width: 0,
                background: 'transparent',
            } }));
    },
    multiValue: function (css) { return (__assign(__assign({}, css), { borderRadius: 24 })); },
    multiValueRemove: function (css) { return (__assign(__assign({}, css), { backgroundColor: 'transparent', '&:hover': { backgroundColor: 'transparent' } })); },
    placeholder: function (css, state) {
        var avatarSize = getAvatarSize(state.selectProps.appearance);
        return __assign(__assign({}, css), { paddingLeft: !state.selectProps.isMulti
                ? BORDER_PADDING +
                    PLACEHOLDER_PADDING +
                    2 * BORDER_WIDTH[avatarSize] +
                    AVATAR_SIZES[avatarSize]
                : PLACEHOLDER_PADDING, paddingTop: 2, paddingRight: 2, display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%', margin: 0 });
    },
    option: function (css) { return (__assign(__assign({}, css), { overflow: 'hidden' })); },
    input: function (_a) {
        var margin = _a.margin, css = __rest(_a, ["margin"]);
        return (__assign(__assign({}, css), { display: 'flex', alignSelf: 'center', paddingBottom: 1, paddingLeft: PLACEHOLDER_PADDING, '& input::placeholder': {
                /* Chrome, Firefox, Opera, Safari 10.1+ */
                color: colors.N100,
                opacity: 1 /* Firefox */,
            }, '& input:-ms-input-placeholder': {
                /* Internet Explorer 10-11 */
                color: colors.N100,
            } }));
    },
}); });
export var getPopupStyles = memoizeOne(function (width, flip) { return (__assign(__assign({}, getStyles(width)), { container: function (css) { return (__assign(__assign({}, css), { display: flip ? 'flex' : 'block', flexDirection: 'column-reverse' })); } })); });
//# sourceMappingURL=styles.js.map