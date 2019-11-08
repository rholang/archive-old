"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryItemsList = exports.FirstPrimaryItemWrapper = exports.PrimaryItemsList = exports.Container = void 0;

var _core = require("@emotion/core");

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("@atlaskit/theme/constants");

var gridSize = (0, _constants.gridSize)();
var listBaseStyles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%'
};

var Container = function Container(props) {
  var styles = props.styles,
      rest = (0, _objectWithoutProperties2.default)(props, ["styles"]);
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css: styles
  }, rest));
};

exports.Container = Container;

var PrimaryItemsList = function PrimaryItemsList(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css2.default)((0, _objectSpread2.default)({}, listBaseStyles, {
      paddingBottom: gridSize * 2
    }), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0dsb2JhbE5hdmlnYXRpb25Ta2VsZXRvbi9wcmltaXRpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9HbG9iYWxOYXZpZ2F0aW9uU2tlbGV0b24vcHJpbWl0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmlkU2l6ZSBhcyBncmlkU2l6ZUZuIH0gZnJvbSAnQGF0bGFza2l0L3RoZW1lL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5jb25zdCBsaXN0QmFzZVN0eWxlcyA9IHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHdpZHRoOiAnMTAwJScsXG59O1xuXG5leHBvcnQgdHlwZSBDb250YWluZXJQcm9wcyA9IHtcbiAgc3R5bGVzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHByb3BzOiBDb250YWluZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHN0eWxlcywgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiA8ZGl2IGNzcz17c3R5bGVzfSB7Li4ucmVzdH0gLz47XG59O1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeUl0ZW1zTGlzdCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2IGNzcz17eyAuLi5saXN0QmFzZVN0eWxlcywgcGFkZGluZ0JvdHRvbTogZ3JpZFNpemUgKiAyIH19IHsuLi5wcm9wc30gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBGaXJzdFByaW1hcnlJdGVtV3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2IGNzcz17eyBwYWRkaW5nQm90dG9tOiBncmlkU2l6ZSAqIDEuNzUgfX0gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUl0ZW1zTGlzdCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICAuLi5saXN0QmFzZVN0eWxlcyxcbiAgICAgIHBhZGRpbmdUb3A6IGdyaWRTaXplLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbiJdfQ== */")
  }, props));
};

exports.PrimaryItemsList = PrimaryItemsList;

var FirstPrimaryItemWrapper = function FirstPrimaryItemWrapper(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      paddingBottom: gridSize * 1.75
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0dsb2JhbE5hdmlnYXRpb25Ta2VsZXRvbi9wcmltaXRpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCTyIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9HbG9iYWxOYXZpZ2F0aW9uU2tlbGV0b24vcHJpbWl0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmlkU2l6ZSBhcyBncmlkU2l6ZUZuIH0gZnJvbSAnQGF0bGFza2l0L3RoZW1lL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5jb25zdCBsaXN0QmFzZVN0eWxlcyA9IHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHdpZHRoOiAnMTAwJScsXG59O1xuXG5leHBvcnQgdHlwZSBDb250YWluZXJQcm9wcyA9IHtcbiAgc3R5bGVzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHByb3BzOiBDb250YWluZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHN0eWxlcywgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiA8ZGl2IGNzcz17c3R5bGVzfSB7Li4ucmVzdH0gLz47XG59O1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeUl0ZW1zTGlzdCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2IGNzcz17eyAuLi5saXN0QmFzZVN0eWxlcywgcGFkZGluZ0JvdHRvbTogZ3JpZFNpemUgKiAyIH19IHsuLi5wcm9wc30gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBGaXJzdFByaW1hcnlJdGVtV3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2IGNzcz17eyBwYWRkaW5nQm90dG9tOiBncmlkU2l6ZSAqIDEuNzUgfX0gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUl0ZW1zTGlzdCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICAuLi5saXN0QmFzZVN0eWxlcyxcbiAgICAgIHBhZGRpbmdUb3A6IGdyaWRTaXplLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbiJdfQ== */")
  }, props));
};

exports.FirstPrimaryItemWrapper = FirstPrimaryItemWrapper;

var SecondaryItemsList = function SecondaryItemsList(props) {
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css2.default)((0, _objectSpread2.default)({}, listBaseStyles, {
      paddingTop: gridSize
    }), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0dsb2JhbE5hdmlnYXRpb25Ta2VsZXRvbi9wcmltaXRpdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDSSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9HbG9iYWxOYXZpZ2F0aW9uU2tlbGV0b24vcHJpbWl0aXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBncmlkU2l6ZSBhcyBncmlkU2l6ZUZuIH0gZnJvbSAnQGF0bGFza2l0L3RoZW1lL2NvbnN0YW50cyc7XG5cbmNvbnN0IGdyaWRTaXplID0gZ3JpZFNpemVGbigpO1xuXG5jb25zdCBsaXN0QmFzZVN0eWxlcyA9IHtcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIHdpZHRoOiAnMTAwJScsXG59O1xuXG5leHBvcnQgdHlwZSBDb250YWluZXJQcm9wcyA9IHtcbiAgc3R5bGVzOiBPYmplY3QsXG59O1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gKHByb3BzOiBDb250YWluZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHN0eWxlcywgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIHJldHVybiA8ZGl2IGNzcz17c3R5bGVzfSB7Li4ucmVzdH0gLz47XG59O1xuXG5leHBvcnQgY29uc3QgUHJpbWFyeUl0ZW1zTGlzdCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2IGNzcz17eyAuLi5saXN0QmFzZVN0eWxlcywgcGFkZGluZ0JvdHRvbTogZ3JpZFNpemUgKiAyIH19IHsuLi5wcm9wc30gLz5cbik7XG5cbmV4cG9ydCBjb25zdCBGaXJzdFByaW1hcnlJdGVtV3JhcHBlciA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2IGNzcz17eyBwYWRkaW5nQm90dG9tOiBncmlkU2l6ZSAqIDEuNzUgfX0gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUl0ZW1zTGlzdCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICAuLi5saXN0QmFzZVN0eWxlcyxcbiAgICAgIHBhZGRpbmdUb3A6IGdyaWRTaXplLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcbiJdfQ== */")
  }, props));
};

exports.SecondaryItemsList = SecondaryItemsList;