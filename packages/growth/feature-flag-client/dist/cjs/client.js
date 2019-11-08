"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var lib_1 = require("./lib");
var tracked_flag_1 = tslib_1.__importDefault(require("./tracked-flag"));
var untracked_flag_1 = tslib_1.__importDefault(require("./untracked-flag"));
var FeatureFlagClient = /** @class */ (function () {
    function FeatureFlagClient(options) {
        var _this = this;
        this.flags = {};
        this.trackedFlags = {};
        this.trackExposure = function (flagKey, flag, exposureData) {
            if (exposureData === void 0) { exposureData = {}; }
            if (_this.trackedFlags[flagKey] ||
                !flag ||
                !flag.explanation ||
                !_this.analyticsHandler) {
                return;
            }
            lib_1.checkForReservedAttributes(exposureData);
            var flagAttributes = {
                flagKey: flagKey,
                reason: flag.explanation.kind,
                ruleId: flag.explanation.ruleId,
                value: flag.value,
            };
            var exposureEvent = {
                action: 'exposed',
                actionSubject: 'feature',
                attributes: Object.assign(exposureData, flagAttributes),
                source: '@atlaskit/feature-flag-client',
            };
            _this.analyticsHandler(exposureEvent);
            _this.trackedFlags[flagKey] = true;
        };
        var flags = options.flags, analyticsHandler = options.analyticsHandler;
        lib_1.enforceAttributes(options, ['analyticsHandler'], 'Feature Flag Client');
        this.setFlags(flags || {});
        this.setAnalyticsHandler(analyticsHandler);
    }
    FeatureFlagClient.prototype.setFlags = function (flags) {
        if (!lib_1.isObject(flags)) {
            return;
        }
        // @ts-ignore
        if (process.env.NODE_ENV !== 'production') {
            lib_1.validateFlags(flags);
        }
        this.flags = tslib_1.__assign(tslib_1.__assign({}, this.flags), flags);
    };
    FeatureFlagClient.prototype.setAnalyticsHandler = function (analyticsHandler) {
        this.analyticsHandler = analyticsHandler;
    };
    FeatureFlagClient.prototype.getFlag = function (flagKey) {
        var flag = this.flags[flagKey];
        if (lib_1.isFlagWithEvaluationDetails(flag)) {
            return new tracked_flag_1.default(flagKey, flag, this.trackExposure);
        }
        if (lib_1.isSimpleFlag(flag)) {
            return new untracked_flag_1.default(flagKey, flag);
        }
        return null;
    };
    FeatureFlagClient.prototype.clear = function () {
        this.flags = {};
        this.trackedFlags = {};
    };
    FeatureFlagClient.prototype.getBooleanValue = function (flagKey, options) {
        lib_1.enforceAttributes(options, ['default'], 'getBooleanValue');
        var getterOptions = tslib_1.__assign({ shouldTrackExposureEvent: true }, options);
        var flag = this.getFlag(flagKey);
        if (!flag) {
            return options.default;
        }
        return flag.getBooleanValue(getterOptions);
    };
    FeatureFlagClient.prototype.getVariantValue = function (flagKey, options) {
        lib_1.enforceAttributes(options, ['default', 'oneOf'], 'getVariantValue');
        var getterOptions = tslib_1.__assign({ shouldTrackExposureEvent: true }, options);
        var flag = this.getFlag(flagKey);
        if (!flag) {
            return options.default;
        }
        return flag.getVariantValue(getterOptions);
    };
    FeatureFlagClient.prototype.getJSONValue = function (flagKey) {
        var flag = this.getFlag(flagKey);
        if (!flag) {
            return {};
        }
        return flag.getJSONValue();
    };
    return FeatureFlagClient;
}());
exports.default = FeatureFlagClient;
//# sourceMappingURL=client.js.map