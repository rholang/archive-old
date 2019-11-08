"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var chevron_left_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-left-circle"));
var chevron_right_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-right-circle"));
var colors_1 = require("@atlaskit/theme/colors");
var media_ui_1 = require("@atlaskit/media-ui");
var media_ui_2 = require("@atlaskit/media-ui");
var analytics_next_1 = require("@atlaskit/analytics-next");
var styled_1 = require("./styled");
var utils_1 = require("./utils");
var analytics_1 = require("./analytics");
var navigation_1 = require("./analytics/navigation");
var NavigationBase = /** @class */ (function (_super) {
    tslib_1.__extends(NavigationBase, _super);
    function NavigationBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fireAnalytics = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                var ev = createAnalyticsEvent(payload);
                ev.fire(analytics_1.channel);
            }
        };
        return _this;
    }
    NavigationBase.prototype.navigate = function (direction, source) {
        var _this = this;
        return function () {
            var _a = _this.props, onChange = _a.onChange, items = _a.items;
            var selectedIndex = _this.selectedIndex;
            var newItem = direction === 'next'
                ? items[selectedIndex + 1]
                : items[selectedIndex - 1];
            if (newItem) {
                _this.fireAnalytics(navigation_1.createNavigationEvent(direction, source, newItem));
                onChange(newItem);
            }
        };
    };
    Object.defineProperty(NavigationBase.prototype, "selectedIndex", {
        get: function () {
            var _a = this.props, items = _a.items, selectedItem = _a.selectedItem;
            return utils_1.getSelectedIndex(items, selectedItem);
        },
        enumerable: true,
        configurable: true
    });
    NavigationBase.prototype.render = function () {
        var _this = this;
        var items = this.props.items;
        var selectedIndex = this.selectedIndex;
        if (selectedIndex === -1) {
            return null;
        }
        var isLeftVisible = selectedIndex > 0;
        var isRightVisible = selectedIndex < items.length - 1;
        var prev = function (source) { return _this.navigate('prev', source); };
        var next = function (source) { return _this.navigate('next', source); };
        return (React.createElement(styled_1.ArrowsWrapper, null,
            React.createElement(styled_1.LeftWrapper, null, isLeftVisible ? (React.createElement(styled_1.Arrow, { className: media_ui_1.hideControlsClassName },
                React.createElement(media_ui_2.Shortcut, { keyCode: 37, handler: prev('keyboard') }),
                React.createElement(media_ui_1.MediaButton, { onClick: prev('mouse'), iconBefore: React.createElement(chevron_left_circle_1.default, { primaryColor: colors_1.N800, size: "xlarge", label: "Previous" }) }))) : null),
            React.createElement(styled_1.RightWrapper, null, isRightVisible ? (React.createElement(styled_1.Arrow, { className: media_ui_1.hideControlsClassName },
                React.createElement(media_ui_2.Shortcut, { keyCode: 39, handler: next('keyboard') }),
                React.createElement(media_ui_1.MediaButton, { onClick: next('mouse'), iconBefore: React.createElement(chevron_right_circle_1.default, { primaryColor: colors_1.N800, size: "xlarge", label: "Next" }) }))) : null)));
    };
    return NavigationBase;
}(react_1.Component));
exports.NavigationBase = NavigationBase;
exports.Navigation = analytics_next_1.withAnalyticsEvents({})(NavigationBase);
//# sourceMappingURL=navigation.js.map