"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var searchGiphy_1 = require("../../actions/searchGiphy");
exports.default = (function (action) {
    if (searchGiphy_1.isSearchGiphyAction(action)) {
        return [
            {
                name: 'cloudBrowserModal',
                eventType: analytics_gas_types_1.SCREEN_EVENT_TYPE,
                attributes: {
                    cloudType: 'giphy',
                },
            },
        ];
    }
});
//# sourceMappingURL=searchGiphyHandler.js.map