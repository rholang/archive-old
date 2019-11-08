"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var AddOptionAvatar_1 = require("./AddOptionAvatar");
var SizeableAvatar_1 = require("./SizeableAvatar");
var i18n_1 = require("./i18n");
var utils_1 = require("./utils");
var tag_1 = tslib_1.__importDefault(require("@atlaskit/tag"));
var people_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/people"));
var theme_1 = require("@atlaskit/theme");
exports.scrollToValue = function (valueContainer, control) {
    var _a = valueContainer.getBoundingClientRect(), top = _a.top, height = _a.height;
    var controlHeight = control.getBoundingClientRect().height;
    if (top - height < 0) {
        valueContainer.scrollIntoView();
    }
    if (top + height > controlHeight) {
        valueContainer.scrollIntoView(false);
    }
};
var TagContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  button {\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n    }\n  }\n"], ["\n  button {\n    &:focus {\n      box-shadow: 0 0 0 2px ", ";\n    }\n  }\n"])), theme_1.colors.B100);
var GroupTagContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  padding-left: 2px;\n"], ["\n  padding-left: 2px;\n"])));
var MultiValue = /** @class */ (function (_super) {
    tslib_1.__extends(MultiValue, _super);
    function MultiValue(props) {
        var _this = _super.call(this, props) || this;
        _this.getElemBefore = function () {
            var _a = _this.props, _b = _a.data, data = _b.data, label = _b.label, selectProps = _a.selectProps;
            if (utils_1.isEmail(data)) {
                return selectProps.emailLabel ? (React.createElement(AddOptionAvatar_1.AddOptionAvatar, { size: "small", label: selectProps.emailLabel })) : (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.addEmail), function (label) { return React.createElement(AddOptionAvatar_1.AddOptionAvatar, { size: "small", label: label }); }));
            }
            if (utils_1.isGroup(data)) {
                return (React.createElement(GroupTagContainer, null,
                    React.createElement(people_1.default, { label: "group-icon", size: "small" })));
            }
            return (React.createElement(SizeableAvatar_1.SizeableAvatar, { appearance: "multi", src: utils_1.getAvatarUrl(data), name: label }));
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
            exports.scrollToValue(this.containerRef.current, this.containerRef.current.parentElement.parentElement);
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
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.remove), function (remove) { return (React.createElement(TagContainer, null,
                React.createElement(tag_1.default, tslib_1.__assign({}, innerProps, { appearance: "rounded", text: label, elemBefore: _this.getElemBefore(), removeButtonText: data.fixed || isDisabled ? undefined : remove, onAfterRemoveAction: onRemove, color: isFocused ? 'blueLight' : undefined })))); })));
    };
    return MultiValue;
}(React.Component));
exports.MultiValue = MultiValue;
var templateObject_1, templateObject_2;
//# sourceMappingURL=MultiValue.js.map