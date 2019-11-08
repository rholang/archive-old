"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typestyle_1 = require("typestyle");
var constants_1 = require("../../util/constants");
// Uploader
exports.emojiUploadWidget = typestyle_1.style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    background: 'white',
    height: "120px",
    width: constants_1.emojiPickerWidth + "px",
    marginBottom: '8px',
    minWidth: constants_1.emojiPickerWidth + "px",
    margin: '-10px',
    marginTop: '-16px',
});
/// Footer
exports.emojiUploadFooter = typestyle_1.style({
    flex: '0 0 auto',
});
//# sourceMappingURL=styles.js.map