"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var exenv_1 = require("exenv");
var analytics_next_1 = require("@atlaskit/analytics-next");
var blanket_1 = tslib_1.__importDefault(require("@atlaskit/blanket"));
var version_json_1 = require("../version.json");
var shared_variables_1 = require("../shared-variables");
var Modal_1 = require("../styled/Modal");
var Animation_1 = require("./Animation");
var Content_1 = tslib_1.__importDefault(require("./Content"));
var FocusLock_1 = tslib_1.__importDefault(require("./FocusLock"));
var Positioner_1 = tslib_1.__importDefault(require("./Positioner"));
function getScrollDistance() {
    return (window.pageYOffset ||
        (document.documentElement && document.documentElement.scrollTop) ||
        (document.body && document.body.scrollTop) ||
        0);
}
var Modal = /** @class */ (function (_super) {
    tslib_1.__extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dialogNode: null,
            scrollDistance: exenv_1.canUseDOM ? getScrollDistance() : 0,
            isExiting: false,
        };
        /* Prevent window from being scrolled programatically so that the modal is positioned correctly
         * and to prevent scrollIntoView from scrolling the window.
         */
        _this.handleWindowScroll = function () {
            if (getScrollDistance() !== _this.state.scrollDistance) {
                window.scrollTo(window.pageXOffset, _this.state.scrollDistance);
            }
        };
        _this.handleOverlayClick = function (e) {
            if (_this.props.shouldCloseOnOverlayClick) {
                _this.props.onClose(e);
            }
        };
        return _this;
    }
    Modal.prototype.componentDidMount = function () {
        var scrollDistance = getScrollDistance();
        if (getScrollDistance() !== this.state.scrollDistance) {
            // eslint-disable-next-line react/no-did-mount-set-state
            this.setState({ scrollDistance: scrollDistance });
        }
        window.addEventListener('scroll', this.handleWindowScroll);
    };
    Modal.prototype.componentWillUnmount = function () {
        window.removeEventListener('scroll', this.handleWindowScroll);
    };
    Modal.prototype.render = function () {
        var _this = this;
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, autoFocus = _a.autoFocus, body = _a.body, children = _a.children, components = _a.components, footer = _a.footer, header = _a.header, height = _a.height, isChromeless = _a.isChromeless, isHeadingMultiline = _a.isHeadingMultiline, isOpen = _a.isOpen, onClose = _a.onClose, onCloseComplete = _a.onCloseComplete, onOpenComplete = _a.onOpenComplete, onStackChange = _a.onStackChange, shouldCloseOnEscapePress = _a.shouldCloseOnEscapePress, stackIndex = _a.stackIndex, heading = _a.heading, width = _a.width, scrollBehavior = _a.scrollBehavior, testId = _a.testId;
        var scrollDistance = this.state.scrollDistance;
        var isBackground = stackIndex != null && stackIndex > 0;
        // If a custom width (number or percentage) is supplied, set inline style
        // otherwise allow styled component to consume as named prop
        var widthName = width
            ? shared_variables_1.WIDTH_ENUM.values.indexOf(width.toString()) !== -1
                ? width
                : undefined
            : undefined;
        var widthValue = widthName ? undefined : width;
        return (react_1.default.createElement(Animation_1.Animation, { in: isOpen, onExited: onCloseComplete, onEntered: onOpenComplete, stackIndex: stackIndex }, function (_a) {
            var fade = _a.fade, slide = _a.slide;
            return (react_1.default.createElement(Modal_1.FillScreen, { style: fade, "aria-hidden": isBackground, scrollDistance: scrollDistance },
                react_1.default.createElement(FocusLock_1.default, { isEnabled: stackIndex === 0 && isOpen, autoFocus: autoFocus },
                    react_1.default.createElement(blanket_1.default, { isTinted: true, onBlanketClicked: _this.handleOverlayClick }),
                    react_1.default.createElement(Positioner_1.default, { style: slide, scrollBehavior: scrollBehavior, widthName: widthName, widthValue: widthValue },
                        react_1.default.createElement(Modal_1.Dialog, { heightValue: height, isChromeless: isChromeless, role: "dialog", "data-testid": testId, tabIndex: -1 },
                            react_1.default.createElement(Content_1.default, { actions: actions, appearance: appearance, components: components, footer: footer, heading: heading, isHeadingMultiline: isHeadingMultiline, header: header, onClose: onClose, shouldScroll: scrollBehavior === 'inside', shouldCloseOnEscapePress: shouldCloseOnEscapePress, onStackChange: onStackChange, isChromeless: isChromeless, stackIndex: stackIndex, body: body }, children))))));
        }));
    };
    Modal.defaultProps = {
        autoFocus: true,
        scrollBehavior: 'inside',
        shouldCloseOnEscapePress: true,
        shouldCloseOnOverlayClick: true,
        isChromeless: false,
        isOpen: true,
        stackIndex: 0,
        width: 'medium',
        isHeadingMultiline: true,
        onClose: function () { },
    };
    return Modal;
}(react_1.default.Component));
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.ModalDialogWithoutAnalytics = Modal;
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'modalDialog',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onClose: createAndFireEventOnAtlaskit({
        action: 'closed',
        actionSubject: 'modalDialog',
        attributes: {
            componentName: 'modalDialog',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Modal));
//# sourceMappingURL=Modal.js.map