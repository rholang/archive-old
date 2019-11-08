"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var bridge_utils_1 = require("../../bridge-utils");
var DummyBridge = /** @class */ (function () {
    function DummyBridge() {
        this.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log.apply(console, tslib_1.__spread(args));
        };
    }
    DummyBridge.prototype.showMentions = function (query) {
        this.log("showMentions(query=" + query + ")");
    };
    DummyBridge.prototype.dismissMentions = function () {
        this.log('dismissMentions');
    };
    DummyBridge.prototype.updateTextFormat = function (markStates) {
        this.log("updateTextFormat(markStates=" + markStates + ")");
    };
    DummyBridge.prototype.updateText = function (content) {
        this.log("updateText(content=" + content + ")");
    };
    DummyBridge.prototype.submitPromise = function (name, uuid, args) {
        this.log("submitPromise(name=" + name + ", uuid=" + uuid + ", args=" + args + ")");
    };
    DummyBridge.prototype.updateBlockState = function (currentBlockType) {
        this.log("updateBlockState(currentBlockType=" + currentBlockType + ")");
    };
    DummyBridge.prototype.updateListState = function (listState) {
        this.log("updateListState(listState=" + listState + ")");
    };
    DummyBridge.prototype.showStatusPicker = function (text, color, uuid, isNew) {
        this.log("showStatusPicker(text=" + text + ", color=" + color + ", uuid=" + uuid + "), isNew=" + isNew + ")");
    };
    DummyBridge.prototype.dismissStatusPicker = function (isNew) {
        this.log("dismissStatusPicker(isNew=" + isNew + ")");
    };
    DummyBridge.prototype.currentSelection = function (text, url, top, right, bottom, left) {
        this.log("currentSelection(text=" + text + ", url=" + url + ", top=" + top + ", right=" + right + ", bottom=" + bottom + ", left=" + left + ")");
    };
    DummyBridge.prototype.stateChanged = function (canUndo, canRedo) {
        this.log("stateChanged(canUndo=" + canUndo + ", canRedo=" + canRedo + ")");
    };
    DummyBridge.prototype.trackEvent = function (event) {
        this.log("trackEvent(" + event + ")");
    };
    DummyBridge.prototype.call = function (bridge, event) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        bridge_utils_1.sendToBridge.apply(void 0, tslib_1.__spread([bridge, event], args));
    };
    DummyBridge.prototype.updateTextColor = function () { };
    return DummyBridge;
}());
exports.default = DummyBridge;
//# sourceMappingURL=dummy-impl.js.map