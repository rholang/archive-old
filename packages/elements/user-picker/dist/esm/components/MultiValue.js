import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { AddOptionAvatar } from './AddOptionAvatar';
import { SizeableAvatar } from './SizeableAvatar';
import { messages } from './i18n';
import { getAvatarUrl, isEmail, isGroup } from './utils';
import Tag from '@atlaskit/tag';
import PeopleIcon from '@atlaskit/icon/glyph/people';
import { colors } from '@atlaskit/theme';
export var scrollToValue = function (valueContainer, control) {
    var _a = valueContainer.getBoundingClientRect(), top = _a.top, height = _a.height;
    var controlHeight = control.getBoundingClientRect().height;
    if (top - height < 0) {
        valueContainer.scrollIntoView();
    }
    if (top + height > controlHeight) {
        valueContainer.scrollIntoView(false);
    }
};
var TagContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  button {\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n    }\n  }\n"], ["\n  button {\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n    }\n  }\n"])), colors.B100);
var GroupTagContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding-left: 2px;\n"], ["\n  padding-left: 2px;\n"])));
var MultiValue = /** @class */ (function (_super) {
    __extends(MultiValue, _super);
    function MultiValue(props) {
        var _this = _super.call(this, props) || this;
        _this.getElemBefore = function () {
            var _a = _this.props, _b = _a.data, data = _b.data, label = _b.label, selectProps = _a.selectProps;
            if (isEmail(data)) {
                return selectProps.emailLabel ? (React.createElement(AddOptionAvatar, { size: "small", label: selectProps.emailLabel })) : (React.createElement(FormattedMessage, __assign({}, messages.addEmail), function (label) { return React.createElement(AddOptionAvatar, { size: "small", label: label }); }));
            }
            if (isGroup(data)) {
                return (React.createElement(GroupTagContainer, null,
                    React.createElement(PeopleIcon, { label: "group-icon", size: "small" })));
            }
            return (React.createElement(SizeableAvatar, { appearance: "multi", src: getAvatarUrl(data), name: label }));
        };
        _this.containerRef = React.createRef();
        return _this;
    }
    MultiValue.prototype.componentDidUpdate = function () {
        var isFocused = this.props.isFocused;
        if (isFocused &&
            this.containerRef.current &&
            this.containerRef.current.parentElement &&
            this.containerRef.current.parentElement.parentElement) {
            scrollToValue(this.containerRef.current, this.containerRef.current.parentElement.parentElement);
        }
    };
    MultiValue.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = this.props, _b = _a.data, label = _b.label, data = _b.data, innerProps = _a.innerProps, isFocused = _a.isFocused;
        var _c = nextProps.data, nextLabel = _c.label, nextData = _c.data, nextInnerProps = nextProps.innerProps, nextIsFocused = nextProps.isFocused;
        // We can ignore onRemove here because it is a anonymous function
        // that will recreated every time but with the same implementation.
        return (data !== nextData ||
            label !== nextLabel ||
            innerProps !== nextInnerProps ||
            isFocused !== nextIsFocused);
    };
    MultiValue.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.data, label = _b.label, data = _b.data, innerProps = _a.innerProps, onRemove = _a.removeProps.onClick, isFocused = _a.isFocused, isDisabled = _a.selectProps.isDisabled;
        return (React.createElement("div", { ref: this.containerRef },
            React.createElement(FormattedMessage, __assign({}, messages.remove), function (remove) { return (React.createElement(TagContainer, null,
                React.createElement(Tag, __assign({}, innerProps, { appearance: "rounded", text: label, elemBefore: _this.getElemBefore(), removeButtonText: data.fixed || isDisabled ? undefined : remove, onAfterRemoveAction: onRemove, color: isFocused ? 'blueLight' : undefined })))); })));
    };
    return MultiValue;
}(React.Component));
export { MultiValue };
var templateObject_1, templateObject_2;
//# sourceMappingURL=MultiValue.js.map