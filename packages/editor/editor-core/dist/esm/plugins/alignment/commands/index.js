import { toggleBlockMark, changeImageAlignment } from '../../../commands';
import { cascadeCommands } from '../../../utils/action';
export var isAlignable = function (align) { return function (state, dispatch) {
    var _a = state.schema, _b = _a.nodes, paragraph = _b.paragraph, heading = _b.heading, alignment = _a.marks.alignment;
    return toggleBlockMark(alignment, function () { return (!align ? undefined : align === 'start' ? false : { align: align }); }, [paragraph, heading])(state, dispatch);
}; };
export var changeAlignment = function (align) { return function (state, dispatch) {
    var _a = state.schema, _b = _a.nodes, paragraph = _b.paragraph, heading = _b.heading, alignment = _a.marks.alignment;
    return cascadeCommands([
        changeImageAlignment(align),
        toggleBlockMark(alignment, function () { return (!align ? undefined : align === 'start' ? false : { align: align }); }, [paragraph, heading]),
    ])(state, dispatch);
}; };
//# sourceMappingURL=index.js.map