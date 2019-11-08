"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var Chrome_1 = tslib_1.__importDefault(require("../Chrome"));
var Content_1 = tslib_1.__importDefault(require("../Content"));
var RemoveButton_1 = tslib_1.__importDefault(require("../RemoveButton"));
var styledBefore_1 = tslib_1.__importDefault(require("./styledBefore"));
var styledContainer_1 = tslib_1.__importDefault(require("./styledContainer"));
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
    tslib_1.__extends(Tag, _super);
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
        return (react_1.default.createElement(styledContainer_1.default, tslib_1.__assign({}, styled, { onAnimationEnd: onAnimationEnd }),
            react_1.default.createElement(Chrome_1.default, tslib_1.__assign({}, styled, { isLink: !!href, onFocusChange: this.handleFocusChange }),
                elemBefore ? react_1.default.createElement(styledBefore_1.default, null, elemBefore) : null,
                react_1.default.createElement(Content_1.default, tslib_1.__assign({ linkComponent: linkComponent }, styled, { href: href }), text),
                isRemovable ? (react_1.default.createElement(RemoveButton_1.default, tslib_1.__assign({}, styled, { onHoverChange: this.handleHoverChange, onRemoveAction: this.handleRemoveRequest, removeText: removeButtonText }))) : null)));
    };
    Tag.defaultProps = {
        color: 'standard',
        appearance: 'default',
        elemBefore: null,
        onAfterRemoveAction: function () { },
        onBeforeRemoveAction: function () { return true; },
    };
    return Tag;
}(react_1.Component));
exports.TagWithoutAnalytics = Tag;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'tag',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onAfterRemoveAction: createAndFireEventOnAtlaskit({
        action: 'removed',
        actionSubject: 'tag',
        attributes: {
            componentName: 'tag',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Tag));
//# sourceMappingURL=index.js.map