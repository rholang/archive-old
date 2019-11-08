"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileListUpdate_1 = require("../../actions/fileListUpdate");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
exports.default = (function (action) {
    if (fileListUpdate_1.isFileListUpdateAction(action)) {
        return [
            {
                name: 'cloudBrowserModal',
                eventType: analytics_gas_types_1.SCREEN_EVENT_TYPE,
                attributes: {
                    cloudType: action.serviceName,
                },
            },
        ];
    }
});
//# sourceMappingURL=fileListUpdateHandler.js.map