"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderContainer = exports.Container = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("@atlaskit/theme/constants");

var gridSize = (0, _constants.gridSize)();

var Container = function Container(props) {
  return (0, _core.jsx)("div", props);
};

exports.Container = Container;

var HeaderContainer = function HeaderContainer(props) {
  var styles = props.styles,
      rest = (0, _objectWithoutProperties2.default)(props, ["styles"]);
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css2.default)((0, _objectSpread2.default)({}, styles, {
      paddingTop: gridSize * 2.5,
      paddingBottom: gridSize * 2.5
    }), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NrZWxldG9uQ29udGFpbmVyVmlldy9wcmltaXRpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFNIiwiZmlsZSI6Ii4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NrZWxldG9uQ29udGFpbmVyVmlldy9wcmltaXRpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcblxuY29uc3QgZ3JpZFNpemUgPSBncmlkU2l6ZUZuKCk7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAocHJvcHM6ICopID0+IDxkaXYgey4uLnByb3BzfSAvPjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IChwcm9wczogKikgPT4ge1xuICBjb25zdCB7IHN0eWxlcywgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgcGFkZGluZ1RvcDogZ3JpZFNpemUgKiAyLjUsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGdyaWRTaXplICogMi41LFxuICAgICAgfX1cbiAgICAgIHsuLi5yZXN0fVxuICAgIC8+XG4gICk7XG59O1xuIl19 */")
  }, rest));
};

exports.HeaderContainer = HeaderContainer;