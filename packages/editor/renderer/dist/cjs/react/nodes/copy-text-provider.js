"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
exports.clipboardApiSupported = function () {
    return !!navigator.clipboard && typeof navigator.clipboard.writeText === 'function';
};
// This function is needed for safari and IE.
// This function is a synchronous function, but it is wrapped into a promise
// to be consistent with "copyToClipboard".
exports.copyToClipboardLegacy = function (textToCopy, copyAreaRef) {
    return new Promise(function (resolve, reject) {
        if (copyAreaRef) {
            var textArea = document.createElement('textarea');
            textArea.readOnly = true;
            textArea.defaultValue = textToCopy;
            copyAreaRef.appendChild(textArea);
            textArea.select();
            var wasCopied = document.execCommand('copy');
            copyAreaRef.removeChild(textArea);
            if (wasCopied) {
                resolve();
            }
            else {
                reject('Failed to copy');
            }
        }
        else {
            reject('Copy area reference is not defined');
        }
    });
};
exports.copyToClipboard = function (textToCopy) {
    return new Promise(function (resolve, reject) {
        if (navigator.clipboard &&
            typeof navigator.clipboard.writeText === 'function') {
            navigator.clipboard
                .writeText(textToCopy)
                .then(function () { return resolve(); }, function (e) { return reject(e); });
        }
        else {
            reject('Clipboard api is not supported');
        }
    });
};
var isClipboardApiSupported = exports.clipboardApiSupported();
var CopyTextContext = react_1.default.createContext({
    copyTextToClipboard: function () {
        return new Promise(function (_resolve, reject) {
            return reject('"copyTextToClipboard" is not initialized');
        });
    },
});
exports.CopyTextContext = CopyTextContext;
var Provider = CopyTextContext.Provider, Consumer = CopyTextContext.Consumer;
exports.CopyTextConsumer = Consumer;
exports.CopyArea = react_1.default.forwardRef(function (props, ref) { return (react_1.default.createElement("div", tslib_1.__assign({ ref: ref, style: {
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
    } }, props))); });
var CopyTextProvider = /** @class */ (function (_super) {
    tslib_1.__extends(CopyTextProvider, _super);
    function CopyTextProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.copyAreaRef = react_1.default.createRef();
        _this.copyTextToClipboard = function (textToCopy) {
            if (isClipboardApiSupported) {
                return exports.copyToClipboard(textToCopy);
            }
            else {
                return exports.copyToClipboardLegacy(textToCopy, _this.copyAreaRef.current);
            }
        };
        return _this;
    }
    CopyTextProvider.prototype.render = function () {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            !isClipboardApiSupported && react_1.default.createElement(exports.CopyArea, { ref: this.copyAreaRef }),
            react_1.default.createElement(Provider, { value: {
                    copyTextToClipboard: this.copyTextToClipboard,
                } }, this.props.children)));
    };
    return CopyTextProvider;
}(react_1.default.Component));
exports.CopyTextProvider = CopyTextProvider;
//# sourceMappingURL=copy-text-provider.js.map