"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var changeService_1 = require("../../actions/changeService");
var _1 = require(".");
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
exports.default = (function (action) {
    if (changeService_1.isChangeServiceAction(action)) {
        if (action.serviceName === 'upload') {
            return [
                tslib_1.__assign(tslib_1.__assign({}, _1.buttonClickPayload), { actionSubjectId: 'uploadButton' }),
                {
                    name: 'recentFilesBrowserModal',
                    eventType: analytics_gas_types_1.SCREEN_EVENT_TYPE,
                },
            ];
        }
        else {
            return [
                tslib_1.__assign(tslib_1.__assign({}, _1.buttonClickPayload), { actionSubjectId: 'cloudBrowserButton', attributes: {
                        cloudType: action.serviceName,
                    } }),
            ];
        }
    }
});
//# sourceMappingURL=changeServiceHandler.js.map