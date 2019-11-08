"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var prosemirror_model_1 = require("prosemirror-model");
var ReactNodeView_1 = tslib_1.__importDefault(require("../../../nodeviews/ReactNodeView"));
var utils_1 = require("../pm-plugins/table-resizing/utils");
var TableComponent_1 = tslib_1.__importDefault(require("./TableComponent"));
var WithPluginState_1 = tslib_1.__importDefault(require("../../../ui/WithPluginState"));
var width_1 = require("../../width");
var main_1 = require("../pm-plugins/main");
var index_1 = require("../pm-plugins/table-resizing/index");
var utils_2 = require("../pm-plugins/table-resizing/utils");
var commands_1 = require("../pm-plugins/table-resizing/commands");
var index_2 = require("../index");
var types_1 = require("../types");
var utils_3 = require("../../../utils");
var tableAttributes = function (node) {
    return {
        'data-number-column': node.attrs.isNumberColumnEnabled,
        'data-layout': node.attrs.layout,
        'data-autosize': node.attrs.__autoSize,
    };
};
var toDOM = function (node, props) {
    var colgroup = '';
    if (props.allowColumnResizing) {
        // @ts-ignore
        colgroup = ['colgroup', {}].concat(utils_1.generateColgroup(node));
    }
    return [
        'table',
        tableAttributes(node),
        colgroup,
        ['tbody', 0],
    ];
};
var TableView = /** @class */ (function (_super) {
    tslib_1.__extends(TableView, _super);
    function TableView(props) {
        var _this = _super.call(this, props.node, props.view, props.getPos, props.portalProviderAPI, props) || this;
        _this.resizeForBreakoutContent = function (target) {
            var view = _this.view;
            var elemOrWrapper = utils_3.closestElement(target, "." + types_1.TableCssClassName.TABLE_HEADER_CELL + ", ." + types_1.TableCssClassName.TABLE_CELL);
            var minWidth = utils_2.contentWidth(target, target).minWidth;
            // This can also trigger for a non-resized table.
            if (_this.node && elemOrWrapper && elemOrWrapper.offsetWidth < minWidth) {
                var cellPos = view.posAtDOM(elemOrWrapper, 0);
                var domAtPos = view.domAtPos.bind(view);
                var state = view.state, dispatch = view.dispatch;
                commands_1.handleBreakoutContent(elemOrWrapper, cellPos - 1, _this.getPos() + 1, minWidth, _this.node, domAtPos)(state, dispatch);
            }
        };
        _this.resizeForExtensionContent = function (target) {
            if (!_this.node) {
                return;
            }
            var view = _this.view;
            var elemOrWrapper = utils_3.closestElement(target, '.inlineExtensionView-content-wrap, .extensionView-content-wrap');
            if (!elemOrWrapper) {
                return;
            }
            var container = utils_3.closestElement(target, "." + types_1.TableCssClassName.TABLE_HEADER_CELL + ", ." + types_1.TableCssClassName.TABLE_CELL);
            if (!container) {
                return;
            }
            if (container.offsetWidth < elemOrWrapper.offsetWidth) {
                var domAtPos = view.domAtPos.bind(view);
                var cellPos = view.posAtDOM(container, 0);
                var state = view.state, dispatch = view.dispatch;
                commands_1.handleBreakoutContent(container, cellPos - 1, _this.getPos() + 1, elemOrWrapper.offsetWidth, _this.node, domAtPos)(state, dispatch);
            }
        };
        _this.handleMutation = function (records) {
            if (!records.length || !_this.contentDOM) {
                return;
            }
            var uniqueTargets = new Set();
            records.forEach(function (record) {
                var target = record.target;
                // ED-7344: ignore mutations that happen inside anything other than DIV or SPAN elements
                if (['DIV', 'SPAN'].indexOf(target.tagName) === -1 ||
                    utils_3.containsClassName(target, types_1.TableCssClassName.RESIZE_HANDLE)) {
                    return;
                }
                // If we've seen this target already in this set of targets
                // We dont need to reprocess.
                if (!uniqueTargets.has(target)) {
                    _this.resizeForBreakoutContent(target);
                    _this.resizeForExtensionContent(target);
                    uniqueTargets.add(target);
                }
            });
        };
        var MutObserver = window.MutationObserver;
        _this.observer = MutObserver && new MutObserver(_this.handleMutation);
        return _this;
    }
    TableView.prototype.getContentDOM = function () {
        var _this = this;
        var rendered = prosemirror_model_1.DOMSerializer.renderSpec(document, toDOM(this.node, this.reactComponentProps));
        if (rendered.dom) {
            this.table = rendered.dom;
            // Ignore mutation doesn't pick up children updates
            // E.g. inserting a bodiless extension that renders
            // arbitrary nodes (aka macros).
            requestAnimationFrame(function () {
                if (_this.observer) {
                    _this.observer.observe(rendered.dom, {
                        subtree: true,
                        childList: true,
                        attributes: true,
                    });
                }
            });
        }
        return rendered;
    };
    TableView.prototype.setDomAttrs = function (node) {
        var _this = this;
        if (!this.table) {
            return;
        }
        var attrs = tableAttributes(node);
        Object.keys(attrs).forEach(function (attr) {
            _this.table.setAttribute(attr, attrs[attr]);
        });
    };
    TableView.prototype.render = function (props, forwardRef) {
        var _this = this;
        return (React.createElement(WithPluginState_1.default, { plugins: {
                containerWidth: width_1.pluginKey,
                pluginState: main_1.pluginKey,
                tableResizingPluginState: index_1.pluginKey,
            }, editorView: props.view, render: function (pluginStates) { return (React.createElement(TableComponent_1.default, tslib_1.__assign({}, props, pluginStates, { node: _this.node, width: pluginStates.containerWidth.width, contentDOM: forwardRef }))); } }));
    };
    TableView.prototype.ignoreMutation = function () {
        return true;
    };
    TableView.prototype.destroy = function () {
        if (this.observer) {
            this.observer.disconnect();
        }
        _super.prototype.destroy.call(this);
    };
    return TableView;
}(ReactNodeView_1.default));
exports.default = TableView;
exports.createTableView = function (node, view, getPos, portalProviderAPI, options) {
    var pluginConfig = main_1.getPluginState(view.state).pluginConfig;
    var allowColumnResizing = index_2.pluginConfig(pluginConfig).allowColumnResizing;
    return new TableView({
        node: node,
        view: view,
        allowColumnResizing: allowColumnResizing,
        portalProviderAPI: portalProviderAPI,
        getPos: getPos,
        options: options,
    }).init();
};
//# sourceMappingURL=table.js.map