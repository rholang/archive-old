"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("@atlaskit/theme");
var constants_1 = require("../../util/constants");
var shared_styles_1 = require("../../util/shared-styles");
var typestyle_1 = require("typestyle");
exports.selected = 'emoji-common-selected';
exports.selectOnHover = 'emoji-common-select-on-hover';
exports.emojiSprite = 'emoji-common-emoji-sprite';
exports.emojiNode = 'emoji-common-node';
exports.deleteButton = typestyle_1.style({
    // hide by default
    visibility: 'hidden',
    display: 'flex',
    height: '0px',
    // 40px emoji width with 2px left offset
    width: '38px',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // vertically align button and prevent emoji offset
    paddingTop: '4px',
    marginBottom: '-4px',
});
exports.emoji = typestyle_1.style({
    borderRadius: '5px',
    backgroundColor: 'transparent',
    display: 'inline-block',
    verticalAlign: 'middle',
    // Ensure along with vertical align middle, we don't increase the line height for p and some
    // headings. Smaller headings get a slight increase in height, cannot add more negative margin
    // as a "selected" emoji (e.g. in the editor) will not look good.
    margin: '-1px 0',
    $nest: (_a = {},
        _a["&." + exports.selected + ",&." + exports.selectOnHover + ":hover"] = {
            backgroundColor: shared_styles_1.akEmojiSelectedBackgroundColor,
        },
        _a["&." + exports.selected + ",&." + exports.selectOnHover + ":hover ." + exports.deleteButton] = {
            // show delete button on hover
            visibility: 'visible',
        },
        _a.img = {
            display: 'block',
        },
        _a),
});
exports.emojiContainer = typestyle_1.style({
    display: 'inline-block',
    // Ensure along with vertical align middle, we don't increase the line height for h1..h6, and p
    margin: '-1px 0',
    $nest: (_b = {},
        _b["&." + exports.selected + ",&." + exports.selectOnHover + ":hover"] = {
            backgroundColor: shared_styles_1.akEmojiSelectedBackgroundColor,
        },
        _b["." + exports.emojiSprite] = {
            background: 'transparent no-repeat',
            display: 'inline-block',
            verticalAlign: 'middle',
            height: constants_1.defaultEmojiHeight + "px",
            width: constants_1.defaultEmojiHeight + "px",
        },
        _b),
});
exports.placeholder = 'emoji-common-placeholder';
exports.placeholderContainer = typestyle_1.style({
    // Ensure no vertical reflow
    margin: '-1px 0',
    display: 'inline-block',
    background: '#f7f7f7',
    borderRadius: '20%',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
});
exports.placeholderEmoji = typestyle_1.style({
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
});
exports.emojiButton = typestyle_1.style({
    backgroundColor: 'transparent',
    border: '0',
    cursor: 'pointer',
    padding: 0,
    $nest: (_c = {},
        /* Firefox */
        _c['&::-moz-focus-inner'] = {
            border: '0 none',
            padding: 0,
        },
        _c['&>span'] = {
            borderRadius: '5px',
            padding: '8px',
            $nest: (_d = {},
                // Scale sprite to fit regardless of default emoji size
                _d["&>." + exports.emojiSprite] = {
                    height: '24px',
                    width: '24px',
                },
                _d),
        },
        _c),
});
// Emoji Preview
exports.buttons = 'emoji-common-buttons';
exports.preview = 'emoji-common-preview';
exports.previewImg = 'emoji-common-preview-image';
exports.previewText = 'emoji-common-preview-text';
exports.name = 'emoji-common-name';
exports.shortName = 'emoji-common-shortname';
exports.previewSingleLine = 'emoji-common-preview-single-line';
exports.toneSelectorContainer = 'emoji-common-tone-selector-container';
exports.withToneSelector = 'emoji-common-with-tone-selector';
exports.emojiPreviewSection = 'emoji-preview-section';
exports.emojiPreview = typestyle_1.style({
    display: 'flex',
    height: '50px',
    boxSizing: 'border-box',
    $nest: (_e = {},
        _e["." + exports.preview] = {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            padding: '10px',
            $nest: (_f = {},
                _f["." + exports.emojiSprite] = {
                    height: '32px',
                    margin: '0',
                    width: '32px',
                },
                _f["." + exports.previewImg] = {
                    display: 'inline-block',
                    flex: 'initial',
                    width: '32px',
                    $nest: {
                        '&>span': {
                            width: '32px',
                            height: '32px',
                            padding: 0,
                            maxHeight: 'inherit',
                            $nest: {
                                '&>img': {
                                    position: 'relative',
                                    left: '50%',
                                    top: '50%',
                                    transform: 'translateX(-50%) translateY(-50%)',
                                    maxHeight: '32px',
                                    maxWidth: '32px',
                                    padding: 0,
                                    display: 'block',
                                },
                            },
                        },
                    },
                },
                _f["." + exports.previewText] = {
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '10px',
                    marginTop: '-2px',
                    maxWidth: '285px',
                    width: '285px' /* IE */,
                    flexGrow: 1,
                    flexShrink: 1,
                    $nest: (_g = {},
                        _g["." + exports.name] = {
                            display: 'block',
                            color: theme_1.colors.N900,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            $nest: (_h = {},
                                _h['&:first-letter'] = {
                                    textTransform: 'uppercase',
                                },
                                _h),
                        },
                        _g["." + exports.shortName] = {
                            display: 'block',
                            color: theme_1.colors.N200,
                            fontSize: '12px',
                            lineHeight: 1,
                            marginBottom: '-2px',
                            overflow: 'hidden',
                            paddingBottom: '2px',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        },
                        _g),
                },
                _f["." + exports.previewSingleLine] = {
                    paddingTop: '10px',
                    $nest: (_j = {},
                        _j["." + exports.name] = {
                            display: 'none',
                        },
                        _j["." + exports.shortName] = {
                            color: theme_1.colors.N900,
                            fontSize: '14px',
                        },
                        _j),
                },
                _f),
        },
        _e["." + exports.buttons] = {
            flex: 1,
            textAlign: 'right',
            margin: '6px',
        },
        _e["." + exports.toneSelectorContainer] = {
            flex: 1,
            textAlign: 'right',
            margin: '6px',
        },
        _e["." + exports.withToneSelector + " ." + exports.previewText] = {
            maxWidth: '235px',
            width: '235px' /* IE */,
        },
        _e),
});
// Scrollable
exports.emojiScrollable = typestyle_1.style({
    border: '1px solid #fff',
    borderRadius: theme_1.borderRadius() + "px",
    display: 'block',
    margin: '0',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '0',
});
// EmojiUpload
exports.emojiUpload = typestyle_1.style({
    height: '78px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
});
exports.uploadChooseFileMessage = typestyle_1.style({
    color: theme_1.colors.N300,
    fontSize: '12px',
    paddingBottom: '7px',
});
exports.emojiUploadBottom = typestyle_1.style({
    fontSize: '11px',
});
exports.uploadChooseFileRow = typestyle_1.style({
    display: 'flex',
    justifyContent: 'space-between',
});
exports.uploadChooseFileEmojiName = typestyle_1.style({
    flex: '1 1 auto',
    marginRight: '5px',
    $nest: {
        input: {
            background: 'transparent',
            border: 0,
            fontSize: '12px',
            outline: 'none',
            width: '100%',
            height: '22px',
            $nest: (_k = {},
                _k['&:invalid'] = {
                    boxShadow: 'none',
                },
                _k['&::-ms-clear'] = {
                    display: 'none',
                },
                _k),
        },
    },
});
exports.uploadChooseFileBrowse = typestyle_1.style({
    flex: '0 0 auto',
});
exports.uploadPreviewFooter = typestyle_1.style({
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    padding: '10px',
});
exports.uploadPreview = typestyle_1.style({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme_1.colors.N20,
    borderRadius: theme_1.borderRadius() + "px",
    padding: '10px',
});
exports.uploadPreviewText = typestyle_1.style({
    $nest: {
        h5: {
            color: theme_1.colors.N300,
            paddingBottom: '4px',
            fontSize: '12px',
        },
        img: {
            maxHeight: '20px',
            maxWidth: '50px',
        },
    },
});
exports.bigEmojiPreview = typestyle_1.style({
    paddingLeft: '4px',
    $nest: {
        img: {
            maxHeight: '40px',
            maxWidth: '100px',
        },
    },
});
exports.uploadAddRow = typestyle_1.style({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: '10px',
});
exports.AddCustomEmoji = typestyle_1.style({
    alignSelf: 'center',
    marginLeft: '10px',
});
// Emoji Delete preview
exports.submitDelete = 'emoji-submit-delete';
exports.previewButtonGroup = 'emoji-preview-button-group';
exports.deletePreview = typestyle_1.style({
    height: '100px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    fontSize: '12px',
});
exports.deleteText = typestyle_1.style({
    height: '64px',
    $nest: {
        ':first-child': {
            color: theme_1.colors.N300,
            lineHeight: '16px',
        },
    },
});
exports.deleteFooter = typestyle_1.style({
    display: 'flex',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'space-between',
    $nest: (_l = {
            img: {
                maxHeight: '32px',
                maxWidth: '72px',
            }
        },
        _l["." + exports.previewButtonGroup] = {
            display: 'flex',
        },
        _l["." + exports.submitDelete] = {
            width: '84px',
            fontWeight: 'bold',
            marginRight: '4px',
        },
        _l.button = {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '14px',
            $nest: {
                div: {
                    display: 'flex',
                },
            },
        },
        _l),
});
exports.emojiDeleteErrorMessage = typestyle_1.style({
    display: 'flex',
    color: theme_1.colors.R400,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: '4px',
});
exports.emojiChooseFileErrorMessage = typestyle_1.style({
    display: 'flex',
    color: theme_1.colors.R300,
    paddingRight: '10px',
    justifyContent: 'flex-start',
});
exports.emojiPreviewErrorMessage = typestyle_1.style({
    display: 'inline-flex',
    color: theme_1.colors.R400,
    paddingRight: '10px',
    justifyContent: 'flex-end',
    alignItems: 'center',
});
exports.addCustomEmojiButton = typestyle_1.style({
    maxWidth: '285px',
});
exports.uploadRetryButton = typestyle_1.style({
    maxWidth: '172px',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginRight: '4px',
    $nest: {
        div: {
            display: 'flex',
        },
    },
});
exports.uploadEmojiButton = typestyle_1.style({
    maxWidth: '187px',
    justifyContent: 'center',
    marginRight: '4px',
    $nest: {
        div: {
            display: 'flex',
        },
    },
});
exports.cancelButton = typestyle_1.style({
    maxWidth: '100px',
});
exports.buttonSpinner = typestyle_1.style({
    marginRight: '10px',
    marginLeft: '10px',
});
//# sourceMappingURL=styles.js.map