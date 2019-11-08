"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var react_node_resolver_1 = tslib_1.__importDefault(require("react-node-resolver"));
var popper_1 = require("@atlaskit/popper");
var version_json_1 = require("../version.json");
var styled_1 = require("./styled");
var InlineDialog = /** @class */ (function (_super) {
    tslib_1.__extends(InlineDialog, _super);
    function InlineDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClickOutside = function (event) {
            var _a = _this.props, isOpen = _a.isOpen, onClose = _a.onClose;
            if (event.defaultPrevented)
                return;
            var container = _this.containerRef;
            var trigger = _this.triggerRef;
            var target = event.target;
            // exit if we click outside but on the trigger — it can handle the clicks itself
            if (trigger && trigger.contains(target))
                return;
            // call onClose if the click originated from outside the dialog
            if (isOpen && container && !container.contains(target)) {
                onClose && onClose({ isOpen: false, event: event });
            }
        };
        return _this;
    }
    InlineDialog.prototype.componentDidUpdate = function (prevProps) {
        if (typeof window === 'undefined')
            return;
        if (!prevProps.isOpen && this.props.isOpen) {
            window.addEventListener('click', this.handleClickOutside, true);
        }
        else if (prevProps.isOpen && !this.props.isOpen) {
            window.removeEventListener('click', this.handleClickOutside);
        }
    };
    InlineDialog.prototype.componentDidMount = function () {
        if (typeof window === 'undefined')
            return;
        if (this.props.isOpen) {
            window.addEventListener('click', this.handleClickOutside, true);
        }
    };
    InlineDialog.prototype.componentWillUnmount = function () {
        if (typeof window === 'undefined')
            return;
        window.removeEventListener('click', this.handleClickOutside);
    };
    InlineDialog.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, placement = _a.placement, isOpen = _a.isOpen, content = _a.content, onContentBlur = _a.onContentBlur, onContentFocus = _a.onContentFocus, onContentClick = _a.onContentClick, testId = _a.testId;
        var popper = isOpen ? (react_1.default.createElement(popper_1.Popper, { placement: placement }, function (_a) {
            var ref = _a.ref, style = _a.style;
            return (react_1.default.createElement(styled_1.Container, { onBlur: onContentBlur, onFocus: onContentFocus, onClick: onContentClick, innerRef: function (node) {
                    _this.containerRef = node;
                    ref(node);
                }, style: style, "data-testid": testId }, content));
        })) : null;
        return (react_1.default.createElement(popper_1.Manager, null,
            react_1.default.createElement(popper_1.Reference, null, function (_a) {
                var ref = _a.ref;
                return (react_1.default.createElement(react_node_resolver_1.default, { innerRef: function (node) {
                        _this.triggerRef = node;
                        ref(node);
                    } }, children));
            }),
            popper));
    };
    InlineDialog.defaultProps = {
        isOpen: false,
        onContentBlur: function () { },
        onContentClick: function () { },
        onContentFocus: function () { },
        onClose: function () { },
        placement: 'bottom-start',
    };
    return InlineDialog;
}(react_1.Component));
exports.InlineDialogWithoutAnalytics = InlineDialog;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'inlineDialog',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onClose: createAndFireEventOnAtlaskit({
        action: 'closed',
        actionSubject: 'inlineDialog',
        attributes: {
            componentName: 'inlineDialog',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(InlineDialog));
//# sourceMappingURL=index.js.map