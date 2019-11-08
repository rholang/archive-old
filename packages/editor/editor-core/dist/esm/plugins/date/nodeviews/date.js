import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { borderRadius, colors } from '@atlaskit/theme';
import { timestampToString, timestampToTaskContext, isPastDate, DateSharedCssClassName, } from '@atlaskit/editor-common';
import { Date } from '@atlaskit/date';
import { setDatePickerAt } from '../actions';
var SelectableDate = styled(Date)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .dateView-content-wrap.ProseMirror-selectednode & {\n    position: relative;\n    &::before {\n      content: '';\n      border: 2px solid ", ";\n      background: transparent;\n      border-radius: ", "px;\n      box-sizing: border-box;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n    }\n  }\n"], ["\n  .dateView-content-wrap.ProseMirror-selectednode & {\n    position: relative;\n    &::before {\n      content: '';\n      border: 2px solid ", ";\n      background: transparent;\n      border-radius: ", "px;\n      box-sizing: border-box;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n    }\n  }\n"])), colors.B200, borderRadius());
var DateNodeView = /** @class */ (function (_super) {
    __extends(DateNodeView, _super);
    function DateNodeView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function (event) {
            event.nativeEvent.stopImmediatePropagation();
            var _a = _this.props.view, state = _a.state, dispatch = _a.dispatch;
            setDatePickerAt(state.selection.from)(state, dispatch);
        };
        return _this;
    }
    DateNodeView.prototype.render = function () {
        var _a = this.props, timestamp = _a.node.attrs.timestamp, _b = _a.view.state, schema = _b.schema, selection = _b.selection;
        var parent = selection.$from.parent;
        var withinIncompleteTask = parent.type === schema.nodes.taskItem && parent.attrs.state !== 'DONE';
        var color = withinIncompleteTask && isPastDate(timestamp) ? 'red' : undefined;
        return (React.createElement("span", { className: DateSharedCssClassName.DATE_WRAPPER, onClick: this.handleClick },
            React.createElement(SelectableDate, { color: color, value: timestamp }, withinIncompleteTask
                ? timestampToTaskContext(timestamp)
                : timestampToString(timestamp))));
    };
    return DateNodeView;
}(React.Component));
export default DateNodeView;
var templateObject_1;
//# sourceMappingURL=date.js.map