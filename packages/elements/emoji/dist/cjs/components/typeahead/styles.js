"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
var shared_styles_1 = require("../../util/shared-styles");
exports.selected = 'emoji-typeahead-selected';
exports.emojiTypeAhead = 'emoji-typeahead-element';
exports.typeAheadListContainer = 'emoji-typeahead-list-container';
exports.typeAheadList = typestyle_1.style({
    background: 'white',
    border: "1px solid " + shared_styles_1.noDialogContainerBorderColor,
    borderRadius: shared_styles_1.noDialogContainerBorderRadius,
    boxShadow: shared_styles_1.noDialogContainerBoxShadow,
    color: '#333',
    width: shared_styles_1.emojiTypeAheadWidth,
});
exports.typeAheadEmpty = typestyle_1.style({
    display: 'none',
});
exports.typeAheadItem = typestyle_1.style({
    cursor: 'pointer',
    display: 'block',
    listStyleType: 'none',
    overflow: 'hidden',
    width: shared_styles_1.emojiTypeAheadWidth,
    $nest: (_a = {},
        _a["&." + exports.selected] = {
            backgroundColor: shared_styles_1.emojiPreviewSelectedColor,
        },
        _a),
});
exports.typeAheadItemRow = typestyle_1.style({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    verticalAlign: 'middle',
});
exports.emojiTypeAheadSpinnerContainer = typestyle_1.style({
    position: 'relative',
    height: shared_styles_1.emojiTypeAheadMaxHeight + "px",
    paddingTop: ((shared_styles_1.emojiTypeAheadMaxHeight - 30) / 2).toFixed() + "px",
    boxSizing: 'border-box',
});
exports.emojiTypeAheadSpinner = typestyle_1.style({
    textAlign: 'center',
});
//# sourceMappingURL=styles.js.map