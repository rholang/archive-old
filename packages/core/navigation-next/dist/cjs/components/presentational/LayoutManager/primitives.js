"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavigationContainer = exports.HorizontalNavigationContainer = exports.LayoutContainer = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _constants = require("@atlaskit/theme/constants");

var LayoutContainer = function LayoutContainer(_ref) {
  var _ref$topOffset = _ref.topOffset,
      topOffset = _ref$topOffset === void 0 ? 0 : _ref$topOffset,
      props = (0, _objectWithoutProperties2.default)(_ref, ["topOffset"]);
  return (0, _core.jsx)("div", (0, _extends2.default)({
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      display: 'flex',
      flexDirection: 'row',
      height: "calc(100vh - ".concat(topOffset, "px)"),
      marginTop: "".concat(topOffset, "px")
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0xheW91dE1hbmFnZXIvcHJpbWl0aXZlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRTSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9MYXlvdXRNYW5hZ2VyL3ByaW1pdGl2ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgUmVhY3QsIHsgdHlwZSBFbGVtZW50UmVmLCB0eXBlIE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBsYXllcnMgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IExheW91dENvbnRhaW5lciA9ICh7IHRvcE9mZnNldCA9IDAsIC4uLnByb3BzIH06ICopID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgaGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7dG9wT2Zmc2V0fXB4KWAsXG4gICAgICAgIG1hcmdpblRvcDogYCR7dG9wT2Zmc2V0fXB4YCxcbiAgICAgIH19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBIb3Jpem9udGFsTmF2aWdhdGlvbkNvbnRhaW5lciA9ICh7XG4gIGNoaWxkcmVuLFxuICB0b3BPZmZzZXQsXG59OiB7XG4gIGNoaWxkcmVuOiBOb2RlLFxuICB0b3BPZmZzZXQ6IG51bWJlcixcbn0pID0+IChcbiAgPGRpdlxuICAgIGNzcz17e1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICB0b3A6IHRvcE9mZnNldCxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICB6SW5kZXg6IGxheWVycy5uYXZpZ2F0aW9uKCkgKyAxLFxuICAgIH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25Db250YWluZXIgPSAoeyB0b3BPZmZzZXQsIGlubmVyUmVmLCAuLi5wcm9wcyB9OiAqKSA9PiAoXG4gIDxkaXZcbiAgICByZWY9e2lubmVyUmVmfVxuICAgIGNzcz17e1xuICAgICAgYm90dG9tOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiB0b3BPZmZzZXQsXG4gICAgICB6SW5kZXg6IGxheWVycy5uYXZpZ2F0aW9uKCksXG4gICAgICAnJjpob3ZlciAuYWstbmF2aWdhdGlvbi1yZXNpemUtYnV0dG9uJzoge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9fVxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG5cbi8vIFJlc2l6YWJsZSBFbGVtZW50cyBjYW4gYmUgZGlzYWJsZWRcblxuZXhwb3J0IHR5cGUgUmVzaXphYmxlID0ge1xuICBpbm5lclJlZj86IEVsZW1lbnRSZWY8Kj4sXG4gIGRpc2FibGVJbnRlcmFjdGlvbjogYm9vbGVhbixcbn07XG4iXX0= */")
  }, props));
};

exports.LayoutContainer = LayoutContainer;

var HorizontalNavigationContainer = function HorizontalNavigationContainer(_ref2) {
  var children = _ref2.children,
      topOffset = _ref2.topOffset;
  return (0, _core.jsx)("div", {
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      position: 'fixed',
      top: topOffset,
      width: '100%',
      zIndex: _constants.layers.navigation() + 1
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0xheW91dE1hbmFnZXIvcHJpbWl0aXZlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkkiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvTGF5b3V0TWFuYWdlci9wcmltaXRpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IHR5cGUgRWxlbWVudFJlZiwgdHlwZSBOb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbGF5ZXJzIH0gZnJvbSAnQGF0bGFza2l0L3RoZW1lL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRDb250YWluZXIgPSAoeyB0b3BPZmZzZXQgPSAwLCAuLi5wcm9wcyB9OiAqKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcE9mZnNldH1weClgLFxuICAgICAgICBtYXJnaW5Ub3A6IGAke3RvcE9mZnNldH1weGAsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbE5hdmlnYXRpb25Db250YWluZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgdG9wT2Zmc2V0LFxufToge1xuICBjaGlsZHJlbjogTm9kZSxcbiAgdG9wT2Zmc2V0OiBudW1iZXIsXG59KSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiB0b3BPZmZzZXQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiBsYXllcnMubmF2aWdhdGlvbigpICsgMSxcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uQ29udGFpbmVyID0gKHsgdG9wT2Zmc2V0LCBpbm5lclJlZiwgLi4ucHJvcHMgfTogKikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtpbm5lclJlZn1cbiAgICBjc3M9e3tcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHRvcDogdG9wT2Zmc2V0LFxuICAgICAgekluZGV4OiBsYXllcnMubmF2aWdhdGlvbigpLFxuICAgICAgJyY6aG92ZXIgLmFrLW5hdmlnYXRpb24tcmVzaXplLWJ1dHRvbic6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG4vLyBSZXNpemFibGUgRWxlbWVudHMgY2FuIGJlIGRpc2FibGVkXG5cbmV4cG9ydCB0eXBlIFJlc2l6YWJsZSA9IHtcbiAgaW5uZXJSZWY/OiBFbGVtZW50UmVmPCo+LFxuICBkaXNhYmxlSW50ZXJhY3Rpb246IGJvb2xlYW4sXG59O1xuIl19 */")
  }, children);
};

exports.HorizontalNavigationContainer = HorizontalNavigationContainer;

var NavigationContainer = function NavigationContainer(_ref3) {
  var topOffset = _ref3.topOffset,
      innerRef = _ref3.innerRef,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["topOffset", "innerRef"]);
  return (0, _core.jsx)("div", (0, _extends2.default)({
    ref: innerRef,
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      bottom: 0,
      left: 0,
      position: 'fixed',
      top: topOffset,
      zIndex: _constants.layers.navigation(),
      '&:hover .ak-navigation-resize-button': {
        opacity: 1
      }
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL0xheW91dE1hbmFnZXIvcHJpbWl0aXZlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q0kiLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvTGF5b3V0TWFuYWdlci9wcmltaXRpdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IHR5cGUgRWxlbWVudFJlZiwgdHlwZSBOb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbGF5ZXJzIH0gZnJvbSAnQGF0bGFza2l0L3RoZW1lL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBMYXlvdXRDb250YWluZXIgPSAoeyB0b3BPZmZzZXQgPSAwLCAuLi5wcm9wcyB9OiAqKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXt7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgIGhlaWdodDogYGNhbGMoMTAwdmggLSAke3RvcE9mZnNldH1weClgLFxuICAgICAgICBtYXJnaW5Ub3A6IGAke3RvcE9mZnNldH1weGAsXG4gICAgICB9fVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgSG9yaXpvbnRhbE5hdmlnYXRpb25Db250YWluZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgdG9wT2Zmc2V0LFxufToge1xuICBjaGlsZHJlbjogTm9kZSxcbiAgdG9wT2Zmc2V0OiBudW1iZXIsXG59KSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e3tcbiAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgdG9wOiB0b3BPZmZzZXQsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgekluZGV4OiBsYXllcnMubmF2aWdhdGlvbigpICsgMSxcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uQ29udGFpbmVyID0gKHsgdG9wT2Zmc2V0LCBpbm5lclJlZiwgLi4ucHJvcHMgfTogKikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtpbm5lclJlZn1cbiAgICBjc3M9e3tcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIHRvcDogdG9wT2Zmc2V0LFxuICAgICAgekluZGV4OiBsYXllcnMubmF2aWdhdGlvbigpLFxuICAgICAgJyY6aG92ZXIgLmFrLW5hdmlnYXRpb24tcmVzaXplLWJ1dHRvbic6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgIH0sXG4gICAgfX1cbiAgICB7Li4ucHJvcHN9XG4gIC8+XG4pO1xuXG4vLyBSZXNpemFibGUgRWxlbWVudHMgY2FuIGJlIGRpc2FibGVkXG5cbmV4cG9ydCB0eXBlIFJlc2l6YWJsZSA9IHtcbiAgaW5uZXJSZWY/OiBFbGVtZW50UmVmPCo+LFxuICBkaXNhYmxlSW50ZXJhY3Rpb246IGJvb2xlYW4sXG59O1xuIl19 */")
  }, props));
}; // Resizable Elements can be disabled


exports.NavigationContainer = NavigationContainer;