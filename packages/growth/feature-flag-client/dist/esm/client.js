import { __assign } from "tslib";
import { isObject, enforceAttributes, isFlagWithEvaluationDetails, isSimpleFlag, validateFlags, checkForReservedAttributes, } from './lib';
import TrackedFlag from './tracked-flag';
import UntrackedFlag from './untracked-flag';
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
            checkForReservedAttributes(exposureData);
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
        enforceAttributes(options, ['analyticsHandler'], 'Feature Flag Client');
        this.setFlags(flags || {});
        this.setAnalyticsHandler(analyticsHandler);
    }
    FeatureFlagClient.prototype.setFlags = function (flags) {
        if (!isObject(flags)) {
            return;
        }
        // @ts-ignore
        if (process.env.NODE_ENV !== 'production') {
            validateFlags(flags);
        }
        this.flags = __assign(__assign({}, this.flags), flags);
    };
    FeatureFlagClient.prototype.setAnalyticsHandler = function (analyticsHandler) {
        this.analyticsHandler = analyticsHandler;
    };
    FeatureFlagClient.prototype.getFlag = function (flagKey) {
        var flag = this.flags[flagKey];
        if (isFlagWithEvaluationDetails(flag)) {
            return new TrackedFlag(flagKey, flag, this.trackExposure);
        }
        if (isSimpleFlag(flag)) {
            return new UntrackedFlag(flagKey, flag);
        }
        return null;
    };
    FeatureFlagClient.prototype.clear = function () {
        this.flags = {};
        this.trackedFlags = {};
    };
    FeatureFlagClient.prototype.getBooleanValue = function (flagKey, options) {
        enforceAttributes(options, ['default'], 'getBooleanValue');
        var getterOptions = __assign({ shouldTrackExposureEvent: true }, options);
        var flag = this.getFlag(flagKey);
        if (!flag) {
            return options.default;
        }
        return flag.getBooleanValue(getterOptions);
    };
    FeatureFlagClient.prototype.getVariantValue = function (flagKey, options) {
        enforceAttributes(options, ['default', 'oneOf'], 'getVariantValue');
        var getterOptions = __assign({ shouldTrackExposureEvent: true }, options);
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
export default FeatureFlagClient;
//# sourceMappingURL=client.js.map