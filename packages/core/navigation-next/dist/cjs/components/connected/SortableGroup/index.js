"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _Group = _interopRequireDefault(require("../../presentational/Group"));

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
  (0, _inherits2.default)(SortableGroup, _Component);

  function SortableGroup() {
    (0, _classCallCheck2.default)(this, SortableGroup);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SortableGroup).apply(this, arguments));
  }

  (0, _createClass2.default)(SortableGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          innerStyle = _this$props.innerStyle,
          groupProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "innerStyle"]);
      return (0, _core.jsx)(_reactBeautifulDnd.Droppable, {
        droppableId: groupProps.id
      }, function (droppableProvided, snapshot) {
        return (0, _core.jsx)("div", (0, _extends2.default)({
          ref: droppableProvided.innerRef,
          css:
          /*#__PURE__*/
          (0, _css2.default)((0, _objectSpread2.default)({}, defaultStyles, innerStyle, applyDraggingStyles(snapshot)), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Nvbm5lY3RlZC9Tb3J0YWJsZUdyb3VwL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCWSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jb25uZWN0ZWQvU29ydGFibGVHcm91cC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBEcm9wcGFibGUsIHR5cGUgRHJvcHBhYmxlU3RhdGVTbmFwc2hvdCB9IGZyb20gJ3JlYWN0LWJlYXV0aWZ1bC1kbmQnO1xuXG5pbXBvcnQgR3JvdXAgZnJvbSAnLi4vLi4vcHJlc2VudGF0aW9uYWwvR3JvdXAnO1xuaW1wb3J0IHR5cGUgeyBTb3J0YWJsZUdyb3VwUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdFN0eWxlcyA9IHtcbiAgbWluSGVpZ2h0OiA2NCxcbiAgLy8gUmVtb3ZlIGJyb3dzZXIgZGVmYXVsdCBidXR0b24gc3R5bGVzIGZvciByYmRuZCBwbGFjZWhvbGRlclxuICAnJiA+IGJ1dHRvbic6IHtcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgcGFkZGluZzogJ25vbmUnLFxuICB9LFxufTtcblxuLy8gVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgYmUgYXBwbGllZCBmb3IgdXMgYXMgcGFydCBvZiByZWFjdC1iZWF1dGlmdWwtZG5kIHYxMFxuY29uc3QgYXBwbHlEcmFnZ2luZ1N0eWxlcyA9IChzbmFwc2hvdDogRHJvcHBhYmxlU3RhdGVTbmFwc2hvdCkgPT4gKHtcbiAgcG9pbnRlckV2ZW50czogc25hcHNob3QuaXNEcmFnZ2luZ092ZXIgPyAnbm9uZScgOiB1bmRlZmluZWQsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU29ydGFibGVHcm91cCBleHRlbmRzIENvbXBvbmVudDxTb3J0YWJsZUdyb3VwUHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyU3R5bGUsIC4uLmdyb3VwUHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEcm9wcGFibGUgZHJvcHBhYmxlSWQ9e2dyb3VwUHJvcHMuaWR9PlxuICAgICAgICB7KGRyb3BwYWJsZVByb3ZpZGVkLCBzbmFwc2hvdCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHJlZj17ZHJvcHBhYmxlUHJvdmlkZWQuaW5uZXJSZWZ9XG4gICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgLi4uZGVmYXVsdFN0eWxlcyxcbiAgICAgICAgICAgICAgLi4uaW5uZXJTdHlsZSxcbiAgICAgICAgICAgICAgLi4uYXBwbHlEcmFnZ2luZ1N0eWxlcyhzbmFwc2hvdCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgey4uLmRyb3BwYWJsZVByb3ZpZGVkLmRyb3BwYWJsZVByb3BzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxHcm91cCB7Li4uZ3JvdXBQcm9wc30+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAge2Ryb3BwYWJsZVByb3ZpZGVkLnBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgPC9Hcm91cD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRHJvcHBhYmxlPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */")
        }, droppableProvided.droppableProps), (0, _core.jsx)(_Group.default, groupProps, children, droppableProvided.placeholder));
      });
    }
  }]);
  return SortableGroup;
}(_react.Component);

exports.default = SortableGroup;