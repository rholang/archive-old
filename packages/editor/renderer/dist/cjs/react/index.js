"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var prosemirror_model_1 = require("prosemirror-model");
var nodes_1 = require("./nodes");
var marks_1 = require("./marks");
var editor_common_1 = require("@atlaskit/editor-common");
var utils_1 = require("../utils");
function mergeMarks(marksAndNodes) {
    return marksAndNodes.reduce(function (acc, markOrNode) {
        var prev = (acc.length && acc[acc.length - 1]) || null;
        if (markOrNode.type instanceof prosemirror_model_1.MarkType &&
            prev &&
            prev.type instanceof prosemirror_model_1.MarkType &&
            Array.isArray(prev.content) &&
            editor_common_1.isSameMark(prev, markOrNode)) {
            prev.content = mergeMarks(prev.content.concat(markOrNode.content));
        }
        else {
            acc.push(markOrNode);
        }
        return acc;
    }, []);
}
var ReactSerializer = /** @class */ (function () {
    function ReactSerializer(_a) {
        var providers = _a.providers, eventHandlers = _a.eventHandlers, extensionHandlers = _a.extensionHandlers, portal = _a.portal, objectContext = _a.objectContext, appearance = _a.appearance, disableHeadingIDs = _a.disableHeadingIDs, allowDynamicTextSizing = _a.allowDynamicTextSizing, allowHeadingAnchorLinks = _a.allowHeadingAnchorLinks, allowColumnSorting = _a.allowColumnSorting, fireAnalyticsEvent = _a.fireAnalyticsEvent, shouldOpenMediaViewer = _a.shouldOpenMediaViewer;
        this.headingIds = [];
        this.providers = providers;
        this.eventHandlers = eventHandlers;
        this.extensionHandlers = extensionHandlers;
        this.portal = portal;
        this.rendererContext = objectContext;
        this.appearance = appearance;
        this.disableHeadingIDs = disableHeadingIDs;
        this.allowDynamicTextSizing = allowDynamicTextSizing;
        this.allowHeadingAnchorLinks = allowHeadingAnchorLinks;
        this.allowColumnSorting = allowColumnSorting;
        this.fireAnalyticsEvent = fireAnalyticsEvent;
        this.shouldOpenMediaViewer = shouldOpenMediaViewer;
    }
    ReactSerializer.prototype.resetState = function () {
        this.headingIds = [];
    };
    ReactSerializer.prototype.serializeFragment = function (fragment, props, target, key, parentInfo) {
        var _this = this;
        if (props === void 0) { props = {}; }
        if (target === void 0) { target = nodes_1.Doc; }
        if (key === void 0) { key = 'root-0'; }
        // This makes sure that we reset internal state on re-render.
        if (key === 'root-0') {
            this.resetState();
        }
        var content = ReactSerializer.getChildNodes(fragment).map(function (node, index) {
            if (nodes_1.isTextWrapper(node)) {
                return _this.serializeTextWrapper(node.content);
            }
            var props;
            if (node.type.name === 'table') {
                props = _this.getTableProps(node);
            }
            else if (node.type.name === 'date') {
                props = _this.getDateProps(node, parentInfo);
            }
            else if (node.type.name === 'heading') {
                props = _this.getHeadingProps(node, parentInfo && parentInfo.path);
            }
            else if (['tableHeader', 'tableRow'].indexOf(node.type.name) > -1) {
                props = _this.getTableChildrenProps(node);
            }
            else if (node.type.name === 'media') {
                props = _this.getMediaProps(node);
            }
            else {
                props = _this.getProps(node);
            }
            var currentPath = (parentInfo && parentInfo.path) || [];
            var parentIsIncompleteTask = node.type.name === 'taskItem' && node.attrs.state !== 'DONE';
            var pInfo = {
                parentIsIncompleteTask: parentIsIncompleteTask,
                path: tslib_1.__spread(currentPath, [node]),
            };
            var serializedContent = _this.serializeFragment(node.content, props, nodes_1.toReact(node), node.type.name + "-" + index, pInfo);
            if (node.marks && node.marks.length) {
                return []
                    .concat(node.marks)
                    .reverse()
                    .reduce(function (acc, mark) {
                    return _this.renderMark(marks_1.toReact(mark), _this.getMarkProps(mark), mark.type.name + "-" + index, acc);
                }, serializedContent);
            }
            return serializedContent;
        });
        return this.renderNode(target, props, key, content);
    };
    ReactSerializer.prototype.serializeTextWrapper = function (content) {
        var _this = this;
        return ReactSerializer.buildMarkStructure(content).map(function (mark, index) {
            return _this.serializeMark(mark, index);
        });
    };
    ReactSerializer.prototype.serializeMark = function (mark, index) {
        var _this = this;
        if (index === void 0) { index = 0; }
        if (mark.type.name === 'text') {
            return mark.text;
        }
        var content = (mark.content || []).map(function (child, index) { return _this.serializeMark(child, index); });
        return this.renderMark(marks_1.toReact(mark), this.getMarkProps(mark), mark.type.name + "-" + index, content);
    };
    ReactSerializer.prototype.renderNode = function (NodeComponent, props, key, content) {
        return (React.createElement(NodeComponent, tslib_1.__assign({ key: key }, props), content));
    };
    ReactSerializer.prototype.renderMark = function (MarkComponent, props, key, content) {
        return (React.createElement(MarkComponent, tslib_1.__assign({ key: key }, props), content));
    };
    ReactSerializer.prototype.getTableChildrenProps = function (node) {
        return tslib_1.__assign(tslib_1.__assign({}, this.getProps(node)), { allowColumnSorting: this.allowColumnSorting });
    };
    ReactSerializer.prototype.getTableProps = function (node) {
        return tslib_1.__assign(tslib_1.__assign({}, this.getProps(node)), { allowColumnSorting: this.allowColumnSorting, columnWidths: editor_common_1.calcTableColumnWidths(node), tableNode: node });
    };
    ReactSerializer.prototype.getDateProps = function (node, parentInfo) {
        return {
            timestamp: node.attrs && node.attrs.timestamp,
            parentIsIncompleteTask: parentInfo && parentInfo.parentIsIncompleteTask,
        };
    };
    ReactSerializer.prototype.getMediaProps = function (node) {
        return tslib_1.__assign(tslib_1.__assign({}, this.getProps(node)), { shouldOpenMediaViewer: this.shouldOpenMediaViewer });
    };
    ReactSerializer.prototype.getProps = function (node) {
        return tslib_1.__assign({ text: node.text, providers: this.providers, eventHandlers: this.eventHandlers, extensionHandlers: this.extensionHandlers, portal: this.portal, rendererContext: this.rendererContext, serializer: this, content: node.content ? node.content.toJSON() : undefined, allowDynamicTextSizing: this.allowDynamicTextSizing, allowHeadingAnchorLinks: this.allowHeadingAnchorLinks, rendererAppearance: this.appearance, fireAnalyticsEvent: this.fireAnalyticsEvent }, node.attrs);
    };
    ReactSerializer.prototype.headingAnchorSupported = function (path) {
        if (path === void 0) { path = []; }
        return (path.length === 0 || path[path.length - 1].type.name === 'layoutColumn');
    };
    ReactSerializer.prototype.getHeadingProps = function (node, path) {
        if (path === void 0) { path = []; }
        return tslib_1.__assign(tslib_1.__assign({}, node.attrs), { content: node.content ? node.content.toJSON() : undefined, headingId: this.getHeadingId(node), showAnchorLink: this.allowHeadingAnchorLinks &&
                !this.disableHeadingIDs &&
                this.headingAnchorSupported(path) });
    };
    // The return value of this function is NOT url encoded,
    // In HTML5 standard, id can contain any characters, encoding is no necessary.
    // Plus we trying to avoid double encoding, therefore we leave the value as is.
    // Remember to use encodeURIComponent when generating url from the id value.
    ReactSerializer.prototype.getHeadingId = function (node) {
        if (this.disableHeadingIDs || !node.content.size) {
            return;
        }
        // We are not use node.textContent here, because we would like to handle cases where
        // headings only contain inline blocks like emoji, status and date.
        var nodeContent = node.content
            .toJSON()
            .reduce(function (acc, node) { return acc.concat(utils_1.getText(node) || ''); }, '')
            .trim()
            .replace(/\s/g, '-');
        if (!nodeContent) {
            return;
        }
        return this.getUniqueHeadingId(nodeContent);
    };
    ReactSerializer.prototype.getUniqueHeadingId = function (baseId, counter) {
        if (counter === void 0) { counter = 0; }
        if (counter === 0 && this.headingIds.indexOf(baseId) === -1) {
            this.headingIds.push(baseId);
            return baseId;
        }
        else if (counter !== 0) {
            var headingId = baseId + "." + counter;
            if (this.headingIds.indexOf(headingId) === -1) {
                this.headingIds.push(headingId);
                return headingId;
            }
        }
        return this.getUniqueHeadingId(baseId, ++counter);
    };
    ReactSerializer.prototype.getMarkProps = function (mark) {
        var _a = mark.attrs, key = _a.key, otherAttrs = tslib_1.__rest(_a, ["key"]);
        return tslib_1.__assign({ eventHandlers: this.eventHandlers, markKey: key }, otherAttrs);
    };
    ReactSerializer.getChildNodes = function (fragment) {
        var children = [];
        fragment.forEach(function (node) {
            children.push(node);
        });
        return nodes_1.mergeTextNodes(children);
    };
    ReactSerializer.getMarks = function (node) {
        if (!node.marks || node.marks.length === 0) {
            return [];
        }
        return editor_common_1.getMarksByOrder(node.marks);
    };
    ReactSerializer.buildMarkStructure = function (content) {
        var _this = this;
        return mergeMarks(content.map(function (node) {
            var nodeMarks = _this.getMarks(node);
            if (nodeMarks.length === 0) {
                return node;
            }
            return nodeMarks.reverse().reduce(function (acc, mark) {
                var eq = mark.eq;
                return tslib_1.__assign(tslib_1.__assign({}, mark), { eq: eq, content: [acc] });
            }, node);
        }));
    };
    ReactSerializer.fromSchema = function (_schema, _a) {
        var providers = _a.providers, eventHandlers = _a.eventHandlers, extensionHandlers = _a.extensionHandlers, appearance = _a.appearance, disableHeadingIDs = _a.disableHeadingIDs, allowDynamicTextSizing = _a.allowDynamicTextSizing, allowHeadingAnchorLinks = _a.allowHeadingAnchorLinks, allowColumnSorting = _a.allowColumnSorting;
        // TODO: Do we actually need the schema here?
        return new ReactSerializer({
            providers: providers,
            eventHandlers: eventHandlers,
            extensionHandlers: extensionHandlers,
            appearance: appearance,
            disableHeadingIDs: disableHeadingIDs,
            allowDynamicTextSizing: allowDynamicTextSizing,
            allowHeadingAnchorLinks: allowHeadingAnchorLinks,
            allowColumnSorting: allowColumnSorting,
        });
    };
    return ReactSerializer;
}());
exports.default = ReactSerializer;
//# sourceMappingURL=index.js.map