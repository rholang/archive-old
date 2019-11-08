"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var startAuth_1 = require("../../actions/startAuth");
var _1 = require(".");
exports.default = (function (action) {
    if (startAuth_1.isStartAuthAction(action)) {
        return [
            tslib_1.__assign(tslib_1.__assign({}, _1.buttonClickPayload), { actionSubjectId: 'linkCloudAccountButton', attributes: {
                    cloudType: action.serviceName,
                } }),
        ];
    }
});
//# sourceMappingURL=startAuthHandler.js.map