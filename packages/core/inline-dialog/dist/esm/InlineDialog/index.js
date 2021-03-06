import { __extends } from "tslib";
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import NodeResolver from 'react-node-resolver';
import { Manager, Reference, Popper } from '@atlaskit/popper';
import { name as packageName, version as packageVersion, } from '../version.json';
import { Container } from './styled';
var InlineDialog = /** @class */ (function (_super) {
    __extends(InlineDialog, _super);
    function InlineDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickOutside = function (event) {
            var _a = _this.props, isOpen = _a.isOpen, onClose = _a.onClose;
            if (event.defaultPrevented)
                return;
            var container = _this.containerRef;
            var trigger = _this.triggerRef;
            var target = event.target;
            // exit if we click outside but on the trigger — it can handle the clicks itself
            if (trigger && trigger.contains(target))
                return;
            // call onClose if the click originated from outside the dialog
            if (isOpen && container && !container.contains(target)) {
                onClose && onClose({ isOpen: false, event: event });
            }
        };
        return _this;
    }
    InlineDialog.prototype.componentDidUpdate = function (prevProps) {
        if (typeof window === 'undefined')
            return;
        if (!prevProps.isOpen && this.props.isOpen) {
            window.addEventListener('click', this.handleClickOutside, true);
        }
        else if (prevProps.isOpen && !this.props.isOpen) {
            window.removeEventListener('click', this.handleClickOutside);
        }
    };
    InlineDialog.prototype.componentDidMount = function () {
        if (typeof window === 'undefined')
            return;
        if (this.props.isOpen) {
            window.addEventListener('click', this.handleClickOutside, true);
        }
    };
    InlineDialog.prototype.componentWillUnmount = function () {
        if (typeof window === 'undefined')
            return;
        window.removeEventListener('click', this.handleClickOutside);
    };
    InlineDialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, placement = _a.placement, isOpen = _a.isOpen, content = _a.content, onContentBlur = _a.onContentBlur, onContentFocus = _a.onContentFocus, onContentClick = _a.onContentClick, testId = _a.testId;
        var popper = isOpen ? (React.createElement(Popper, { placement: placement }, function (_a) {
            var ref = _a.ref, style = _a.style;
            return (React.createElement(Container, { onBlur: onContentBlur, onFocus: onContentFocus, onClick: onContentClick, innerRef: function (node) {
                    _this.containerRef = node;
                    ref(node);
                }, style: style, "data-testid": testId }, content));
        })) : null;
        return (React.createElement(Manager, null,
            React.createElement(Reference, null, function (_a) {
                var ref = _a.ref;
                return (React.createElement(NodeResolver, { innerRef: function (node) {
                        _this.triggerRef = node;
                        ref(node);
                    } }, children));
            }),
            popper));
    };
    InlineDialog.defaultProps = {
        isOpen: false,
        onContentBlur: function () { },
        onContentClick: function () { },
        onContentFocus: function () { },
        onClose: function () { },
        placement: 'bottom-start',
    };
    return InlineDialog;
}(Component));
export { InlineDialog as InlineDialogWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'inlineDialog',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onClose: createAndFireEventOnAtlaskit({
        action: 'closed',
        actionSubject: 'inlineDialog',
        attributes: {
            componentName: 'inlineDialog',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(InlineDialog));
//# sourceMappingURL=index.js.map