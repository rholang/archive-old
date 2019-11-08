"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var showPopup_1 = require("../../actions/showPopup");
exports.default = (function (action) {
    if (showPopup_1.isShowPopupAction(action)) {
        return [
            {
                name: 'mediaPickerModal',
                eventType: analytics_gas_types_1.SCREEN_EVENT_TYPE,
            },
            {
                name: 'recentFilesBrowserModal',
                eventType: analytics_gas_types_1.SCREEN_EVENT_TYPE,
            },
        ];
    }
});
//# sourceMappingURL=showPopupHandler.js.map