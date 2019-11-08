import { __assign, __extends } from "tslib";
import * as React from 'react';
import { DOMSerializer, } from 'prosemirror-model';
import ReactNodeView from '../../../nodeviews/ReactNodeView';
import { generateColgroup } from '../pm-plugins/table-resizing/utils';
import TableComponent from './TableComponent';
import WithPluginState from '../../../ui/WithPluginState';
import { pluginKey as widthPluginKey } from '../../width';
import { pluginKey, getPluginState } from '../pm-plugins/main';
import { pluginKey as tableResizingPluginKey } from '../pm-plugins/table-resizing/index';
import { contentWidth } from '../pm-plugins/table-resizing/utils';
import { handleBreakoutContent } from '../pm-plugins/table-resizing/commands';
import { pluginConfig as getPluginConfig } from '../index';
import { TableCssClassName as ClassName } from '../types';
import { closestElement, containsClassName } from '../../../utils';
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
        colgroup = ['colgroup', {}].concat(generateColgroup(node));
    }
    return [
        'table',
        tableAttributes(node),
        colgroup,
        ['tbody', 0],
    ];
};
var TableView = /** @class */ (function (_super) {
    __extends(TableView, _super);
    function TableView(props) {
        var _this = _super.call(this, props.node, props.view, props.getPos, props.portalProviderAPI, props) || this;
        _this.resizeForBreakoutContent = function (target) {
            var view = _this.view;
            var elemOrWrapper = closestElement(target, "." + ClassName.TABLE_HEADER_CELL + ", ." + ClassName.TABLE_CELL);
            var minWidth = contentWidth(target, target).minWidth;
            // This can also trigger for a non-resized table.
            if (_this.node && elemOrWrapper && elemOrWrapper.offsetWidth < minWidth) {
                var cellPos = view.posAtDOM(elemOrWrapper, 0);
                var domAtPos = view.domAtPos.bind(view);
                var state = view.state, dispatch = view.dispatch;
                handleBreakoutContent(elemOrWrapper, cellPos - 1, _this.getPos() + 1, minWidth, _this.node, domAtPos)(state, dispatch);
            }
        };
        _this.resizeForExtensionContent = function (target) {
            if (!_this.node) {
                return;
            }
            var view = _this.view;
            var elemOrWrapper = closestElement(target, '.inlineExtensionView-content-wrap, .extensionView-content-wrap');
            if (!elemOrWrapper) {
                return;
            }
            var container = closestElement(target, "." + ClassName.TABLE_HEADER_CELL + ", ." + ClassName.TABLE_CELL);
            if (!container) {
                return;
            }
            if (container.offsetWidth < elemOrWrapper.offsetWidth) {
                var domAtPos = view.domAtPos.bind(view);
                var cellPos = view.posAtDOM(container, 0);
                var state = view.state, dispatch = view.dispatch;
                handleBreakoutContent(container, cellPos - 1, _this.getPos() + 1, elemOrWrapper.offsetWidth, _this.node, domAtPos)(state, dispatch);
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
                    containsClassName(target, ClassName.RESIZE_HANDLE)) {
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
        var rendered = DOMSerializer.renderSpec(document, toDOM(this.node, this.reactComponentProps));
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
        return (React.createElement(WithPluginState, { plugins: {
                containerWidth: widthPluginKey,
                pluginState: pluginKey,
                tableResizingPluginState: tableResizingPluginKey,
            }, editorView: props.view, render: function (pluginStates) { return (React.createElement(TableComponent, __assign({}, props, pluginStates, { node: _this.node, width: pluginStates.containerWidth.width, contentDOM: forwardRef }))); } }));
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
}(ReactNodeView));
export default TableView;
export var createTableView = function (node, view, getPos, portalProviderAPI, options) {
    var pluginConfig = getPluginState(view.state).pluginConfig;
    var allowColumnResizing = getPluginConfig(pluginConfig).allowColumnResizing;
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