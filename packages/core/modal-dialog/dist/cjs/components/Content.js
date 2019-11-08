"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = tslib_1.__importDefault(require("react"));
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var react_scrolllock_1 = tslib_1.__importDefault(require("react-scrolllock"));
var Footer_1 = tslib_1.__importDefault(require("./Footer"));
var Header_1 = tslib_1.__importDefault(require("./Header"));
var Content_1 = require("../styled/Content");
function getInitialState() {
    return {
        showFooterKeyline: false,
        showHeaderKeyline: false,
        tabbableElements: [],
    };
}
var Content = /** @class */ (function (_super) {
    tslib_1.__extends(Content, _super);
    function Content() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.escapeIsHeldDown = false;
        _this._isMounted = false;
        _this.scrollContainer = null;
        _this.state = getInitialState();
        _this.determineKeylines = raf_schd_1.default(function () {
            if (!_this.scrollContainer)
                return;
            var _a = _this.scrollContainer, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
            var scrollableDistance = scrollHeight - clientHeight;
            var showHeaderKeyline = scrollTop > Content_1.keylineHeight;
            var showFooterKeyline = scrollTop <= scrollableDistance - Content_1.keylineHeight;
            _this.setState({ showHeaderKeyline: showHeaderKeyline, showFooterKeyline: showFooterKeyline });
        });
        _this.getScrollContainer = function (ref) {
            if (!ref)
                return;
            _this.scrollContainer = ref;
        };
        _this.handleKeyUp = function () {
            _this.escapeIsHeldDown = false;
        };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, onClose = _a.onClose, shouldCloseOnEscapePress = _a.shouldCloseOnEscapePress, _b = _a.stackIndex, stackIndex = _b === void 0 ? 0 : _b;
            // avoid consumers accidentally closing multiple modals if they hold escape.
            if (_this.escapeIsHeldDown)
                return;
            if (event.key === 'Escape' || event.key === 'Esc')
                _this.escapeIsHeldDown = true;
            // only the foremost modal should be interactive.
            if (!_this._isMounted || stackIndex > 0)
                return;
            switch (event.key) {
                case 'Esc':
                case 'Escape':
                    if (shouldCloseOnEscapePress)
                        onClose(event);
                    break;
                default:
            }
        };
        _this.handleStackChange = function (stackIndex) {
            var onStackChange = _this.props.onStackChange;
            if (onStackChange)
                onStackChange(stackIndex);
        };
        return _this;
    }
    Content.prototype.componentDidMount = function () {
        this._isMounted = true;
        document.addEventListener('keydown', this.handleKeyDown, false);
        document.addEventListener('keyup', this.handleKeyUp, false);
        if (this.scrollContainer) {
            var capturedScrollContainer = this.scrollContainer;
            window.addEventListener('resize', this.determineKeylines, false);
            capturedScrollContainer.addEventListener('scroll', this.determineKeylines, false);
            this.determineKeylines();
        }
        /* eslint-disable no-console */
        // Check for deprecated props
        if (this.props.header)
            console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the header prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead");
        if (this.props.footer)
            console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the footer prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead");
        if (this.props.body)
            console.warn("@atlaskit/modal-dialog: Deprecation warning - Use of the body prop in ModalDialog is deprecated. Please compose your ModalDialog using the 'components' prop instead");
        // Check that custom body components have used ForwardRef to attach to a DOM element
        if (this.props.components.Body) {
            if (!(this.scrollContainer instanceof HTMLElement)) {
                console.warn('@atlaskit/modal-dialog: Warning - Ref must attach to a DOM element; check you are using forwardRef and attaching the ref to an appropriate element. Check the examples for more details.');
            }
        }
        /* eslint-enable no-console */
    };
    Content.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {
        var stackIndex = this.props.stackIndex;
        // update focus scope and let consumer know when stack index has changed
        if (nextProps.stackIndex && nextProps.stackIndex !== stackIndex) {
            this.handleStackChange(nextProps.stackIndex);
        }
    };
    Content.prototype.componentWillUnmount = function () {
        this._isMounted = false;
        document.removeEventListener('keydown', this.handleKeyDown, false);
        document.removeEventListener('keyup', this.handleKeyUp, false);
        if (this.scrollContainer) {
            var capturedScrollContainer = this.scrollContainer;
            window.removeEventListener('resize', this.determineKeylines, false);
            capturedScrollContainer.removeEventListener('scroll', this.determineKeylines, false);
        }
    };
    Content.prototype.render = function () {
        var _a = this.props, actions = _a.actions, appearance = _a.appearance, DeprecatedBody = _a.body, children = _a.children, components = _a.components, footer = _a.footer, header = _a.header, heading = _a.heading, isChromeless = _a.isChromeless, isHeadingMultiline = _a.isHeadingMultiline, onClose = _a.onClose, shouldScroll = _a.shouldScroll, testId = _a.testId;
        var _b = this.state, showFooterKeyline = _b.showFooterKeyline, showHeaderKeyline = _b.showHeaderKeyline;
        var _c = components.Container, Container = _c === void 0 ? 'div' : _c, CustomBody = components.Body;
        var Body = CustomBody || DeprecatedBody || Content_1.Body;
        return (core_1.jsx(Container, { css: Content_1.wrapperStyles, "data-testid": testId },
            isChromeless ? (children) : (core_1.jsx(react_1.default.Fragment, null,
                core_1.jsx(Header_1.default, { appearance: appearance, component: components.Header ? components.Header : header, heading: heading, onClose: onClose, isHeadingMultiline: isHeadingMultiline, showKeyline: showHeaderKeyline }),
                core_1.jsx(Body, tslib_1.__assign({ css: Content_1.bodyStyles(shouldScroll) }, (!Body.hasOwnProperty('styledComponentId')
                    ? { ref: this.getScrollContainer }
                    : { innerRef: this.getScrollContainer })), children),
                core_1.jsx(Footer_1.default, { actions: actions, appearance: appearance, component: components.Footer ? components.Footer : footer, onClose: onClose, showKeyline: showFooterKeyline }))),
            core_1.jsx(react_scrolllock_1.default, null)));
    };
    Content.defaultProps = {
        autoFocus: false,
        components: {},
        isChromeless: false,
        stackIndex: 0,
        isHeadingMultiline: true,
    };
    return Content;
}(react_1.default.Component));
exports.default = Content;
//# sourceMappingURL=Content.js.map