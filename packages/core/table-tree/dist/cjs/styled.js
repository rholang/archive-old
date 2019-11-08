"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableTreeContainer = exports.Header = exports.Cell = exports.OverflowContainer = exports.LoaderItemContainer = exports.ChevronIconContainer = exports.ChevronContainer = exports.HeadersContainer = exports.TreeRowContainer = exports.iconColor = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = require("@atlaskit/theme/colors");

// Future-proofing: Styled Component 2.x no longer tolerate unitless values for CSS length.
// See:
// https://github.com/styled-components/css-to-react-native/issues/20
// https://github.com/styled-components/polished/issues/234
function defaultToPx(length) {
  var number = +length;

  if (number === 0) {
    return 0;
  }

  if (Number.isNaN(number)) {
    return length;
  }

  return "".concat(number, "px");
}

var iconColor = _colors.N800;
exports.iconColor = iconColor;

var TreeRowContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__TreeRowContainer",
  componentId: "sc-56yt3z-0"
})(["\n  border-bottom: 1px solid ", ";\n  display: flex;\n"], _colors.N30);

exports.TreeRowContainer = TreeRowContainer;

var HeadersContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__HeadersContainer",
  componentId: "sc-56yt3z-1"
})(["\n  border-bottom: solid 2px #dfe1e6;\n  display: flex;\n"]);

exports.HeadersContainer = HeadersContainer;
var indentWidth = 25;
var commonChevronContainer = (0, _styledComponents.css)(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  top: 7px;\n  margin-left: ", ";\n"], defaultToPx(-indentWidth));

var ChevronContainer = _styledComponents.default.span.withConfig({
  displayName: "styled__ChevronContainer",
  componentId: "sc-56yt3z-2"
})(["\n  ", ";\n"], commonChevronContainer);

exports.ChevronContainer = ChevronContainer;

var ChevronIconContainer = _styledComponents.default.span.withConfig({
  displayName: "styled__ChevronIconContainer",
  componentId: "sc-56yt3z-3"
})(["\n  position: relative;\n  top: 1px;\n"]);

exports.ChevronIconContainer = ChevronIconContainer;

var LoaderItemContainer = _styledComponents.default.span.withConfig({
  displayName: "styled__LoaderItemContainer",
  componentId: "sc-56yt3z-4"
})(["\n  ", " padding-top: 5px;\n  width: 100%;\n\n  ", ";\n"], commonChevronContainer, function (props) {
  return props.isRoot && (0, _styledComponents.css)(["\n      padding-left: 50%;\n    "]);
});

exports.LoaderItemContainer = LoaderItemContainer;
var commonCell = (0, _styledComponents.css)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n  box-sizing: border-box;\n  min-height: 40px;\n  padding: 8px ", ";\n  color: ", ";\n  line-height: 20px;\n  ", ";\n"], defaultToPx(indentWidth), _colors.N800, function (props) {
  return props.width && (0, _styledComponents.css)(["\n      width: ", ";\n    "], defaultToPx(props.width));
});

var OverflowContainer = _styledComponents.default.span.withConfig({
  displayName: "styled__OverflowContainer",
  componentId: "sc-56yt3z-5"
})(["\n  ", ";\n"], function (props) {
  return props.singleLine && (0, _styledComponents.css)(["\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "]);
});

exports.OverflowContainer = OverflowContainer;

var Cell = _styledComponents.default.div.withConfig({
  displayName: "styled__Cell",
  componentId: "sc-56yt3z-6"
})(["\n  ", " ", ";\n"], commonCell, function (props) {
  return props.indentLevel && (0, _styledComponents.css)(["\n      padding-left: ", ";\n    "], defaultToPx(indentWidth * props.indentLevel));
});

exports.Cell = Cell;

var Header = _styledComponents.default.div.withConfig({
  displayName: "styled__Header",
  componentId: "sc-56yt3z-7"
})(["\n  ", " font-weight: bold;\n  font-size: 12px;\n  line-height: 1.67;\n  letter-spacing: -0.1px;\n  color: ", ";\n"], commonCell, _colors.N300);

exports.Header = Header;

var TableTreeContainer = _styledComponents.default.div.withConfig({
  displayName: "styled__TableTreeContainer",
  componentId: "sc-56yt3z-8"
})([""]);

exports.TableTreeContainer = TableTreeContainer;