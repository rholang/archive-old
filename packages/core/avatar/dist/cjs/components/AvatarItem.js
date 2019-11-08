"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var components_1 = tslib_1.__importDefault(require("@atlaskit/theme/components"));
var react_1 = tslib_1.__importStar(require("react"));
var constants_1 = require("./constants");
var utils_1 = require("../utils");
var AvatarItem_1 = require("../styled/AvatarItem");
var helpers_1 = require("../helpers");
var hoc_1 = require("../hoc");
var item_1 = require("../theme/item");
var AvatarItem = /** @class */ (function (_super) {
    tslib_1.__extends(AvatarItem, _super);
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
            var item = utils_1.omit.apply(void 0, tslib_1.__spread([_this.props], constants_1.propsOmittedFromClickData));
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
        var enhancedProps = helpers_1.getProps(this);
        // provide element interface based on props
        var StyledComponent = helpers_1.getStyledAvatarItem(this.props);
        return (react_1.default.createElement(components_1.default.Consumer, null, function (_a) {
            var mode = _a.mode;
            return (react_1.default.createElement(item_1.ThemeItem.Provider, { value: _this.props.theme },
                react_1.default.createElement(item_1.ThemeItem.Consumer, null, function (tokens) {
                    // maintain the illusion of a mask around presence/status
                    var borderColor = AvatarItem_1.getBackgroundColor(tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, _this.props), tokens), { mode: mode }));
                    return (react_1.default.createElement(StyledComponent, tslib_1.__assign({ innerRef: _this.setNode }, enhancedProps, { isInteractive: !!href || !!onClick, onClick: _this.guardedClick }),
                        react_1.default.isValidElement(avatar)
                            ? react_1.cloneElement(avatar, { borderColor: borderColor })
                            : null,
                        react_1.default.createElement(AvatarItem_1.Content, { truncate: enableTextTruncate },
                            react_1.default.createElement(AvatarItem_1.PrimaryText, { truncate: enableTextTruncate }, primaryText),
                            react_1.default.createElement(AvatarItem_1.SecondaryText, { truncate: enableTextTruncate }, secondaryText))));
                })));
        }));
    };
    AvatarItem.defaultProps = {
        enableTextTruncate: true,
    };
    return AvatarItem;
}(react_1.Component));
exports.default = hoc_1.withPseudoState(AvatarItem);
//# sourceMappingURL=AvatarItem.js.map