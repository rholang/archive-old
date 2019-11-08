"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var prop_types_1 = tslib_1.__importDefault(require("prop-types"));
var UIAnalyticsEvent_1 = tslib_1.__importDefault(require("./UIAnalyticsEvent"));
/**
 * This component is used to grab the analytics functions off context.
 * It uses legacy context, but provides an API similar to 16.3 context.
 * This makes it easier to use with the forward ref API.
 */
var AnalyticsContextConsumer = /** @class */ (function (_super) {
    tslib_1.__extends(AnalyticsContextConsumer, _super);
    function AnalyticsContextConsumer(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Store references to the original and patched event props so we can
         * determine when to update the patched props
         */
        _this.originalEventProps = {};
        _this.patchedEventProps = {};
        // Update patched event props only if the original props have changed
        _this.updatePatchedEventProps = function (props) {
            var changedPropCallbacks = Object.keys(_this.props.createEventMap).filter(function (p) { return _this.originalEventProps[p] !== props[p]; });
            if (changedPropCallbacks.length > 0) {
                _this.patchedEventProps = tslib_1.__assign(tslib_1.__assign({}, _this.patchedEventProps), _this.mapCreateEventsToProps(changedPropCallbacks, props));
                changedPropCallbacks.forEach(function (p) {
                    _this.originalEventProps[p] = props[p];
                });
            }
            return _this.patchedEventProps;
        };
        _this.mapCreateEventsToProps = function (changedPropNames, props) {
            return changedPropNames.reduce(function (modified, propCallbackName) {
                var _a;
                var eventCreator = _this.props.createEventMap[propCallbackName];
                var providedCallback = props[propCallbackName];
                if (!['object', 'function'].includes(typeof eventCreator)) {
                    return modified;
                }
                var modifiedCallback = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var analyticsEvent = typeof eventCreator === 'function'
                        ? eventCreator(_this.createAnalyticsEvent, props)
                        : _this.createAnalyticsEvent(eventCreator);
                    if (providedCallback) {
                        providedCallback.apply(void 0, tslib_1.__spread(args, [analyticsEvent]));
                    }
                };
                return tslib_1.__assign(tslib_1.__assign({}, modified), (_a = {}, _a[propCallbackName] = modifiedCallback, _a));
            }, {});
        };
        _this.createAnalyticsEvent = function (payload) {
            var _a = _this.context, getAtlaskitAnalyticsEventHandlers = _a.getAtlaskitAnalyticsEventHandlers, getAtlaskitAnalyticsContext = _a.getAtlaskitAnalyticsContext;
            return new UIAnalyticsEvent_1.default({
                context: (typeof getAtlaskitAnalyticsContext === 'function' &&
                    getAtlaskitAnalyticsContext()) ||
                    [],
                handlers: (typeof getAtlaskitAnalyticsEventHandlers === 'function' &&
                    getAtlaskitAnalyticsEventHandlers()) ||
                    [],
                payload: payload,
            });
        };
        Object.keys(_this.props.createEventMap).forEach(function (p) {
            _this.originalEventProps[p] = props.wrappedComponentProps[p];
        });
        _this.patchedEventProps = _this.mapCreateEventsToProps(Object.keys(_this.props.createEventMap), props.wrappedComponentProps);
        return _this;
    }
    AnalyticsContextConsumer.prototype.render = function () {
        var patchedEventProps = this.updatePatchedEventProps(this.props.wrappedComponentProps);
        return this.props.children({
            createAnalyticsEvent: this.createAnalyticsEvent,
            patchedEventProps: patchedEventProps,
        });
    };
    AnalyticsContextConsumer.contextTypes = {
        getAtlaskitAnalyticsEventHandlers: prop_types_1.default.func,
        getAtlaskitAnalyticsContext: prop_types_1.default.func,
    };
    AnalyticsContextConsumer.defaultProps = {
        createEventMap: {},
    };
    return AnalyticsContextConsumer;
}(react_1.default.Component));
exports.default = AnalyticsContextConsumer;
//# sourceMappingURL=AnalyticsContextConsumer.js.map