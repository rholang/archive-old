import { __extends, __read, __spread } from "tslib";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AnalyticsReactContext } from './AnalyticsReactContext';
var ContextTypes = {
    getAtlaskitAnalyticsEventHandlers: PropTypes.func,
};
var AnalyticsListener = /** @class */ (function (_super) {
    __extends(AnalyticsListener, _super);
    function AnalyticsListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getChildContext = function () { return ({
            getAtlaskitAnalyticsEventHandlers: _this.getAnalyticsEventHandlers,
        }); };
        _this.getAnalyticsEventHandlers = function () {
            var _a = _this.props, channel = _a.channel, onEvent = _a.onEvent;
            var getAtlaskitAnalyticsEventHandlers = _this.context.getAtlaskitAnalyticsEventHandlers;
            var parentEventHandlers = (typeof getAtlaskitAnalyticsEventHandlers === 'function' &&
                getAtlaskitAnalyticsEventHandlers()) ||
                [];
            var handler = function (event, eventChannel) {
                if (channel === '*' || channel === eventChannel) {
                    onEvent(event, eventChannel);
                }
            };
            return __spread([handler], parentEventHandlers);
        };
        return _this;
    }
    AnalyticsListener.prototype.render = function () {
        var _a = this.context.getAtlaskitAnalyticsContext, getAtlaskitAnalyticsContext = _a === void 0 ? function () { return []; } : _a;
        var children = this.props.children;
        return (React.createElement(AnalyticsReactContext.Provider, { value: {
                getAtlaskitAnalyticsEventHandlers: this.getAnalyticsEventHandlers,
                getAtlaskitAnalyticsContext: getAtlaskitAnalyticsContext,
            } }, children));
    };
    AnalyticsListener.contextTypes = ContextTypes;
    AnalyticsListener.childContextTypes = ContextTypes;
    return AnalyticsListener;
}(Component));
export default AnalyticsListener;
//# sourceMappingURL=AnalyticsListener.js.map