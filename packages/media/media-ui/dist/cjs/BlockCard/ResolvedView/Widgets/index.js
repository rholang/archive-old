"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var badge_1 = tslib_1.__importDefault(require("@atlaskit/badge"));
var lozenge_1 = tslib_1.__importDefault(require("@atlaskit/lozenge"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var ImageIcon_1 = require("../../ImageIcon");
var styled_1 = require("./styled");
var Widgets = /** @class */ (function (_super) {
    tslib_1.__extends(Widgets, _super);
    function Widgets() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Widgets.prototype.renderTitle = function (title) {
        return React.createElement(styled_1.Title, { key: "title" },
            title,
            ":");
    };
    Widgets.prototype.renderIcon = function (icon) {
        if (typeof icon === 'string') {
            return React.createElement(ImageIcon_1.ImageIcon, { key: "icon", src: icon, size: 16 });
        }
        else {
            return icon;
        }
    };
    Widgets.prototype.renderBadge = function (badge) {
        return (React.createElement(badge_1.default, { key: "badge", appearance: badge.appearance || 'default', max: badge.max }, badge.value));
    };
    Widgets.prototype.renderLozenge = function (lozenge) {
        return (React.createElement(lozenge_1.default, { key: "lozenge", appearance: lozenge.appearance || 'default', isBold: lozenge.isBold }, lozenge.text));
    };
    Widgets.prototype.renderText = function (text) {
        return React.createElement(styled_1.Text, { key: "text" }, text);
    };
    Widgets.prototype.renderWidgetDetails = function (attrs, tooltip) {
        if (tooltip) {
            return (React.createElement(tooltip_1.default, { content: tooltip },
                React.createElement(styled_1.WidgetDetails, null, attrs)));
        }
        else {
            return React.createElement(styled_1.WidgetDetails, null, attrs);
        }
    };
    Widgets.prototype.renderWidget = function (key, detail) {
        var title = detail.title, text = detail.text, icon = detail.icon, badge = detail.badge, lozenge = detail.lozenge, tooltip = detail.tooltip;
        var attrs = [];
        if (title) {
            attrs.push(this.renderTitle(title));
        }
        if (icon) {
            attrs.push(this.renderIcon(icon));
        }
        if (badge) {
            attrs.push(this.renderBadge(badge));
        }
        if (lozenge) {
            attrs.push(this.renderLozenge(lozenge));
        }
        if (text) {
            attrs.push(this.renderText(text));
        }
        if (attrs.length === 0) {
            // eslint-disable-next-line
            console.warn("Widgets: A widget doesn't contain any supported attributes: " + JSON.stringify(attrs, null, 2));
            return null;
        }
        return (React.createElement(styled_1.WidgetWrapper, { key: key }, this.renderWidgetDetails(attrs, tooltip)));
    };
    Widgets.prototype.render = function () {
        var _this = this;
        var _a = this.props.details, details = _a === void 0 ? [] : _a;
        if (details.length === 0) {
            return null;
        }
        return (React.createElement(styled_1.Wrapper, null, details.map(function (detail, index) { return _this.renderWidget(index, detail); })));
    };
    return Widgets;
}(React.Component));
exports.default = Widgets;
//# sourceMappingURL=index.js.map