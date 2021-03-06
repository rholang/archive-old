import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion, } from '../version.json';
import Chrome from '../Chrome';
import Content from '../Content';
import RemoveButton from '../RemoveButton';
import Before from './styledBefore';
import Container from './styledContainer';
var colorList = [
    'standard',
    'green',
    'blue',
    'red',
    'purple',
    'grey',
    'teal',
    'yellow',
    'greenLight',
    'blueLight',
    'redLight',
    'purpleLight',
    'greyLight',
    'tealLight',
    'yellowLight',
];
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isRemoving: false,
            isRemoved: false,
            markedForRemoval: false,
            isFocused: false,
        };
        _this.handleRemoveRequest = function () {
            if (_this.props.onBeforeRemoveAction && _this.props.onBeforeRemoveAction()) {
                _this.setState({ isRemoving: true, isRemoved: false });
            }
        };
        _this.handleRemoveComplete = function () {
            if (_this.props.onAfterRemoveAction) {
                _this.props.onAfterRemoveAction(_this.props.text);
            }
            _this.setState({ isRemoving: false, isRemoved: true });
        };
        _this.handleHoverChange = function (hoverState) {
            _this.setState({ markedForRemoval: hoverState });
        };
        _this.handleFocusChange = function (focusState) {
            _this.setState({ isFocused: focusState });
        };
        return _this;
    }
    Tag.prototype.render = function () {
        var _this = this;
        var _a = this.state, isFocused = _a.isFocused, isRemoved = _a.isRemoved, isRemoving = _a.isRemoving, markedForRemoval = _a.markedForRemoval;
        var _b = this.props, appearance = _b.appearance, elemBefore = _b.elemBefore, href = _b.href, removeButtonText = _b.removeButtonText, text = _b.text, color = _b.color, linkComponent = _b.linkComponent;
        var safeColor = colorList.includes(color) ? color : 'standard';
        var isRemovable = Boolean(removeButtonText);
        var isRounded = appearance === 'rounded';
        var styled = {
            isFocused: isFocused,
            isRemovable: isRemovable,
            isRemoved: isRemoved,
            isRemoving: isRemoving,
            isRounded: isRounded,
            markedForRemoval: markedForRemoval,
            color: safeColor,
        };
        var onAnimationEnd = function () { return isRemoving && _this.handleRemoveComplete(); };
        return (React.createElement(Container, __assign({}, styled, { onAnimationEnd: onAnimationEnd }),
            React.createElement(Chrome, __assign({}, styled, { isLink: !!href, onFocusChange: this.handleFocusChange }),
                elemBefore ? React.createElement(Before, null, elemBefore) : null,
                React.createElement(Content, __assign({ linkComponent: linkComponent }, styled, { href: href }), text),
                isRemovable ? (React.createElement(RemoveButton, __assign({}, styled, { onHoverChange: this.handleHoverChange, onRemoveAction: this.handleRemoveRequest, removeText: removeButtonText }))) : null)));
    };
    Tag.defaultProps = {
        color: 'standard',
        appearance: 'default',
        elemBefore: null,
        onAfterRemoveAction: function () { },
        onBeforeRemoveAction: function () { return true; },
    };
    return Tag;
}(Component));
export { Tag as TagWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'tag',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onAfterRemoveAction: createAndFireEventOnAtlaskit({
        action: 'removed',
        actionSubject: 'tag',
        attributes: {
            componentName: 'tag',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(Tag));
//# sourceMappingURL=index.js.map