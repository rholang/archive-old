"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.featureFlagsMap = {};
exports.getFeatureFlag = function (featureName, featureFlags) {
    if (window.localStorage) {
        var devOverride = window.localStorage.getItem(exports.featureFlagsMap[featureName]);
        if (devOverride !== null) {
            // localStorage stores strings only.
            // Every string except 'false' will enable the flag.
            return devOverride !== 'false';
        }
    }
    return Boolean(featureFlags && featureFlags[featureName]);
};
//# sourceMappingURL=getFeatureFlag.js.map