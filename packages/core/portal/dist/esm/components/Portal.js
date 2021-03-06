import { __extends } from "tslib";
import React from 'react';
import ReactDOM from 'react-dom';
import invariant from 'tiny-invariant';
import { canUseDOM } from 'exenv';
import { layers } from '@atlaskit/theme';
import { PORTAL_MOUNT_EVENT, PORTAL_UNMOUNT_EVENT } from '../constants';
var createContainer = function (zIndex) {
    var container = document.createElement('div');
    container.setAttribute('class', 'atlaskit-portal');
    container.setAttribute('style', "z-index: " + zIndex + ";");
    return container;
};
var getBody = function () {
    invariant(document && document.body, 'cannot find document.body');
    return document.body;
};
var zIndexToName = Object.keys(layers).reduce(function (acc, name) {
    var value = layers[name]();
    acc[value] = name;
    return acc;
}, {});
var getLayerName = function (zIndex) {
    return Object.prototype.hasOwnProperty.call(zIndexToName, zIndex)
        ? zIndexToName[zIndex]
        : null;
};
var getEvent = function (eventName, zIndex) {
    var detail = {
        layer: getLayerName(Number(zIndex)),
        zIndex: zIndex,
    };
    // In ie11 the CustomEvent object exists, but it cannot be used as a constructor
    if (typeof CustomEvent === 'function') {
        return new CustomEvent(eventName, {
            detail: detail,
        });
    }
    // CustomEvent constructor API not supported (ie11)
    // Using `new Event` or `new CustomEvent` does not work in ie11
    var event = document.createEvent('CustomEvent');
    var params = {
        bubbles: true,
        cancellable: true,
        detail: detail,
    };
    event.initCustomEvent(eventName, params.bubbles, params.cancellable, params.detail);
    return event;
};
var firePortalEvent = function (eventName, zIndex) {
    var event = getEvent(eventName, zIndex);
    window.dispatchEvent(event);
};
var getPortalParent = function () {
    var parentElement = document.querySelector('body > .atlaskit-portal-container');
    if (!parentElement) {
        var parent_1 = document.createElement('div');
        parent_1.setAttribute('class', 'atlaskit-portal-container');
        parent_1.setAttribute('style', "display: flex;");
        getBody().appendChild(parent_1);
        return parent_1;
    }
    return parentElement;
};
// This is a generic component does two things:
// 1. Portals it's children using React.createPortal
// 2. Creates the DOM node container for the portal based on props
// 3. Ensures DOM the container creates it's own stacking context
var Portal = /** @class */ (function (_super) {
    __extends(Portal, _super);
    function Portal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            container: canUseDOM ? createContainer(_this.props.zIndex) : undefined,
            portalIsMounted: false,
        };
        return _this;
    }
    Portal.prototype.componentDidUpdate = function (prevProps, prevState) {
        var container = this.state.container;
        var zIndex = this.props.zIndex;
        if (container && prevProps.zIndex !== zIndex) {
            var newContainer = createContainer(zIndex);
            getPortalParent().replaceChild(container, newContainer);
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ container: newContainer });
        }
        else if (!prevState.container && container) {
            // SSR path
            getPortalParent().appendChild(container);
        }
    };
    Portal.prototype.componentDidMount = function () {
        var container = this.state.container;
        var zIndex = this.props.zIndex;
        if (container) {
            getPortalParent().appendChild(container);
        }
        else {
            // SSR path
            var newContainer = createContainer(zIndex);
            // eslint-disable-next-line react/no-did-mount-set-state
            this.setState({ container: newContainer });
        }
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
            portalIsMounted: true,
        });
        firePortalEvent(PORTAL_MOUNT_EVENT, Number(zIndex));
    };
    Portal.prototype.componentWillUnmount = function () {
        var container = this.state.container;
        var zIndex = this.props.zIndex;
        if (container) {
            getPortalParent().removeChild(container);
            // clean up parent element if there are no more portals
            var portals = !!document.querySelector('body > .atlaskit-portal-container > .atlaskit-portal');
            if (!portals) {
                getBody().removeChild(getPortalParent());
            }
        }
        firePortalEvent(PORTAL_UNMOUNT_EVENT, Number(zIndex));
    };
    Portal.prototype.render = function () {
        var _a = this.state, container = _a.container, portalIsMounted = _a.portalIsMounted;
        return container && portalIsMounted
            ? ReactDOM.createPortal(this.props.children, container)
            : null;
    };
    Portal.defaultProps = {
        zIndex: 0,
    };
    return Portal;
}(React.Component));
export default Portal;
//# sourceMappingURL=Portal.js.map