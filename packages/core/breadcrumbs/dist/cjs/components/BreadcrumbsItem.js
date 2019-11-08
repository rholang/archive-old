"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_dom_1 = tslib_1.__importDefault(require("react-dom"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var version_json_1 = require("../version.json");
var BreadcrumbsItem_1 = tslib_1.__importDefault(require("../styled/BreadcrumbsItem"));
var Button_1 = tslib_1.__importDefault(require("../styled/Button"));
var Separator_1 = tslib_1.__importDefault(require("../styled/Separator"));
var BreadcrumbsItem = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbsItem, _super);
    function BreadcrumbsItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // eslint-disable-line react/sort-comp
        _this.button = null;
        _this.state = { hasOverflow: false };
        _this.renderButton = function () {
            var _a = _this.props, href = _a.href, iconAfter = _a.iconAfter, iconBefore = _a.iconBefore, onClick = _a.onClick, target = _a.target, text = _a.text, truncationWidth = _a.truncationWidth, component = _a.component, testId = _a.testId;
            var hasOverflow = _this.state.hasOverflow;
            return (
            // @ts-ignore - 31052019 VBZ - this shouldn't exist right?
            react_1.default.createElement(Button_1.default, { truncationWidth: truncationWidth, appearance: "subtle-link", iconAfter: truncationWidth && hasOverflow ? undefined : iconAfter, iconBefore: truncationWidth && hasOverflow ? undefined : iconBefore, onClick: onClick, spacing: "none", href: href, target: target, ref: function (el) {
                    _this.button = el;
                }, component: component, analyticsContext: {
                    componentName: 'breadcrumbsItem',
                    packageName: version_json_1.name,
                    packageVersion: version_json_1.version,
                }, testId: testId }, text));
        };
        _this.renderButtonWithTooltip = function () { return (react_1.default.createElement(tooltip_1.default, { content: _this.props.text, position: "bottom" }, _this.renderButton())); };
        return _this;
    }
    BreadcrumbsItem.prototype.componentDidMount = function () {
        this.updateOverflow();
    };
    BreadcrumbsItem.prototype.UNSAFE_componentWillReceiveProps = function () {
        // Reset the state
        this.setState({ hasOverflow: false });
    };
    BreadcrumbsItem.prototype.componentDidUpdate = function () {
        this.updateOverflow();
    };
    BreadcrumbsItem.prototype.updateOverflow = function () {
        var truncationWidth = this.props.truncationWidth;
        var button = this.button;
        if (truncationWidth && button) {
            // We need to find the DOM node for the button component in order to measure its size.
            var el = react_dom_1.default.findDOMNode(button); // eslint-disable-line react/no-find-dom-node
            if (!el || !(el instanceof HTMLElement)) {
                // eslint-disable-next-line no-console
                console.warn('Could not find button included in breadcrumb when calculating overflow');
                return false;
            }
            var overflow = el.clientWidth >= truncationWidth;
            if (overflow !== this.state.hasOverflow) {
                this.setState({ hasOverflow: overflow });
            }
            return overflow;
        }
        return false;
    };
    BreadcrumbsItem.prototype.render = function () {
        var _a = this.props, hasSeparator = _a.hasSeparator, truncationWidth = _a.truncationWidth;
        var hasOverflow = this.state.hasOverflow;
        return (react_1.default.createElement(BreadcrumbsItem_1.default, null,
            hasOverflow && truncationWidth
                ? this.renderButtonWithTooltip()
                : this.renderButton(),
            hasSeparator ? react_1.default.createElement(Separator_1.default, null, "/") : null));
    };
    BreadcrumbsItem.defaultProps = {
        hasSeparator: false,
        href: '#',
        truncationWidth: 0,
        onClick: function () { },
    };
    return BreadcrumbsItem;
}(react_1.default.Component));
exports.BreadcrumbsItemWithoutAnalytics = BreadcrumbsItem;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsEvents({
    onClick: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'breadcrumbsItem',
        attributes: {
            componentName: 'breadcrumbsItem',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(BreadcrumbsItem);
//# sourceMappingURL=BreadcrumbsItem.js.map