"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var exenv = tslib_1.__importStar(require("exenv"));
exports.default = {
    version: exenv.canUseDOM && window.VERSION,
    html: {
        redirectUrl: 'https://api.media.atlassian.com/picker/static/link-account-handler.html',
    },
};
//# sourceMappingURL=config.js.map