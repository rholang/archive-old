import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { whichTransitionEvent } from '../../utils';
var PluginsComponentsWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var PluginSlot = /** @class */ (function (_super) {
    __extends(PluginSlot, _super);
    function PluginSlot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.transitionEvent = whichTransitionEvent();
        _this.forceComponentUpdate = function (event) {
            // Only trigger an update if the transition is on a property containing `width`
            // This will cater for media and the content area itself currently.
            if (event.propertyName.includes('width')) {
                _this.forceUpdate();
            }
        };
        _this.removeModeChangeListener = function (contentArea) {
            if (contentArea && _this.transitionEvent) {
                contentArea.removeEventListener(_this.transitionEvent, _this.forceComponentUpdate);
            }
        };
        _this.addModeChangeListener = function (contentArea) {
            if (contentArea && _this.transitionEvent) {
                /**
                 * Update the plugin components once the transition
                 * to full width / default mode completes
                 */
                contentArea.addEventListener(_this.transitionEvent, _this.forceComponentUpdate);
            }
        };
        return _this;
    }
    PluginSlot.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = this.props, editorView = _a.editorView, editorActions = _a.editorActions, items = _a.items, providerFactory = _a.providerFactory, eventDispatcher = _a.eventDispatcher, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, containerElement = _a.containerElement, disabled = _a.disabled;
        return !(nextProps.editorView === editorView &&
            nextProps.editorActions === editorActions &&
            nextProps.items === items &&
            nextProps.providerFactory === providerFactory &&
            nextProps.eventDispatcher === eventDispatcher &&
            nextProps.popupsMountPoint === popupsMountPoint &&
            nextProps.popupsBoundariesElement === popupsBoundariesElement &&
            nextProps.popupsScrollableElement === popupsScrollableElement &&
            nextProps.containerElement === containerElement &&
            nextProps.disabled === disabled);
    };
    PluginSlot.prototype.componentDidMount = function () {
        this.addModeChangeListener(this.props.contentArea);
    };
    PluginSlot.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        if (this.props.contentArea !== nextProps.contentArea) {
            this.removeModeChangeListener(this.props.contentArea);
            this.addModeChangeListener(nextProps.contentArea);
        }
    };
    PluginSlot.prototype.componentWillUnmount = function () {
        this.removeModeChangeListener(this.props.contentArea);
    };
    PluginSlot.prototype.render = function () {
        var _a = this.props, items = _a.items, editorView = _a.editorView, editorActions = _a.editorActions, eventDispatcher = _a.eventDispatcher, providerFactory = _a.providerFactory, appearance = _a.appearance, popupsMountPoint = _a.popupsMountPoint, popupsBoundariesElement = _a.popupsBoundariesElement, popupsScrollableElement = _a.popupsScrollableElement, containerElement = _a.containerElement, disabled = _a.disabled, dispatchAnalyticsEvent = _a.dispatchAnalyticsEvent;
        if (!items || !editorView) {
            return null;
        }
        return (React.createElement(PluginsComponentsWrapper, null, items.map(function (component, key) {
            var props = { key: key };
            var element = component({
                editorView: editorView,
                editorActions: editorActions,
                eventDispatcher: eventDispatcher,
                providerFactory: providerFactory,
                dispatchAnalyticsEvent: dispatchAnalyticsEvent,
                appearance: appearance,
                popupsMountPoint: popupsMountPoint,
                popupsBoundariesElement: popupsBoundariesElement,
                popupsScrollableElement: popupsScrollableElement,
                containerElement: containerElement,
                disabled: disabled,
            });
            return element && React.cloneElement(element, props);
        })));
    };
    return PluginSlot;
}(React.Component));
export default PluginSlot;
var templateObject_1;
//# sourceMappingURL=index.js.map