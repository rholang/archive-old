import { __assign, __extends } from "tslib";
import React from 'react';
export var clipboardApiSupported = function () {
    return !!navigator.clipboard && typeof navigator.clipboard.writeText === 'function';
};
// This function is needed for safari and IE.
// This function is a synchronous function, but it is wrapped into a promise
// to be consistent with "copyToClipboard".
export var copyToClipboardLegacy = function (textToCopy, copyAreaRef) {
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
export var copyToClipboard = function (textToCopy) {
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
var isClipboardApiSupported = clipboardApiSupported();
var CopyTextContext = React.createContext({
    copyTextToClipboard: function () {
        return new Promise(function (_resolve, reject) {
            return reject('"copyTextToClipboard" is not initialized');
        });
    },
});
var Provider = CopyTextContext.Provider, Consumer = CopyTextContext.Consumer;
export var CopyArea = React.forwardRef(function (props, ref) { return (React.createElement("div", __assign({ ref: ref, style: {
        position: 'absolute',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
    } }, props))); });
var CopyTextProvider = /** @class */ (function (_super) {
    __extends(CopyTextProvider, _super);
    function CopyTextProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.copyAreaRef = React.createRef();
        _this.copyTextToClipboard = function (textToCopy) {
            if (isClipboardApiSupported) {
                return copyToClipboard(textToCopy);
            }
            else {
                return copyToClipboardLegacy(textToCopy, _this.copyAreaRef.current);
            }
        };
        return _this;
    }
    CopyTextProvider.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            !isClipboardApiSupported && React.createElement(CopyArea, { ref: this.copyAreaRef }),
            React.createElement(Provider, { value: {
                    copyTextToClipboard: this.copyTextToClipboard,
                } }, this.props.children)));
    };
    return CopyTextProvider;
}(React.Component));
export { CopyTextProvider };
export { Consumer as CopyTextConsumer };
export { CopyTextContext };
//# sourceMappingURL=copy-text-provider.js.map