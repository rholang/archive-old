import _extends from "@babel/runtime/helpers/extends";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _css from "@emotion/css";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import { jsx as ___EmotionJSX } from "@emotion/core";
import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Group from '../../presentational/Group';
var defaultStyles = {
  minHeight: 64,
  // Remove browser default button styles for rbdnd placeholder
  '& > button': {
    background: 'none',
    border: 'none',
    padding: 'none'
  }
}; // This will automatically be applied for us as part of react-beautiful-dnd v10

var applyDraggingStyles = function applyDraggingStyles(snapshot) {
  return {
    pointerEvents: snapshot.isDraggingOver ? 'none' : undefined
  };
};

var SortableGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(SortableGroup, _Component);

  function SortableGroup() {
    _classCallCheck(this, SortableGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(SortableGroup).apply(this, arguments));
  }

  _createClass(SortableGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerStyle = _this$props.innerStyle,
          groupProps = _objectWithoutProperties(_this$props, ["children", "innerStyle"]);

      return ___EmotionJSX(Droppable, {
        droppableId: groupProps.id
      }, function (droppableProvided, snapshot) {
        return ___EmotionJSX("div", _extends({
          ref: droppableProvided.innerRef,
          css:
          /*#__PURE__*/
          _css(_objectSpread({}, defaultStyles, innerStyle, applyDraggingStyles(snapshot)), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Nvbm5lY3RlZC9Tb3J0YWJsZUdyb3VwL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCWSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jb25uZWN0ZWQvU29ydGFibGVHcm91cC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcm9wcGFibGUsIHR5cGUgRHJvcHBhYmxlU3RhdGVTbmFwc2hvdCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi4vLi4vcHJlc2VudGF0aW9uYWwvR3JvdXAnO1xuaW1wb3J0IHR5cGUgeyBTb3J0YWJsZUdyb3VwUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgbWluSGVpZ2h0OiA2NCxcbiAgLy8gUmVtb3ZlIGJyb3dzZXIgZGVmYXVsdCBidXR0b24gc3R5bGVzIGZvciByYmRuZCBwbGFjZWhvbGRlclxuICAnJiA+IGJ1dHRvbic6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgcGFkZGluZzogJ25vbmUnLFxuICB9LFxufTtcblxuLy8gVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgYXBwbGllZCBmb3IgdXMgYXMgcGFydCBvZiByZWFjdC1iZWF1dGlmdWwtZG5kIHYxMFxuY29uc3QgYXBwbHlEcmFnZ2luZ1N0eWxlcyA9IChzbmFwc2hvdDogRHJvcHBhYmxlU3RhdGVTbmFwc2hvdCkgPT4gKHtcbiAgcG9pbnRlckV2ZW50czogc25hcHNob3QuaXNEcmFnZ2luZ092ZXIgPyAnbm9uZScgOiB1bmRlZmluZWQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydGFibGVHcm91cCBleHRlbmRzIENvbXBvbmVudDxTb3J0YWJsZUdyb3VwUHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyU3R5bGUsIC4uLmdyb3VwUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9e2dyb3VwUHJvcHMuaWR9PlxuICAgICAgICB7KGRyb3BwYWJsZVByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17ZHJvcHBhYmxlUHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgLi4uZGVmYXVsdFN0eWxlcyxcbiAgICAgICAgICAgICAgLi4uaW5uZXJTdHlsZSxcbiAgICAgICAgICAgICAgLi4uYXBwbHlEcmFnZ2luZ1N0eWxlcyhzbmFwc2hvdCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLmRyb3BwYWJsZVByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcm91cCB7Li4uZ3JvdXBQcm9wc30+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAge2Ryb3BwYWJsZVByb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcHBhYmxlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */")
        }, droppableProvided.droppableProps), ___EmotionJSX(Group, groupProps, children, droppableProvided.placeholder));
      });
    }
  }]);

  return SortableGroup;
}(Component);

export { SortableGroup as default };