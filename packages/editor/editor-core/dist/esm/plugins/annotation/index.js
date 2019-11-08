import * as React from 'react';
import { annotation } from '@atlaskit/adf-schema';
import { findDomRefAtPos } from 'prosemirror-utils';
import WithPluginState from '../../ui/WithPluginState';
import { removeInlineCommentNearSelection } from './commands';
import { stateKey as reactPluginKey } from '../../plugins/base/pm-plugins/react-nodeview';
import { sum } from '../../utils';
import { surroundingMarks, filterAnnotationIds } from './utils';
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
    var idSet = surroundingMarks($from).map(filterAnnotationIds);
    annotations.sort(function (a, b) {
        return sum(idSet, function (ids) { return ids.indexOf(a.id); }) -
            sum(idSet, function (ids) { return ids.indexOf(b.id); });
    });
};
var annotationPlugin = function (annotationProvider) { return ({
    name: 'annotation',
    marks: function () {
        return [
            {
                name: 'annotation',
                mark: annotation,
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
        return (React.createElement(WithPluginState, { plugins: {
                selectionState: reactPluginKey,
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
                var dom = findDomRefAtPos(from, editorView.domAtPos.bind(editorView));
                return (React.createElement(Component, { annotations: annotations, dom: dom, onDelete: function (id) {
                        return removeInlineCommentNearSelection(id)(editorView.state, editorView.dispatch);
                    } }));
            } }));
    },
}); };
export default annotationPlugin;
//# sourceMappingURL=index.js.map