import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import ChevronUpIcon from '@atlaskit/icon/glyph/chevron-up';
import ChevronDownIcon from '@atlaskit/icon/glyph/chevron-down';
import { name as packageName, version as packageVersion, } from '../../version.json';
import Container, { Description, DismissButton, Icon, Content, Title, Header, } from './styledFlag';
import Expander from '../Expander';
import Actions from '../FlagActions';
import { flagFocusRingColor } from '../../theme';
export var DEFAULT_APPEARANCE = 'normal';
var Flag = /** @class */ (function (_super) {
    __extends(Flag, _super);
    function Flag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isExpanded: false };
        _this.dismissFlag = function () {
            if (_this.props.isDismissAllowed && _this.props.onDismissed) {
                _this.props.onDismissed(_this.props.id);
            }
        };
        _this.isBold = function () { return _this.props.appearance !== DEFAULT_APPEARANCE; };
        _this.toggleExpand = function () {
            _this.setState({ isExpanded: !_this.state.isExpanded });
        };
        _this.renderToggleOrDismissButton = function () {
            var _a = _this.props, appearance = _a.appearance, description = _a.description, actions = _a.actions, isDismissAllowed = _a.isDismissAllowed, onDismissed = _a.onDismissed;
            var isBold = _this.isBold();
            if (!isDismissAllowed ||
                (!isBold && !onDismissed) ||
                (isBold && !description && (!actions || !actions.length))) {
                return null;
            }
            var ChevronIcon = _this.state.isExpanded ? ChevronUpIcon : ChevronDownIcon;
            var ButtonIcon = isBold ? ChevronIcon : CrossIcon;
            var buttonLabel = isBold ? 'Toggle flag body' : 'Dismiss flag';
            var buttonAction = isBold ? _this.toggleExpand : _this.dismissFlag;
            var size = ButtonIcon === ChevronIcon ? 'large' : 'small';
            return (React.createElement(DismissButton, { appearance: appearance, "aria-expanded": _this.state.isExpanded, focusRingColor: flagFocusRingColor(_this.props), onClick: buttonAction, type: "button" },
                React.createElement(ButtonIcon, { label: buttonLabel, size: size })));
        };
        _this.renderBody = function () {
            var _a = _this.props, actions = _a.actions, appearance = _a.appearance, description = _a.description, linkComponent = _a.linkComponent, testId = _a.testId;
            var isExpanded = !_this.isBold() || _this.state.isExpanded;
            return (React.createElement(Expander, { isExpanded: isExpanded },
                description && (React.createElement(Description, { appearance: appearance }, description)),
                React.createElement(Actions, { actions: actions, appearance: appearance, linkComponent: linkComponent, "data-testid": testId })));
        };
        // We prevent default on mouse down to avoid focus ring when the flag is clicked,
        // while still allowing it to be focused with the keyboard.
        _this.handleMouseDown = function (e) {
            e.preventDefault();
        };
        return _this;
    }
    Flag.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var actions = nextProps.actions, description = nextProps.description;
        if (this.isBold() &&
            this.state.isExpanded &&
            !description &&
            (!actions || !actions.length)) {
            this.toggleExpand();
        }
    };
    Flag.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, icon = _a.icon, title = _a.title, onMouseOver = _a.onMouseOver, onFocus = _a.onFocus, onMouseOut = _a.onMouseOut, onBlur = _a.onBlur, testId = _a.testId;
        var autoDismissProps = { onMouseOver: onMouseOver, onFocus: onFocus, onMouseOut: onMouseOut, onBlur: onBlur };
        var OptionalDismissButton = this.renderToggleOrDismissButton;
        var Body = this.renderBody;
        return (React.createElement(Container, __assign({ appearance: appearance, role: "alert", tabIndex: 0, onMouseDown: this.handleMouseDown, "data-testid": testId }, autoDismissProps),
            React.createElement(Header, null,
                React.createElement(Icon, null, icon),
                React.createElement(Title, { appearance: appearance }, title),
                React.createElement(OptionalDismissButton, null)),
            React.createElement(Content, null,
                React.createElement(Body, null))));
    };
    Flag.defaultProps = {
        actions: [],
        appearance: DEFAULT_APPEARANCE,
        isDismissAllowed: false,
    };
    return Flag;
}(Component));
export { Flag as FlagWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'flag',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onBlur: createAndFireEventOnAtlaskit({
        action: 'blurred',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
    onDismissed: createAndFireEventOnAtlaskit({
        action: 'dismissed',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
    onFocus: createAndFireEventOnAtlaskit({
        action: 'focused',
        actionSubject: 'flag',
        attributes: {
            componentName: 'flag',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(Flag));
//# sourceMappingURL=index.js.map