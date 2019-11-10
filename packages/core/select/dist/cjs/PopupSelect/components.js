"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultComponents = exports.DummyControl = exports.MenuDialog = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _reactSelect = require("react-select");

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var _search = _interopRequireDefault(require("@atlaskit/icon/glyph/editor/search"));

/** @jsx jsx */
var MenuDialog = function MenuDialog(_ref) {
  var maxWidth = _ref.maxWidth,
      minWidth = _ref.minWidth,
      props = (0, _objectWithoutProperties2.default)(_ref, ["maxWidth", "minWidth"]);
  var shadow = _colors.N40A;
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      backgroundColor: 'white',
      borderRadius: 4,
      boxShadow: "0 0 0 1px ".concat(shadow, ", 0 4px 11px ").concat(shadow),
      maxWidth: maxWidth,
      minWidth: minWidth,
      zIndex: _constants.layers.layer()
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Qb3B1cFNlbGVjdC9jb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CTSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvUG9wdXBTZWxlY3QvY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5cbmltcG9ydCB7IGxheWVycyB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgTjQwQSB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb2xvcnMnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQGF0bGFza2l0L2ljb24vZ2x5cGgvZWRpdG9yL3NlYXJjaCc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGVkIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIE1lbnVQcm9wcyA9IHsgbWF4V2lkdGg6IG51bWJlciwgbWluV2lkdGg6IG51bWJlciB9O1xuXG5leHBvcnQgY29uc3QgTWVudURpYWxvZyA9ICh7IG1heFdpZHRoLCBtaW5XaWR0aCwgLi4ucHJvcHMgfTogTWVudVByb3BzKSA9PiB7XG4gIGNvbnN0IHNoYWRvdyA9IE40MEE7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHtzaGFkb3d9LCAwIDRweCAxMXB4ICR7c2hhZG93fWAsXG4gICAgICAgIG1heFdpZHRoLFxuICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgekluZGV4OiBsYXllcnMubGF5ZXIoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ3VzdG9tIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBEcm9wZG93bkluZGljYXRvciA9ICgpID0+IChcbiAgPGRpdiBjc3M9e3sgbWFyZ2luUmlnaHQ6IDIsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAzMiB9fT5cbiAgICA8U2VhcmNoSWNvbiAvPlxuICA8L2Rpdj5cbik7XG5jb25zdCBDb250cm9sID0gKHsgaW5uZXJSZWYsIGlubmVyUHJvcHMsIC4uLnByb3BzIH06ICopID0+IChcbiAgPGRpdiByZWY9e2lubmVyUmVmfSBjc3M9e3sgcGFkZGluZzogJzhweCA4cHggNHB4JyB9fT5cbiAgICA8Y29tcG9uZW50cy5Db250cm9sIHsuLi5wcm9wc30gaW5uZXJQcm9wcz17aW5uZXJQcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IER1bW15Q29udHJvbCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgd2lkdGg6IDEsXG4gICAgfX1cbiAgPlxuICAgIDxjb21wb25lbnRzLkNvbnRyb2wgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4vLyBOT1RFIGBwcm9wc2AgaW50ZW50aW9uYWxseSBvbWl0dGVkIGZyb20gYEZyYWdtZW50YFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNZW51ID0gKHsga2V5LCBjaGlsZHJlbiwgaW5uZXJQcm9wcywgLi4ucHJvcHMgfTogKikgPT4gKFxuICA8ZGl2IHsuLi5pbm5lclByb3BzfT57Y2hpbGRyZW59PC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb21wb25lbnRzID0geyBDb250cm9sLCBEcm9wZG93bkluZGljYXRvciwgTWVudSB9O1xuIl19 */")
  }, props));
}; // ==============================
// Custom Components
// ==============================


exports.MenuDialog = MenuDialog;

var _ref2 = process.env.NODE_ENV === "production" ? {
  name: "9b8552",
  styles: "margin-right:2px;text-align:center;width:32px;"
} : {
  name: "9b8552",
  styles: "margin-right:2px;text-align:center;width:32px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Qb3B1cFNlbGVjdC9jb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDTyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvUG9wdXBTZWxlY3QvY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5cbmltcG9ydCB7IGxheWVycyB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgTjQwQSB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb2xvcnMnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQGF0bGFza2l0L2ljb24vZ2x5cGgvZWRpdG9yL3NlYXJjaCc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGVkIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIE1lbnVQcm9wcyA9IHsgbWF4V2lkdGg6IG51bWJlciwgbWluV2lkdGg6IG51bWJlciB9O1xuXG5leHBvcnQgY29uc3QgTWVudURpYWxvZyA9ICh7IG1heFdpZHRoLCBtaW5XaWR0aCwgLi4ucHJvcHMgfTogTWVudVByb3BzKSA9PiB7XG4gIGNvbnN0IHNoYWRvdyA9IE40MEE7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHtzaGFkb3d9LCAwIDRweCAxMXB4ICR7c2hhZG93fWAsXG4gICAgICAgIG1heFdpZHRoLFxuICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgekluZGV4OiBsYXllcnMubGF5ZXIoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ3VzdG9tIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBEcm9wZG93bkluZGljYXRvciA9ICgpID0+IChcbiAgPGRpdiBjc3M9e3sgbWFyZ2luUmlnaHQ6IDIsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAzMiB9fT5cbiAgICA8U2VhcmNoSWNvbiAvPlxuICA8L2Rpdj5cbik7XG5jb25zdCBDb250cm9sID0gKHsgaW5uZXJSZWYsIGlubmVyUHJvcHMsIC4uLnByb3BzIH06ICopID0+IChcbiAgPGRpdiByZWY9e2lubmVyUmVmfSBjc3M9e3sgcGFkZGluZzogJzhweCA4cHggNHB4JyB9fT5cbiAgICA8Y29tcG9uZW50cy5Db250cm9sIHsuLi5wcm9wc30gaW5uZXJQcm9wcz17aW5uZXJQcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IER1bW15Q29udHJvbCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgd2lkdGg6IDEsXG4gICAgfX1cbiAgPlxuICAgIDxjb21wb25lbnRzLkNvbnRyb2wgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4vLyBOT1RFIGBwcm9wc2AgaW50ZW50aW9uYWxseSBvbWl0dGVkIGZyb20gYEZyYWdtZW50YFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNZW51ID0gKHsga2V5LCBjaGlsZHJlbiwgaW5uZXJQcm9wcywgLi4ucHJvcHMgfTogKikgPT4gKFxuICA8ZGl2IHsuLi5pbm5lclByb3BzfT57Y2hpbGRyZW59PC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb21wb25lbnRzID0geyBDb250cm9sLCBEcm9wZG93bkluZGljYXRvciwgTWVudSB9O1xuIl19 */"
};

var DropdownIndicator = function DropdownIndicator() {
  return (0, _core.jsx)("div", {
    css: _ref2
  }, (0, _core.jsx)(_search.default, null));
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "144wn74",
  styles: "padding:8px 8px 4px;"
} : {
  name: "144wn74",
  styles: "padding:8px 8px 4px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Qb3B1cFNlbGVjdC9jb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDc0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL1BvcHVwU2VsZWN0L2NvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB7IGNvbXBvbmVudHMgfSBmcm9tICdyZWFjdC1zZWxlY3QnO1xuXG5pbXBvcnQgeyBsYXllcnMgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcbmltcG9ydCB7IE40MEEgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBTZWFyY2hJY29uIGZyb20gJ0BhdGxhc2tpdC9pY29uL2dseXBoL2VkaXRvci9zZWFyY2gnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0eWxlZCBDb21wb25lbnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudHlwZSBNZW51UHJvcHMgPSB7IG1heFdpZHRoOiBudW1iZXIsIG1pbldpZHRoOiBudW1iZXIgfTtcblxuZXhwb3J0IGNvbnN0IE1lbnVEaWFsb2cgPSAoeyBtYXhXaWR0aCwgbWluV2lkdGgsIC4uLnByb3BzIH06IE1lbnVQcm9wcykgPT4ge1xuICBjb25zdCBzaGFkb3cgPSBONDBBO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17e1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJvcmRlclJhZGl1czogNCxcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDAgMXB4ICR7c2hhZG93fSwgMCA0cHggMTFweCAke3NoYWRvd31gLFxuICAgICAgICBtYXhXaWR0aCxcbiAgICAgICAgbWluV2lkdGgsXG4gICAgICAgIHpJbmRleDogbGF5ZXJzLmxheWVyKCksXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEN1c3RvbSBDb21wb25lbnRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgRHJvcGRvd25JbmRpY2F0b3IgPSAoKSA9PiAoXG4gIDxkaXYgY3NzPXt7IG1hcmdpblJpZ2h0OiAyLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogMzIgfX0+XG4gICAgPFNlYXJjaEljb24gLz5cbiAgPC9kaXY+XG4pO1xuY29uc3QgQ29udHJvbCA9ICh7IGlubmVyUmVmLCBpbm5lclByb3BzLCAuLi5wcm9wcyB9OiAqKSA9PiAoXG4gIDxkaXYgcmVmPXtpbm5lclJlZn0gY3NzPXt7IHBhZGRpbmc6ICc4cHggOHB4IDRweCcgfX0+XG4gICAgPGNvbXBvbmVudHMuQ29udHJvbCB7Li4ucHJvcHN9IGlubmVyUHJvcHM9e2lubmVyUHJvcHN9IC8+XG4gIDwvZGl2PlxuKTtcbmV4cG9ydCBjb25zdCBEdW1teUNvbnRyb2wgPSAocHJvcHM6ICopID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICAgIHdpZHRoOiAxLFxuICAgIH19XG4gID5cbiAgICA8Y29tcG9uZW50cy5Db250cm9sIHsuLi5wcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuLy8gTk9URSBgcHJvcHNgIGludGVudGlvbmFsbHkgb21pdHRlZCBmcm9tIGBGcmFnbWVudGBcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgTWVudSA9ICh7IGtleSwgY2hpbGRyZW4sIGlubmVyUHJvcHMsIC4uLnByb3BzIH06ICopID0+IChcbiAgPGRpdiB7Li4uaW5uZXJQcm9wc30+e2NoaWxkcmVufTwvZGl2PlxuKTtcbmV4cG9ydCBjb25zdCBkZWZhdWx0Q29tcG9uZW50cyA9IHsgQ29udHJvbCwgRHJvcGRvd25JbmRpY2F0b3IsIE1lbnUgfTtcbiJdfQ== */"
};

var Control = function Control(_ref3) {
  var innerRef = _ref3.innerRef,
      innerProps = _ref3.innerProps,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["innerRef", "innerProps"]);
  return (0, _core.jsx)("div", {
    ref: innerRef,
    css: _ref4
  }, (0, _core.jsx)(_reactSelect.components.Control, (0, _extends2.default)({}, props, {
    innerProps: innerProps
  })));
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "1uvvha",
  styles: "border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;"
} : {
  name: "1uvvha",
  styles: "border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Qb3B1cFNlbGVjdC9jb21wb25lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdESSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvUG9wdXBTZWxlY3QvY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgY29tcG9uZW50cyB9IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5cbmltcG9ydCB7IGxheWVycyB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgTjQwQSB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb2xvcnMnO1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnQGF0bGFza2l0L2ljb24vZ2x5cGgvZWRpdG9yL3NlYXJjaCc7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU3R5bGVkIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG50eXBlIE1lbnVQcm9wcyA9IHsgbWF4V2lkdGg6IG51bWJlciwgbWluV2lkdGg6IG51bWJlciB9O1xuXG5leHBvcnQgY29uc3QgTWVudURpYWxvZyA9ICh7IG1heFdpZHRoLCBtaW5XaWR0aCwgLi4ucHJvcHMgfTogTWVudVByb3BzKSA9PiB7XG4gIGNvbnN0IHNoYWRvdyA9IE40MEE7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgMCAxcHggJHtzaGFkb3d9LCAwIDRweCAxMXB4ICR7c2hhZG93fWAsXG4gICAgICAgIG1heFdpZHRoLFxuICAgICAgICBtaW5XaWR0aCxcbiAgICAgICAgekluZGV4OiBsYXllcnMubGF5ZXIoKSxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQ3VzdG9tIENvbXBvbmVudHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBEcm9wZG93bkluZGljYXRvciA9ICgpID0+IChcbiAgPGRpdiBjc3M9e3sgbWFyZ2luUmlnaHQ6IDIsIHRleHRBbGlnbjogJ2NlbnRlcicsIHdpZHRoOiAzMiB9fT5cbiAgICA8U2VhcmNoSWNvbiAvPlxuICA8L2Rpdj5cbik7XG5jb25zdCBDb250cm9sID0gKHsgaW5uZXJSZWYsIGlubmVyUHJvcHMsIC4uLnByb3BzIH06ICopID0+IChcbiAgPGRpdiByZWY9e2lubmVyUmVmfSBjc3M9e3sgcGFkZGluZzogJzhweCA4cHggNHB4JyB9fT5cbiAgICA8Y29tcG9uZW50cy5Db250cm9sIHsuLi5wcm9wc30gaW5uZXJQcm9wcz17aW5uZXJQcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IER1bW15Q29udHJvbCA9IChwcm9wczogKikgPT4gKFxuICA8ZGl2XG4gICAgY3NzPXt7XG4gICAgICBib3JkZXI6IDAsXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgIGhlaWdodDogMSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgIHBhZGRpbmc6IDAsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgd2lkdGg6IDEsXG4gICAgfX1cbiAgPlxuICAgIDxjb21wb25lbnRzLkNvbnRyb2wgey4uLnByb3BzfSAvPlxuICA8L2Rpdj5cbik7XG4vLyBOT1RFIGBwcm9wc2AgaW50ZW50aW9uYWxseSBvbWl0dGVkIGZyb20gYEZyYWdtZW50YFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBNZW51ID0gKHsga2V5LCBjaGlsZHJlbiwgaW5uZXJQcm9wcywgLi4ucHJvcHMgfTogKikgPT4gKFxuICA8ZGl2IHsuLi5pbm5lclByb3BzfT57Y2hpbGRyZW59PC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb21wb25lbnRzID0geyBDb250cm9sLCBEcm9wZG93bkluZGljYXRvciwgTWVudSB9O1xuIl19 */"
};

var DummyControl = function DummyControl(props) {
  return (0, _core.jsx)("div", {
    css: _ref5
  }, (0, _core.jsx)(_reactSelect.components.Control, props));
}; // NOTE `props` intentionally omitted from `Fragment`
// eslint-disable-next-line


exports.DummyControl = DummyControl;

var Menu = function Menu(_ref6) {
  var key = _ref6.key,
      children = _ref6.children,
      innerProps = _ref6.innerProps,
      props = (0, _objectWithoutProperties2.default)(_ref6, ["key", "children", "innerProps"]);
  return (0, _core.jsx)("div", innerProps, children);
};

var defaultComponents = {
  Control: Control,
  DropdownIndicator: DropdownIndicator,
  Menu: Menu
};
exports.defaultComponents = defaultComponents;