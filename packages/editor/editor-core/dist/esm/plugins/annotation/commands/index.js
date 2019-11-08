import { INLINE_COMMENT } from '@atlaskit/adf-schema';
export var removeInlineCommentNearSelection = function (id) { return function (state, dispatch) {
    var tr = state.tr, $from = state.selection.$from;
    var annotationMarkType = state.schema.marks.annotation;
    var hasAnnotation = $from
        .marks()
        .some(function (mark) { return mark.type === annotationMarkType; });
    if (!hasAnnotation) {
        return false;
    }
    // just remove entire mark from around the node
    tr.removeMark($from.start(), $from.end(), annotationMarkType.create({
        id: id,
        type: INLINE_COMMENT,
    }));
    if (dispatch) {
        dispatch(tr);
    }
    return true;
}; };
//# sourceMappingURL=index.js.map