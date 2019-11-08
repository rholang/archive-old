"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var _1 = require(".");
var startFileBrowser_1 = require("../../actions/startFileBrowser");
exports.default = (function (action) {
    if (startFileBrowser_1.isStartFileBrowserAction(action)) {
        return [
            {
                name: 'localFileBrowserModal',
                eventType: analytics_gas_types_1.SCREEN_EVENT_TYPE,
            },
            tslib_1.__assign(tslib_1.__assign({}, _1.buttonClickPayload), { actionSubjectId: 'localFileBrowserButton' }),
        ];
    }
});
//# sourceMappingURL=startFileBrowserHandler.js.map