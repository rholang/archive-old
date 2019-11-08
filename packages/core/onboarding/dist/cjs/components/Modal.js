"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var modal_dialog_1 = tslib_1.__importDefault(require("@atlaskit/modal-dialog"));
var button_1 = tslib_1.__importStar(require("@atlaskit/button"));
var Modal_1 = require("../styled/Modal");
var theme_1 = require("./theme");
function noop() { }
var OnboardingModal = /** @class */ (function (_super) {
    tslib_1.__extends(OnboardingModal, _super);
    function OnboardingModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerComponent = function (props) {
            var HeaderElement = props.header, src = props.image;
            var ImageElement = function () { return react_1.default.createElement(Modal_1.Image, { alt: "", src: src }); };
            return HeaderElement || ImageElement;
        };
        _this.footerComponent = function (props) {
            var FooterElement = props.footer, actionList = props.actions;
            var ActionsElement = function () {
                return actionList ? (react_1.default.createElement(button_1.Theme.Provider, { value: theme_1.modalButtonTheme },
                    react_1.default.createElement(Modal_1.Actions, null, actionList.map(function (_a, idx) {
                        var text = _a.text, key = _a.key, rest = tslib_1.__rest(_a, ["text", "key"]);
                        var variant = idx ? 'subtle-link' : 'primary';
                        return (react_1.default.createElement(Modal_1.ActionItem, { key: key || (typeof text === 'string' ? text : "" + idx) },
                            react_1.default.createElement(button_1.default, tslib_1.__assign({ appearance: variant, autoFocus: !idx }, rest), text)));
                    })))) : null;
            };
            return FooterElement || ActionsElement;
        };
        return _this;
    }
    OnboardingModal.prototype.render = function () {
        var _a = this.props, actions = _a.actions, children = _a.children, heading = _a.heading, props = tslib_1.__rest(_a, ["actions", "children", "heading"]);
        return (react_1.default.createElement(modal_dialog_1.default, tslib_1.__assign({ autoFocus: true, components: {
                Header: this.headerComponent(this.props),
                Footer: this.footerComponent(this.props),
            }, onClose: noop, scrollBehavior: "outside", shouldCloseOnOverlayClick: false, shouldCloseOnEscapePress: false }, props),
            react_1.default.createElement(Modal_1.Body, null,
                heading && react_1.default.createElement(Modal_1.Heading, null, heading),
                children)));
    };
    return OnboardingModal;
}(react_1.Component));
exports.default = OnboardingModal;
//# sourceMappingURL=Modal.js.map