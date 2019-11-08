"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("@atlaskit/theme/constants");
exports.iframeCSS = function (_a) {
    var loading = _a.loading;
    return ({
        border: 0,
        flex: '1 1 auto',
        height: "calc(100% - " + 3 * constants_1.gridSize() + "px)",
        visibility: loading ? 'hidden' : 'visible',
        width: '100%',
    });
};
exports.spinnerCSS = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: '11.25rem',
};
//# sourceMappingURL=styles.js.map