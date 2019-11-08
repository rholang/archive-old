"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bridge_utils_1 = require("../../bridge-utils");
var IosBridge = /** @class */ (function () {
    function IosBridge() {
    }
    IosBridge.prototype.showMentions = function (query) {
        if (window.webkit && window.webkit.messageHandlers.mentionBridge) {
            window.webkit.messageHandlers.mentionBridge.postMessage({
                name: 'showMentions',
                query: query,
            });
        }
    };
    IosBridge.prototype.dismissMentions = function () {
        if (window.webkit && window.webkit.messageHandlers.mentionBridge) {
            window.webkit.messageHandlers.mentionBridge.postMessage({
                name: 'dismissMentions',
            });
        }
    };
    IosBridge.prototype.updateTextFormat = function (markStates) {
        if (window.webkit && window.webkit.messageHandlers.textFormatBridge) {
            window.webkit.messageHandlers.textFormatBridge.postMessage({
                name: 'updateTextFormat',
                states: markStates,
            });
        }
    };
    IosBridge.prototype.updateText = function (content) {
        if (window.webkit && window.webkit.messageHandlers.textFormatBridge) {
            window.webkit.messageHandlers.textFormatBridge.postMessage({
                name: 'updateText',
                query: content,
            });
        }
    };
    IosBridge.prototype.getServiceHost = function () {
        if (window.mediaBridge) {
            return window.mediaBridge.getServiceHost();
        }
        else {
            // ¯\_(ツ)_/¯ ugly, I know, but we need this data, and don't want call native side
            return 'http://www.atlassian.com';
        }
    };
    IosBridge.prototype.getCollection = function () {
        if (window.mediaBridge) {
            return window.mediaBridge.getCollection();
        }
        else {
            // ¯\_(ツ)_/¯ @see #getServiceHost()
            return 'FabricMediaSampleCollection';
        }
    };
    IosBridge.prototype.submitPromise = function (name, uuid, args) {
        if (window.webkit && window.webkit.messageHandlers.promiseBridge) {
            window.webkit.messageHandlers.promiseBridge.postMessage({
                name: 'submitPromise',
                promise: {
                    name: name,
                    uuid: uuid,
                },
                args: args,
            });
        }
    };
    IosBridge.prototype.updateBlockState = function (currentBlockType) {
        if (window.webkit && window.webkit.messageHandlers.blockFormatBridge) {
            window.webkit.messageHandlers.blockFormatBridge.postMessage({
                name: 'updateBlockState',
                states: currentBlockType,
            });
        }
    };
    IosBridge.prototype.updateListState = function (listState) {
        if (window.webkit && window.webkit.messageHandlers.listBridge) {
            window.webkit.messageHandlers.listBridge.postMessage({
                name: 'updateListState',
                states: listState,
            });
        }
    };
    IosBridge.prototype.showStatusPicker = function (text, color, uuid, isNew) {
        if (window.webkit && window.webkit.messageHandlers.statusBridge) {
            window.webkit.messageHandlers.statusBridge.postMessage({
                name: 'showStatusPicker',
                text: text,
                color: color,
                uuid: uuid,
                isNew: isNew,
            });
        }
    };
    IosBridge.prototype.dismissStatusPicker = function (isNew) {
        if (window.webkit && window.webkit.messageHandlers.statusBridge) {
            window.webkit.messageHandlers.statusBridge.postMessage({
                name: 'dismissStatusPicker',
                isNew: isNew,
            });
        }
    };
    IosBridge.prototype.currentSelection = function (text, url, top, right, bottom, left) {
        if (window.webkit && window.webkit.messageHandlers.linkBridge) {
            window.webkit.messageHandlers.linkBridge.postMessage({
                name: 'currentSelection',
                text: text,
                url: url,
                top: top,
                right: right,
                bottom: bottom,
                left: left,
            });
        }
    };
    IosBridge.prototype.stateChanged = function (canUndo, canRedo) {
        if (window.webkit && window.webkit.messageHandlers.undoRedoBridge) {
            window.webkit.messageHandlers.undoRedoBridge.postMessage({
                name: 'stateChanged',
                canUndo: canUndo,
                canRedo: canRedo,
            });
        }
    };
    IosBridge.prototype.trackEvent = function (event) {
        if (window.webkit && window.webkit.messageHandlers.analyticsBridge) {
            window.webkit.messageHandlers.analyticsBridge.postMessage({
                name: 'trackEvent',
                event: event,
            });
        }
    };
    IosBridge.prototype.call = function (bridge, event) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        bridge_utils_1.sendToBridge.apply(void 0, tslib_1.__spread([bridge, event], args));
    };
    IosBridge.prototype.updateTextColor = function () { };
    return IosBridge;
}());
exports.default = IosBridge;
//# sourceMappingURL=ios-impl.js.map