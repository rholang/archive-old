"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var adf_schema_1 = require("@atlaskit/adf-schema");
var prosemirror_utils_1 = require("prosemirror-utils");
var WithPluginState_1 = tslib_1.__importDefault(require("../../ui/WithPluginState"));
var commands_1 = require("./commands");
var react_nodeview_1 = require("../../plugins/base/pm-plugins/react-nodeview");
var utils_1 = require("../../utils");
var utils_2 = require("./utils");
/**
 * Re-orders the annotation array based on the order in the document.
 *
 * This places the marks that do not appear in the surrounding nodes
 * higher in the list. That is, the inner-most one appears first.
 *
 * Undo, for example, can re-order annotation marks in the document.
 * @param annotations annotation metadata
 * @param $from location to look around (usually the selection)
 */
var reorderAnnotations = function (annotations, $from) {
    var idSet = utils_2.surroundingMarks($from).map(utils_2.filterAnnotationIds);
    annotations.sort(function (a, b) {
        return utils_1.sum(idSet, function (ids) { return ids.indexOf(a.id); }) -
            utils_1.sum(idSet, function (ids) { return ids.indexOf(b.id); });
    });
};
var annotationPlugin = function (annotationProvider) { return ({
    name: 'annotation',
    marks: function () {
        return [
            {
                name: 'annotation',
                mark: adf_schema_1.annotation,
            },
        ];
    },
    contentComponent: function (_a) {
        var editorView = _a.editorView;
        var annotationMarkType = editorView.state.schema.marks.annotation;
        if (!annotationProvider) {
            return null;
        }
        var Component = annotationProvider.component;
        if (!Component) {
            return null;
        }
        return (React.createElement(WithPluginState_1.default, { plugins: {
                selectionState: react_nodeview_1.stateKey,
            }, render: function () {
                var state = editorView.state;
                var _a = state.selection, from = _a.from, $from = _a.$from;
                var node = state.doc.nodeAt(from);
                if (!node) {
                    return null;
                }
                var annotationsMarks = node.marks.filter(function (mark) { return mark.type === annotationMarkType; });
                if (!annotationsMarks.length) {
                    return null;
                }
                var annotations = annotationsMarks.map(function (mark) { return ({
                    id: mark.attrs.id,
                    type: mark.attrs.annotationType,
                }); });
                // re-order to handle nested annotations
                reorderAnnotations(annotations, $from);
                var dom = prosemirror_utils_1.findDomRefAtPos(from, editorView.domAtPos.bind(editorView));
                return (React.createElement(Component, { annotations: annotations, dom: dom, onDelete: function (id) {
                        return commands_1.removeInlineCommentNearSelection(id)(editorView.state, editorView.dispatch);
                    } }));
            } }));
    },
}); };
exports.default = annotationPlugin;
//# sourceMappingURL=index.js.map