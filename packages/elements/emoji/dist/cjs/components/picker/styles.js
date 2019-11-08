"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
var theme_1 = require("@atlaskit/theme");
var shared_styles_1 = require("../../util/shared-styles");
var styles_1 = require("../common/styles");
var constants_1 = require("../../util/constants");
exports.active = 'emoji-picker-active';
exports.disable = 'emoji-picker-disable';
// Level 1 - picker
exports.emojiPicker = typestyle_1.style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: 'white',
    border: shared_styles_1.emojiPickerBorderColor + " 1px solid",
    borderRadius: theme_1.borderRadius() + "px",
    boxShadow: shared_styles_1.emojiPickerBoxShadow,
    height: constants_1.emojiPickerHeight + "px",
    width: constants_1.emojiPickerWidth + "px",
    marginBottom: '8px',
    minWidth: constants_1.emojiPickerWidth + "px",
});
// Level 2
/// Category Selector
exports.addButton = 'emoji-picker-add-button';
exports.categorySelector = typestyle_1.style({
    flex: '0 0 auto',
    backgroundColor: theme_1.colors.N30,
    $nest: (_a = {
            ul: {
                listStyle: 'none',
                margin: '0 4px',
                padding: '3px 0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
            },
            li: {
                display: 'inline-block',
                margin: 0,
                padding: 0,
                $nest: {
                    button: {
                        verticalAlign: 'middle',
                    },
                },
            }
        },
        _a["." + exports.addButton] = {
            color: theme_1.colors.N200,
            margin: '0 0 0 5px',
            verticalAlign: 'middle',
        },
        _a),
});
exports.category = typestyle_1.style({
    backgroundColor: 'transparent',
    border: 0,
    color: theme_1.colors.N100A,
    cursor: 'pointer',
    margin: '2px 0',
    padding: 0,
    transition: 'color 0.2s ease',
    $nest: (_b = {},
        /* Firefox */
        _b['&::-moz-focus-inner'] = {
            border: '0 none',
            padding: 0,
        },
        _b["&." + exports.active] = {
            color: theme_1.colors.B300,
            $nest: (_c = {},
                _c['&:hover'] = {
                    color: theme_1.colors.B300,
                },
                _c),
        },
        _b['&:hover'] = {
            color: theme_1.colors.B100,
        },
        _b["&." + exports.disable] = {
            color: theme_1.colors.N50,
            cursor: 'default',
            $nest: (_d = {},
                _d['&:hover'] = {
                    color: theme_1.colors.N50,
                },
                _d),
        },
        _b['&:focus'] = {
            outline: '0',
        },
        _b),
});
/// EmojiPickerList
exports.emojiPickerList = typestyle_1.style({
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    // To force Firefox/IE/Edge to shrink the list, if necessary (e.g. when upload panel in place)
    height: '0',
});
// react-virtualized enables focus style by default - turn it off
exports.virtualList = typestyle_1.style({
    $nest: {
        '&:focus': {
            outline: 'none',
        },
    },
});
//// Search
exports.searchIcon = 'search-icon';
exports.input = 'input';
exports.pickerSearch = typestyle_1.style({
    boxSizing: 'border-box',
    padding: '10px',
    flex: '0 0 auto',
    $nest: (_e = {},
        _e["." + exports.searchIcon] = {
            opacity: 0.5,
        },
        _e["." + exports.input] = {
            background: 'transparent',
            border: 0,
            boxSizing: 'border-box',
            color: 'inherit',
            cursor: 'inherit',
            fontSize: '14px',
            outline: 'none',
            padding: '1px 0 2px 10px',
            width: '100%',
            $nest: (_f = {},
                _f['&:invalid'] = {
                    boxShadow: 'none',
                },
                _f['&::-ms-clear'] = {
                    display: 'none',
                },
                _f),
        },
        _e),
});
//// Loading/Spinner
exports.emojiPickerSpinner = typestyle_1.style({
    display: 'flex',
    width: '100%',
    height: '150px',
    justifyContent: 'center',
    alignItems: 'center',
    $nest: {
        '>div': {
            flex: '0 0 auto',
        },
    },
});
//// Category/Result
exports.emojiPickerRow = typestyle_1.style({
    marginLeft: '8px',
});
exports.emojiCategoryTitle = typestyle_1.style({
    boxSizing: 'border-box',
    color: theme_1.colors.N900,
    fontSize: '14px',
    padding: '5px 8px',
    textTransform: 'lowercase',
    $nest: {
        '&:first-letter': {
            textTransform: 'uppercase',
        },
    },
});
exports.emojiItem = typestyle_1.style({
    display: 'inline-block',
    textAlign: 'center',
    width: '40px',
    $nest: (_g = {},
        _g["&>." + styles_1.emojiNode] = {
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '5px',
            width: '24px',
            height: '24px',
            $nest: (_h = {
                    // Fit non-square emoji to square
                    '&>img': {
                        position: 'relative',
                        left: '50%',
                        top: '50%',
                        transform: 'translateX(-50%) translateY(-50%)',
                        maxHeight: '24px',
                        maxWidth: '24px',
                        display: 'block',
                    }
                },
                // Scale sprite to fit regardless of default emoji size
                _h["&>." + styles_1.emojiSprite] = {
                    height: '24px',
                    width: '24px',
                },
                _h),
        },
        _g["&>." + styles_1.placeholder] = {
            padding: '0',
            margin: '7px',
            minWidth: '24px',
            maxWidth: '24px',
        },
        _g),
});
exports.addEmoji = typestyle_1.style({
    border: '2px dashed #ccc',
    borderRadius: theme_1.borderRadius() + "px",
    backgroundColor: 'transparent',
    width: '32px',
    height: '32px',
    padding: 0,
    margin: '4px',
    verticalAlign: 'middle',
    $nest: {
        '&:hover': {
            backgroundColor: shared_styles_1.akEmojiSelectedBackgroundColor,
        },
        '&:focus': {
            outline: '0',
        },
        span: {
            backgroundColor: 'inherit',
        },
    },
});
/// Footer
exports.emojiPickerFooter = typestyle_1.style({
    flex: '0 0 auto',
});
exports.emojiPickerFooterWithTopShadow = typestyle_1.style({
    borderTop: "2px solid " + theme_1.colors.N30A,
    boxShadow: shared_styles_1.emojiFooterBoxShadow,
});
//# sourceMappingURL=styles.js.map