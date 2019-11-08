"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var editor_core_1 = require("@atlaskit/editor-core");
var prosemirror_history_1 = require("prosemirror-history");
var editor_json_transformer_1 = require("@atlaskit/editor-json-transformer");
var web_bridge_1 = tslib_1.__importDefault(require("../../web-bridge"));
var utils_1 = require("../../utils");
var cross_platform_promise_1 = require("../../cross-platform-promise");
var version_json_1 = require("../../version.json");
var WebBridgeImpl = /** @class */ (function (_super) {
    tslib_1.__extends(WebBridgeImpl, _super);
    function WebBridgeImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.textFormatBridgeState = null;
        _this.statusBridgeState = null;
        _this.blockFormatBridgeState = null;
        _this.listBridgeState = null;
        _this.mentionsPluginState = null;
        _this.editorView = null;
        _this.transformer = new editor_json_transformer_1.JSONTransformer();
        _this.editorActions = new editor_core_1.EditorActions();
        _this.mediaMap = new Map();
        return _this;
    }
    WebBridgeImpl.prototype.currentVersion = function () {
        return version_json_1.version;
    };
    WebBridgeImpl.prototype.onBoldClicked = function () {
        if (this.textFormatBridgeState && this.editorView) {
            editor_core_1.toggleStrong()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onItalicClicked = function () {
        if (this.textFormatBridgeState && this.editorView) {
            editor_core_1.toggleEm()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onUnderlineClicked = function () {
        if (this.textFormatBridgeState && this.editorView) {
            editor_core_1.toggleUnderline()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onCodeClicked = function () {
        if (this.textFormatBridgeState && this.editorView) {
            editor_core_1.toggleCode()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onStrikeClicked = function () {
        if (this.textFormatBridgeState && this.editorView) {
            editor_core_1.toggleStrike()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onSuperClicked = function () {
        if (this.textFormatBridgeState && this.editorView) {
            editor_core_1.toggleSuperscript()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onSubClicked = function () {
        if (this.textFormatBridgeState && this.editorView) {
            editor_core_1.toggleSubscript()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onMentionSelect = function (_mention) { };
    WebBridgeImpl.prototype.onMentionPickerResult = function (_result) { };
    WebBridgeImpl.prototype.onMentionPickerDismissed = function () { };
    WebBridgeImpl.prototype.onStatusUpdate = function (text, color, uuid) {
        if (this.statusBridgeState && this.editorView) {
            editor_core_1.updateStatus({
                text: text,
                color: color,
                localId: uuid,
            })(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onStatusPickerDismissed = function () {
        if (this.statusBridgeState && this.editorView) {
            editor_core_1.commitStatusPicker()(this.editorView);
        }
    };
    WebBridgeImpl.prototype.setContent = function (content) {
        if (this.editorActions) {
            this.editorActions.replaceDocument(content, false, false);
        }
    };
    WebBridgeImpl.prototype.clearContent = function () {
        if (this.editorView) {
            var _a = this.editorView, state = _a.state, dispatch = _a.dispatch;
            editor_core_1.clearEditorContent(state, dispatch);
        }
    };
    WebBridgeImpl.prototype.getContent = function () {
        if (!this.editorView) {
            return '';
        }
        // Flush DOM to apply current in flight composition.
        this.flushDOM();
        return JSON.stringify(this.transformer.encode(this.editorView.state.doc));
    };
    WebBridgeImpl.prototype.setTextFormattingStateAndSubscribe = function (state) {
        this.textFormatBridgeState = state;
    };
    WebBridgeImpl.prototype.setTextColor = function (color) {
        if (this.editorView) {
            editor_core_1.changeColor(color)(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onMediaPicked = function (eventName, mediaPayload) {
        if (this.mediaPicker) {
            var payload = JSON.parse(mediaPayload);
            switch (eventName) {
                case 'upload-preview-update': {
                    payload.preview = {
                        dimensions: payload.file.dimensions,
                    };
                    this.mediaPicker.emit('upload-preview-update', payload);
                    return;
                }
                case 'upload-end': {
                    /** emit a mobile-only event */
                    this.mediaPicker.emit('mobile-upload-end', payload);
                    return;
                }
            }
        }
    };
    WebBridgeImpl.prototype.onPromiseResolved = function (uuid, payload) {
        cross_platform_promise_1.resolvePromise(uuid, JSON.parse(payload));
    };
    WebBridgeImpl.prototype.onPromiseRejected = function (uuid) {
        cross_platform_promise_1.rejectPromise(uuid);
    };
    WebBridgeImpl.prototype.onBlockSelected = function (blockType) {
        if (this.editorView) {
            var _a = this.editorView, state = _a.state, dispatch = _a.dispatch;
            editor_core_1.setBlockType(blockType)(state, dispatch);
        }
    };
    WebBridgeImpl.prototype.onOrderedListSelected = function () {
        if (this.listBridgeState && this.editorView) {
            editor_core_1.toggleOrderedList(this.editorView);
        }
    };
    WebBridgeImpl.prototype.onBulletListSelected = function () {
        if (this.listBridgeState && this.editorView) {
            editor_core_1.toggleBulletList(this.editorView);
        }
    };
    WebBridgeImpl.prototype.onIndentList = function () {
        if (this.listBridgeState && this.editorView) {
            editor_core_1.indentList()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onOutdentList = function () {
        if (this.listBridgeState && this.editorView) {
            editor_core_1.outdentList()(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.onLinkUpdate = function (text, url) {
        var _this = this;
        if (!this.editorView) {
            return;
        }
        var _a = this.editorView, state = _a.state, dispatch = _a.dispatch;
        var _b = state.selection, from = _b.from, to = _b.to;
        if (!editor_core_1.isTextAtPos(from)(state)) {
            editor_core_1.insertLink(from, to, url, text)(state, dispatch);
            return;
        }
        // if cursor is on link => modify the whole link
        var _c = editor_core_1.isLinkAtPos(from)(state)
            ? {
                leftBound: from - state.doc.resolve(from).textOffset,
                rightBound: undefined,
            }
            : { leftBound: from, rightBound: to }, leftBound = _c.leftBound, rightBound = _c.rightBound;
        [editor_core_1.setLinkHref(url, leftBound, rightBound)]
            .reduce(function (cmds, setLinkHrefCmd) {
            // if adding link => set link then set link text
            // if removing link => execute the same reversed
            return utils_1.hasValue(url)
                ? tslib_1.__spread([
                    setLinkHrefCmd,
                    editor_core_1.setLinkText(text, leftBound, rightBound)
                ], cmds) : tslib_1.__spread([
                editor_core_1.setLinkText(text, leftBound, rightBound),
                setLinkHrefCmd
            ], cmds);
        }, [])
            .forEach(function (cmd) { return cmd(_this.editorView.state, dispatch); });
    };
    WebBridgeImpl.prototype.insertBlockType = function (type) {
        if (!this.editorView) {
            return;
        }
        var _a = this.editorView, state = _a.state, dispatch = _a.dispatch;
        switch (type) {
            case 'blockquote':
                editor_core_1.insertBlockType('blockquote')(state, dispatch);
                return;
            case 'codeblock':
                editor_core_1.insertBlockType('codeblock')(state, dispatch);
                return;
            case 'panel':
                editor_core_1.insertBlockType('panel')(state, dispatch);
                return;
            case 'action':
                editor_core_1.insertTaskDecision(this.editorView, 'taskList');
                return;
            case 'decision':
                editor_core_1.insertTaskDecision(this.editorView, 'decisionList');
                return;
            case 'table':
                editor_core_1.createTable(state, dispatch);
                return;
            default:
                // eslint-disable-next-line no-console
                console.error(type + " cannot be inserted as it's not supported");
                return;
        }
    };
    WebBridgeImpl.prototype.insertTypeAheadItem = function (type, payload) {
        if (!this.editorView) {
            return;
        }
        this.flushDOM();
        var _a = this.editorView, state = _a.state, dispatch = _a.dispatch;
        var item = JSON.parse(payload);
        editor_core_1.selectItem({
            // TODO export insert type from editor-core.
            selectItem: function (state, item, insert) {
                if (type === 'mention') {
                    var id = item.id, name_1 = item.name, nickname = item.nickname, accessLevel = item.accessLevel, userType = item.userType;
                    var renderName = nickname ? nickname : name_1;
                    var mention = state.schema.nodes.mention.createChecked({
                        text: "@" + renderName,
                        id: id,
                        accessLevel: accessLevel,
                        userType: userType === 'DEFAULT' ? null : userType,
                    });
                    return insert(mention);
                }
                if (type === 'emoji') {
                    var id = item.id, shortName = item.shortName, fallback = item.fallback;
                    var emoji = state.schema.nodes.emoji.createChecked({
                        shortName: shortName,
                        id: id,
                        fallback: fallback,
                        text: fallback || shortName,
                    });
                    return insert(emoji);
                }
                return false;
            },
            // Needed for interface.
            trigger: '',
            getItems: function () { return []; },
        }, item)(state, dispatch);
    };
    WebBridgeImpl.prototype.setFocus = function (force) {
        if (!this.editorView) {
            return false;
        }
        if (this.editorView.hasFocus() && force) {
            /**
             * Forcefully remove focus (we re-focus below), as in some scenarios native views make webview cursors invisble.
             */
            this.editorView.dom.blur();
        }
        this.editorView.focus();
        return true;
    };
    WebBridgeImpl.prototype.scrollToSelection = function () {
        if (!this.editorView) {
            return;
        }
        this.editorView.dispatch(this.editorView.state.tr.scrollIntoView());
    };
    WebBridgeImpl.prototype.undo = function () {
        if (this.editorView) {
            prosemirror_history_1.undo(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.redo = function () {
        if (this.editorView) {
            prosemirror_history_1.redo(this.editorView.state, this.editorView.dispatch);
        }
    };
    WebBridgeImpl.prototype.flushDOM = function () {
        if (!this.editorView) {
            return false;
        }
        /**
         * NOTE: `domObserver` is a private API, it's used as a workaround to forcefully apply current composition
         * when integrators request the content. It doesn't break the users current composing so they may continue
         * to compose the current item.
         * @see ED-5924
         */
        var _a = this.editorView, composing = _a.composing, domObserver = _a.domObserver;
        if (composing && domObserver) {
            domObserver.flush();
            return true;
        }
        return false;
    };
    WebBridgeImpl.prototype.getRootElement = function () {
        return document.querySelector('#editor');
    };
    return WebBridgeImpl;
}(web_bridge_1.default));
exports.default = WebBridgeImpl;
//# sourceMappingURL=implementation.js.map