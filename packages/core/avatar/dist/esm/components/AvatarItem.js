import { __assign, __extends, __read, __spread } from "tslib";
import GlobalTheme from '@atlaskit/theme/components';
import React, { cloneElement, Component, } from 'react';
import { propsOmittedFromClickData } from './constants';
import { omit } from '../utils';
import { getBackgroundColor, Content, PrimaryText, SecondaryText, } from '../styled/AvatarItem';
import { getProps, getStyledAvatarItem } from '../helpers';
import { withPseudoState } from '../hoc';
import { ThemeItem } from '../theme/item';
var AvatarItem = /** @class */ (function (_super) {
    __extends(AvatarItem, _super);
    function AvatarItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // expose blur/focus to consumers via ref
        _this.blur = function () {
            if (_this.node)
                _this.node.blur();
        };
        _this.focus = function () {
            if (_this.node)
                _this.node.focus();
        };
        // disallow click on disabled avatars
        _this.guardedClick = function (event) {
            var _a = _this.props, isDisabled = _a.isDisabled, onClick = _a.onClick;
            if (isDisabled || typeof onClick !== 'function')
                return;
            var item = omit.apply(void 0, __spread([_this.props], propsOmittedFromClickData));
            onClick({ item: item, event: event });
        };
        _this.setNode = function (ref) {
            _this.node = ref;
        };
        return _this;
    }
    AvatarItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, avatar = _a.avatar, enableTextTruncate = _a.enableTextTruncate, primaryText = _a.primaryText, secondaryText = _a.secondaryText, href = _a.href, onClick = _a.onClick;
        // distill props from context, props, and state
        var enhancedProps = getProps(this);
        // provide element interface based on props
        var StyledComponent = getStyledAvatarItem(this.props);
        return (React.createElement(GlobalTheme.Consumer, null, function (_a) {
            var mode = _a.mode;
            return (React.createElement(ThemeItem.Provider, { value: _this.props.theme },
                React.createElement(ThemeItem.Consumer, null, function (tokens) {
                    // maintain the illusion of a mask around presence/status
                    var borderColor = getBackgroundColor(__assign(__assign(__assign({}, _this.props), tokens), { mode: mode }));
                    return (React.createElement(StyledComponent, __assign({ innerRef: _this.setNode }, enhancedProps, { isInteractive: !!href || !!onClick, onClick: _this.guardedClick }),
                        React.isValidElement(avatar)
                            ? cloneElement(avatar, { borderColor: borderColor })
                            : null,
                        React.createElement(Content, { truncate: enableTextTruncate },
                            React.createElement(PrimaryText, { truncate: enableTextTruncate }, primaryText),
                            React.createElement(SecondaryText, { truncate: enableTextTruncate }, secondaryText))));
                })));
        }));
    };
    AvatarItem.defaultProps = {
        enableTextTruncate: true,
    };
    return AvatarItem;
}(Component));
export default withPseudoState(AvatarItem);
//# sourceMappingURL=AvatarItem.js.map