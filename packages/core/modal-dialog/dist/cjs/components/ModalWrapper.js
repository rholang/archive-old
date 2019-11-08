"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var constants_1 = require("@atlaskit/theme/constants");
var portal_1 = tslib_1.__importDefault(require("@atlaskit/portal"));
var ModalTransition_1 = require("./ModalTransition");
var StackConsumer_1 = tslib_1.__importDefault(require("./StackConsumer"));
var Modal_1 = tslib_1.__importDefault(require("./Modal"));
var ModalWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(ModalWrapper, _super);
    function ModalWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onModalClosed = function (onExited) { return function (e) {
            if (onExited) {
                onExited();
            }
            if (_this.props.onCloseComplete) {
                _this.props.onCloseComplete(e);
            }
        }; };
        return _this;
    }
    ModalWrapper.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(ModalTransition_1.ModalTransitionConsumer, null, function (_a) {
            var isOpen = _a.isOpen, onExited = _a.onExited;
            return (react_1.default.createElement(portal_1.default, { zIndex: constants_1.layers.modal() },
                react_1.default.createElement(StackConsumer_1.default, { isOpen: isOpen }, function (naturalStackIndex) { return (react_1.default.createElement(Modal_1.default, tslib_1.__assign({}, _this.props, { isOpen: isOpen, stackIndex: _this.props.stackIndex || naturalStackIndex, onCloseComplete: _this.onModalClosed(onExited) }), _this.props.children)); })));
        }));
    };
    ModalWrapper.defaultProps = {
        autoFocus: true,
        scrollBehavior: 'inside',
        shouldCloseOnEscapePress: true,
        shouldCloseOnOverlayClick: true,
        isChromeless: false,
        width: 'medium',
        isHeadingMultiline: true,
        onClose: function () { },
    };
    return ModalWrapper;
}(react_1.default.Component));
exports.default = ModalWrapper;
//# sourceMappingURL=ModalWrapper.js.map