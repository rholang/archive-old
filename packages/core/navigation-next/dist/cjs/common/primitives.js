"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shadow = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("./constants");

var Shadow = function Shadow(_ref) {
  var direction = _ref.direction,
      isBold = _ref.isBold,
      isOverDarkBg = _ref.isOverDarkBg,
      props = (0, _objectWithoutProperties2.default)(_ref, ["direction", "isBold", "isOverDarkBg"]);
  var width = isOverDarkBg ? 6 : 3;
  if (isBold) width = isOverDarkBg ? 12 : 6;
  var colorStops = "\n    rgba(0, 0, 0, 0.2) 0px,\n    rgba(0, 0, 0, 0.2) 1px,\n    rgba(0, 0, 0, 0.1) 1px,\n    rgba(0, 0, 0, 0) 100%\n  ";
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      background: "linear-gradient(".concat(direction, ", ").concat(colorStops, ")"),
      bottom: 0,
      left: direction === 'to left' ? -width : -1,
      opacity: isBold ? 1 : 0.5,
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      transitionDuration: _constants.transitionDuration,
      transitionProperty: 'left, opacity, width',
      transitionTimingFunction: _constants.transitionTimingFunction,
      width: width
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vcHJpbWl0aXZlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qk0iLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbW1vbi9wcmltaXRpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbiwgdHJhbnNpdGlvbkR1cmF0aW9uIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG50eXBlIFNoYWRvd1Byb3BzID0ge1xuICBkaXJlY3Rpb246ICd0byBsZWZ0JyB8ICd0byByaWdodCcsXG4gIGlzQm9sZD86IGJvb2xlYW4sXG4gIGlzT3ZlckRhcmtCZz86IGJvb2xlYW4sXG59O1xuZXhwb3J0IGNvbnN0IFNoYWRvdyA9ICh7XG4gIGRpcmVjdGlvbixcbiAgaXNCb2xkLFxuICBpc092ZXJEYXJrQmcsXG4gIC4uLnByb3BzXG59OiBTaGFkb3dQcm9wcykgPT4ge1xuICBsZXQgd2lkdGggPSBpc092ZXJEYXJrQmcgPyA2IDogMztcbiAgaWYgKGlzQm9sZCkgd2lkdGggPSBpc092ZXJEYXJrQmcgPyAxMiA6IDY7XG5cbiAgY29uc3QgY29sb3JTdG9wcyA9IGBcbiAgICByZ2JhKDAsIDAsIDAsIDAuMikgMHB4LFxuICAgIHJnYmEoMCwgMCwgMCwgMC4yKSAxcHgsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjEpIDFweCxcbiAgICByZ2JhKDAsIDAsIDAsIDApIDEwMCVcbiAgYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KCR7ZGlyZWN0aW9ufSwgJHtjb2xvclN0b3BzfSlgLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIGxlZnQ6IGRpcmVjdGlvbiA9PT0gJ3RvIGxlZnQnID8gLXdpZHRoIDogLTEsXG4gICAgICAgIG9wYWNpdHk6IGlzQm9sZCA/IDEgOiAwLjUsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICB0cmFuc2l0aW9uUHJvcGVydHk6ICdsZWZ0LCBvcGFjaXR5LCB3aWR0aCcsXG4gICAgICAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbixcbiAgICAgICAgd2lkdGgsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuU2hhZG93LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlyZWN0aW9uOiAndG8gbGVmdCcsXG59O1xuIl19 */")
  }, props));
};

exports.Shadow = Shadow;
Shadow.defaultProps = {
  direction: 'to left'
};