"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var nodeviews_1 = require("../../../nodeviews");
var Task_1 = tslib_1.__importDefault(require("../ui/Task"));
var WithPluginState_1 = tslib_1.__importDefault(require("../../../ui/WithPluginState"));
var main_1 = require("../pm-plugins/main");
var editor_disabled_1 = require("../../editor-disabled");
var Task = /** @class */ (function (_super) {
    tslib_1.__extends(Task, _super);
    function Task() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnChange = function (taskId, isChecked) {
            var tr = _this.view.state.tr;
            var nodePos = _this.getPos();
            tr.setNodeMarkup(nodePos, undefined, {
                state: isChecked ? 'DONE' : 'TODO',
                localId: taskId,
            });
            _this.view.dispatch(tr);
        };
        /**
         * Dynamically generates analytics data relating to the parent list.
         *
         * Required to be dynamic, as list (in prosemirror model) may have
         * changed (e.g. item movements, or additional items in list).
         * This node view will have not rerendered for those changes, so
         * cannot render the position and listSize into the
         * AnalyticsContext at initial render time.
         */
        _this.addListAnalyticsData = function (event) {
            try {
                var resolvedPos = _this.view.state.doc.resolve(_this.getPos());
                var position_1 = resolvedPos.index();
                var listSize_1 = resolvedPos.parent.childCount;
                var listLocalId_1 = resolvedPos.parent.attrs.localId;
                event.update(function (payload) {
                    var _a = payload.attributes, attributes = _a === void 0 ? {} : _a, actionSubject = payload.actionSubject;
                    if (actionSubject !== 'action') {
                        // Not action related, ignore
                        return payload;
                    }
                    return tslib_1.__assign(tslib_1.__assign({}, payload), { attributes: tslib_1.__assign(tslib_1.__assign({}, attributes), { position: position_1,
                            listSize: listSize_1,
                            listLocalId: listLocalId_1 }) });
                });
            }
            catch (e) {
                // This can occur if pos is NaN (seen it in some test cases)
                // Act defensively here, and lose some analytics data rather than
                // cause any user facing error.
            }
        };
        return _this;
    }
    Task.prototype.isContentEmpty = function (node) {
        return node.content.childCount === 0;
    };
    Task.prototype.createDomRef = function () {
        var domRef = document.createElement('div');
        domRef.style['list-style-type'] = 'none';
        return domRef;
    };
    Task.prototype.getContentDOM = function () {
        return { dom: document.createElement('div') };
    };
    Task.prototype.render = function (props, forwardRef) {
        var _this = this;
        var _a = this.node.attrs, localId = _a.localId, state = _a.state;
        return (React.createElement(analytics_next_1.AnalyticsListener, { channel: "fabric-elements", onEvent: this.addListAnalyticsData },
            React.createElement(WithPluginState_1.default, { plugins: {
                    editorDisabledPlugin: editor_disabled_1.pluginKey,
                    taskDecisionPlugin: main_1.stateKey,
                }, render: function (_a) {
                    var editorDisabledPlugin = _a.editorDisabledPlugin;
                    return (React.createElement(Task_1.default, { taskId: localId, contentRef: forwardRef, isDone: state === 'DONE', onChange: _this.handleOnChange, showPlaceholder: _this.isContentEmpty(_this.node), providers: props.providerFactory, disabled: (editorDisabledPlugin || {}).editorDisabled }));
                } })));
    };
    Task.prototype.viewShouldUpdate = function (nextNode) {
        /**
         * To ensure the placeholder is correctly toggled we need to allow react to re-render
         * on first character insertion.
         * Note: last character deletion is handled externally and automatically re-renders.
         */
        return this.isContentEmpty(this.node) && !!nextNode.content.childCount;
    };
    Task.prototype.update = function (node, decorations) {
        var _this = this;
        return _super.prototype.update.call(this, node, decorations, function (currentNode, newNode) {
            // Toggle the placeholder based on whether user input exists
            return !_this.isContentEmpty(newNode) &&
                !!(currentNode.attrs.state === newNode.attrs.state);
        });
    };
    return Task;
}(nodeviews_1.ReactNodeView));
function taskItemNodeViewFactory(portalProviderAPI, providerFactory) {
    return function (node, view, getPos) {
        return new Task(node, view, getPos, portalProviderAPI, {
            providerFactory: providerFactory,
        }).init();
    };
}
exports.taskItemNodeViewFactory = taskItemNodeViewFactory;
//# sourceMappingURL=taskItem.js.map