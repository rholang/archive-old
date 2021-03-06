"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
/**
 * Wraps component in a high order component that watches state changes of given plugins
 * and passes those states to the wrapped component.
 *
 * Example:
 * <WithPluginState
 *   eventDispatcher={eventDispatcher}
 *   editorView={editorView}
 *   plugins={{
 *     hyperlink: hyperlinkPluginKey
 *   }}
 *   render={renderComponent}
 * />
 *
 * renderComponent: ({ hyperlink }) => React.Component;
 */
var WithPluginState = /** @class */ (function (_super) {
    tslib_1.__extends(WithPluginState, _super);
    function WithPluginState(props, context) {
        var _this = _super.call(this, props) || this;
        _this.listeners = {};
        _this.debounce = null;
        _this.notAppliedState = {};
        _this.isSubscribed = false;
        _this.state = {};
        _this.handlePluginStateChange = function (propName, skipEqualityCheck) { return function (pluginState) {
            var _a;
            // skipEqualityCheck is being used for old plugins since they are mutating plugin state instead of creating a new one
            if (_this.state[propName] !== pluginState || skipEqualityCheck) {
                _this.updateState((_a = {}, _a[propName] = pluginState, _a));
            }
        }; };
        /**
         * Debounces setState calls in order to reduce number of re-renders caused by several plugin state changes.
         */
        _this.updateState = function (stateSubset) {
            _this.notAppliedState = tslib_1.__assign(tslib_1.__assign({}, _this.notAppliedState), stateSubset);
            if (_this.debounce) {
                window.clearTimeout(_this.debounce);
            }
            _this.debounce = window.setTimeout(function () {
                _this.setState(_this.notAppliedState);
                _this.debounce = null;
                _this.notAppliedState = {};
            }, 0);
        };
        _this.onContextUpdate = function () {
            _this.subscribe(_this.props);
        };
        _this.state = _this.getPluginsStates(props.plugins, _this.getEditorView(props, context));
        return _this;
    }
    WithPluginState.prototype.getEditorView = function (maybeProps, maybeContext) {
        var props = maybeProps || this.props;
        var context = maybeContext || this.context;
        return (props.editorView ||
            (context &&
                context.editorActions &&
                context.editorActions._privateGetEditorView()) ||
            (context &&
                context.editorSharedConfig &&
                context.editorSharedConfig.editorView));
    };
    WithPluginState.prototype.getEventDispatcher = function (maybeProps) {
        var props = maybeProps || this.props;
        return (props.eventDispatcher ||
            (this.context &&
                this.context.editorActions &&
                this.context.editorActions._privateGetEventDispatcher()) ||
            (this.context &&
                this.context.editorSharedConfig &&
                this.context.editorSharedConfig.eventDispatcher));
    };
    WithPluginState.prototype.getPluginsStates = function (plugins, editorView) {
        if (!editorView || !plugins) {
            return {};
        }
        return Object.keys(plugins).reduce(function (acc, propName) {
            var pluginKey = plugins[propName];
            if (!pluginKey) {
                return acc;
            }
            acc[propName] = pluginKey.getState(editorView.state);
            return acc;
        }, {});
    };
    WithPluginState.prototype.subscribe = function (props) {
        var _this = this;
        var plugins = props.plugins;
        var eventDispatcher = this.getEventDispatcher(props);
        var editorView = this.getEditorView(props);
        if (!eventDispatcher || !editorView || this.isSubscribed) {
            return;
        }
        this.isSubscribed = true;
        var pluginsStates = this.getPluginsStates(plugins, editorView);
        this.setState(pluginsStates);
        Object.keys(plugins).forEach(function (propName) {
            var pluginKey = plugins[propName];
            if (!pluginKey) {
                return;
            }
            var pluginState = pluginsStates[propName];
            var isPluginWithSubscribe = pluginState && pluginState.subscribe;
            var handler = _this.handlePluginStateChange(propName, isPluginWithSubscribe);
            if (isPluginWithSubscribe) {
                pluginState.subscribe(handler);
            }
            else {
                eventDispatcher.on(pluginKey.key, handler);
            }
            _this.listeners[pluginKey.key] = { handler: handler, pluginKey: pluginKey };
        });
    };
    WithPluginState.prototype.unsubscribe = function () {
        var _this = this;
        var eventDispatcher = this.getEventDispatcher();
        var editorView = this.getEditorView();
        if (!eventDispatcher || !editorView || !this.isSubscribed) {
            return;
        }
        Object.keys(this.listeners).forEach(function (key) {
            var pluginState = _this.listeners[key].pluginKey.getState(editorView.state);
            if (pluginState && pluginState.unsubscribe) {
                pluginState.unsubscribe(_this.listeners[key].handler);
            }
            else {
                eventDispatcher.off(key, _this.listeners[key].handler);
            }
        });
        this.listeners = [];
    };
    WithPluginState.prototype.subscribeToContextUpdates = function (context) {
        if (context && context.editorActions) {
            context.editorActions._privateSubscribe(this.onContextUpdate);
        }
    };
    WithPluginState.prototype.unsubscribeFromContextUpdates = function (context) {
        if (context && context.editorActions) {
            context.editorActions._privateUnsubscribe(this.onContextUpdate);
        }
    };
    WithPluginState.prototype.componentDidMount = function () {
        this.subscribe(this.props);
        this.subscribeToContextUpdates(this.context);
    };
    WithPluginState.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (!this.isSubscribed) {
            this.subscribe(nextProps);
        }
    };
    WithPluginState.prototype.componentWillUnmount = function () {
        if (this.debounce)
            window.clearTimeout(this.debounce);
        this.unsubscribeFromContextUpdates(this.context);
        this.unsubscribe();
    };
    WithPluginState.prototype.render = function () {
        var render = this.props.render;
        return render(this.state);
    };
    WithPluginState.contextTypes = {
        editorActions: PropTypes.object,
        editorSharedConfig: PropTypes.object,
    };
    return WithPluginState;
}(React.Component));
exports.default = WithPluginState;
//# sourceMappingURL=index.js.map