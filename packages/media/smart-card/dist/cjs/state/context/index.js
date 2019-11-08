"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var provider_1 = require("./provider");
exports.SmartCardProvider = provider_1.SmartCardProvider;
exports.SmartCardContext = react_1.createContext(undefined);
function useSmartLinkContext() {
    var context = react_1.useContext(exports.SmartCardContext);
    if (!context) {
        throw Error('useSmartCard() must be wrapped in <SmartCardProvider>');
    }
    return context;
}
exports.useSmartLinkContext = useSmartLinkContext;
exports.default = exports.SmartCardContext;
//# sourceMappingURL=index.js.map