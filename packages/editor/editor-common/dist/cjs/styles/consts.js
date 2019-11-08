"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme_1 = require("@atlaskit/theme");
var B100 = theme_1.colors.B100, B300 = theme_1.colors.B300, B400 = theme_1.colors.B400, B50 = theme_1.colors.B50, B75 = theme_1.colors.B75, N0 = theme_1.colors.N0, N20 = theme_1.colors.N20, N40 = theme_1.colors.N40, N50 = theme_1.colors.N50, N100 = theme_1.colors.N100, N500 = theme_1.colors.N500, N700 = theme_1.colors.N700, N900 = theme_1.colors.N900, R300 = theme_1.colors.R300, R400 = theme_1.colors.R400, R50 = theme_1.colors.R50, R75 = theme_1.colors.R75, DN50 = theme_1.colors.DN50, DN70 = theme_1.colors.DN70;
exports.akEditorCodeFontFamily = theme_1.codeFontFamily();
exports.akEditorInactiveForeground = N500;
exports.akEditorFocus = B100;
exports.akEditorSubtleAccent = N40;
exports.akEditorActiveBackground = N500;
exports.akEditorActiveForeground = N0;
exports.akEditorBlockquoteBorderColor = N40;
exports.akEditorDropdownActiveBackground = N900;
exports.akEditorPopupBackground = N700;
exports.akEditorPopupText = B50;
exports.akEditorPrimaryButton = B400;
exports.akEditorCodeBackground = N20;
exports.akEditorCodeBlockPadding = '12px';
exports.akEditorCodeInlinePadding = '2px 4px';
exports.akEditorDeleteBackground = R50;
exports.akEditorDeleteBackgroundShaded = R50;
exports.akEditorDeleteBorder = R300;
exports.akEditorDeleteIconColor = R400;
exports.akEditorSelectedBorder = B300;
exports.akEditorSelectedIconColor = B400;
exports.akEditorSelectedBorderSize = 1;
exports.akEditorSelectedBorderBoldSize = 2;
exports.akEditorUnitZIndex = 1;
exports.akEditorSmallZIndex = 2;
exports.akEditorGridLineZIndex = 9999;
// z-index for main menu bar -
// this is highest as it should be above anything else in editor below.
exports.akEditorMenuZIndex = theme_1.layers.blanket();
// z-index used for floating toolbars like code block, table etc
exports.akEditorFloatingPanelZIndex = theme_1.layers.layer();
// z-index used for pickers (date, emoji, mentions) and type-aheads, hyperlinks
exports.akEditorFloatingDialogZIndex = exports.akEditorFloatingPanelZIndex + 10;
// z-index used for floating toolbars table cell menu which are above block toolbars
exports.akEditorFloatingOverlapPanelZIndex = exports.akEditorFloatingPanelZIndex + 5;
exports.akEditorMentionSelected = N100;
exports.akEditorTableToolbarSize = 11;
exports.akEditorTableBorder = N50;
exports.akEditorTableBorderDark = DN70;
exports.akEditorTableToolbar = N20;
exports.akEditorTableToolbarDark = DN50;
exports.akEditorTableFloatingControls = N20;
exports.akEditorTableCellSelected = B75;
exports.akEditorTableToolbarSelected = B100;
exports.akEditorTableBorderSelected = B300;
exports.akEditorTableCellDelete = R50;
exports.akEditorTableBorderDelete = R300;
exports.akEditorTableToolbarDelete = R75;
exports.akEditorTableBorderRadius = '3px';
exports.akEditorTableCellBackgroundOpacity = 0.5;
exports.akEditorFullPageMaxWidth = 680;
exports.akEditorDefaultLayoutWidth = 680;
exports.akEditorWideLayoutWidth = 960;
exports.akEditorFullWidthLayoutWidth = 1800;
exports.akEditorTableNumberColumnWidth = 42;
exports.akEditorBreakoutPadding = 96;
exports.akEditorGutterPadding = 32;
exports.akEditorMobileBreakoutPoint = 720;
exports.akEditorTableCellMinWidth = 48;
exports.akEditorTableLegacyCellMinWidth = 128;
exports.akEditorMediaResizeHandlerPaddingWide = 12;
exports.akEditorMediaResizeHandlerPadding = 4;
exports.gridMediumMaxWidth = 1024;
exports.breakoutWideScaleRatio = 1.33;
exports.editorFontSize = function (_a) {
    var theme = _a.theme;
    return theme && theme.baseFontSize ? theme.baseFontSize : theme_1.fontSize();
};
exports.relativeSize = function (multiplier) { return function (_a) {
    var theme = _a.theme;
    return exports.editorFontSize({ theme: theme }) * multiplier;
}; };
// @see typography spreadsheet: https://docs.google.com/spreadsheets/d/1iYusRGCT4PoPfvxbJ8NrgjtfFgXLm5lpDWXzjua1W2E/edit#gid=93913128
exports.blockNodesVerticalMargin = 1.143;
//# sourceMappingURL=consts.js.map