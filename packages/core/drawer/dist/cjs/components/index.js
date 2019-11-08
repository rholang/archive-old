"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var exenv_1 = require("exenv");
var portal_1 = tslib_1.__importDefault(require("@atlaskit/portal"));
var styled_components_1 = require("styled-components");
var react_transition_group_1 = require("react-transition-group");
var analytics_next_1 = require("@atlaskit/analytics-next");
var blanket_1 = tslib_1.__importDefault(require("@atlaskit/blanket"));
var version_json_1 = require("../version.json");
var drawer_item_theme_1 = tslib_1.__importDefault(require("../theme/drawer-item-theme"));
var focus_lock_1 = tslib_1.__importDefault(require("./focus-lock"));
var primitives_1 = tslib_1.__importDefault(require("./primitives"));
var transitions_1 = require("./transitions");
var OnlyChild = function (_a) {
    var children = _a.children;
    return react_1.Children.toArray(children)[0] || null;
};
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
var createAndFireOnClick = function (createAnalyticsEvent, trigger) {
    return createAndFireEventOnAtlaskit({
        action: 'dismissed',
        actionSubject: 'drawer',
        attributes: {
            componentName: 'drawer',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
            trigger: trigger,
        },
    })(createAnalyticsEvent);
};
var DrawerBase = /** @class */ (function (_super) {
    tslib_1.__extends(DrawerBase, _super);
    function DrawerBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            renderPortal: false,
        };
        _this.body = exenv_1.canUseDOM ? document.querySelector('body') : undefined;
        _this.handleBlanketClick = function (event) {
            _this.handleClose(event, 'blanket');
        };
        _this.handleBackButtonClick = function (event) {
            _this.handleClose(event, 'backButton');
        };
        _this.handleClose = function (event, trigger) {
            var _a = _this.props, createAnalyticsEvent = _a.createAnalyticsEvent, onClose = _a.onClose;
            var analyticsEvent = createAnalyticsEvent &&
                createAndFireOnClick(createAnalyticsEvent, trigger);
            if (onClose) {
                onClose(event, analyticsEvent);
            }
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, isOpen = _a.isOpen, onKeyDown = _a.onKeyDown;
            if (event.key === 'Escape' && isOpen) {
                _this.handleClose(event, 'escKey');
            }
            if (onKeyDown) {
                onKeyDown(event);
            }
        };
        return _this;
    }
    DrawerBase.prototype.componentDidMount = function () {
        var isOpen = this.props.isOpen;
        if (isOpen) {
            window.addEventListener('keydown', this.handleKeyDown);
        }
    };
    DrawerBase.prototype.componentWillUnmount = function () {
        window.removeEventListener('keydown', this.handleKeyDown);
    };
    DrawerBase.prototype.componentDidUpdate = function (prevProps) {
        var isOpen = this.props.isOpen;
        if (isOpen !== prevProps.isOpen) {
            if (isOpen) {
                window.addEventListener('keydown', this.handleKeyDown);
            }
            else {
                window.removeEventListener('keydown', this.handleKeyDown);
            }
        }
    };
    DrawerBase.prototype.render = function () {
        if (!this.body) {
            return null;
        }
        var _a = this.props, isOpen = _a.isOpen, children = _a.children, icon = _a.icon, width = _a.width, shouldUnmountOnExit = _a.shouldUnmountOnExit, onCloseComplete = _a.onCloseComplete, autoFocusFirstElem = _a.autoFocusFirstElem, isFocusLockEnabled = _a.isFocusLockEnabled, shouldReturnFocus = _a.shouldReturnFocus;
        return (react_1.default.createElement(react_transition_group_1.Transition, { in: isOpen, timeout: { enter: 0, exit: 220 }, mountOnEnter: true, unmountOnExit: true },
            react_1.default.createElement(portal_1.default, { zIndex: "unset" },
                react_1.default.createElement(react_transition_group_1.TransitionGroup, { component: OnlyChild },
                    react_1.default.createElement(react_1.Fragment, null,
                        react_1.default.createElement(transitions_1.Fade, { in: isOpen },
                            react_1.default.createElement(blanket_1.default, { isTinted: true, onBlanketClicked: this.handleBlanketClick })),
                        react_1.default.createElement(focus_lock_1.default, { autoFocusFirstElem: autoFocusFirstElem, isFocusLockEnabled: isFocusLockEnabled, shouldReturnFocus: shouldReturnFocus },
                            react_1.default.createElement(primitives_1.default, { icon: icon, in: isOpen, onClose: this.handleBackButtonClick, onCloseComplete: onCloseComplete, width: width, shouldUnmountOnExit: shouldUnmountOnExit }, children)))))));
    };
    DrawerBase.defaultProps = {
        width: 'narrow',
        isFocusLockEnabled: true,
        shouldReturnFocus: true,
        autoFocusFirstElem: false,
    };
    return DrawerBase;
}(react_1.Component));
exports.DrawerBase = DrawerBase;
exports.DrawerItemTheme = function (props) { return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: drawer_item_theme_1.default }, props.children)); };
tslib_1.__exportStar(require("./skeletons"), exports);
tslib_1.__exportStar(require("./item-group"), exports);
tslib_1.__exportStar(require("./item"), exports);
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'drawer',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents()(DrawerBase));
//# sourceMappingURL=index.js.map