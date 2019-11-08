"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.BaseSwitcher = exports.Footer = exports.Control = exports.getOptionValue = exports.isOptionSelected = exports.filterOption = exports.createStyles = void 0;

var _core = require("@emotion/core");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _reactNodeResolver = _interopRequireDefault(require("react-node-resolver"));

var _objects = _interopRequireDefault(require("shallow-equal/objects"));

var _select = require("@atlaskit/select");

var _constants = require("@atlaskit/theme/constants");

var _colors = require("@atlaskit/theme/colors");

var _add = _interopRequireDefault(require("@atlaskit/icon/glyph/add"));

var _Option = _interopRequireDefault(require("./Option"));

var _uiController = require("../../../ui-controller");

var _constants2 = require("../../../common/constants");

var gridSize = (0, _constants.gridSize)();
var defaultStyles = {
  option: function option(provided, _ref) {
    var isActive = _ref.isActive,
        isFocused = _ref.isFocused;
    return (0, _objectSpread2.default)({}, provided, {
      alignItems: 'center',
      border: 'none',
      backgroundColor: isFocused ? _colors.N30 : 'transparent',
      boxSizing: 'border-box',
      color: 'inherit',
      cursor: 'default',
      display: 'flex',
      flexShrink: 0,
      fontSize: 'inherit',
      height: gridSize * 6,
      outline: 'none',
      paddingRight: gridSize,
      paddingLeft: gridSize,
      textAlign: 'left',
      textDecoration: 'none',
      width: '100%'
    }, isActive && {
      backgroundColor: _colors.B50
    });
  }
}; // ==============================
// Custom Functions
// ==============================

var createStyles = function createStyles() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _select.mergeStyles)(defaultStyles, styles);
};

exports.createStyles = createStyles;

var filterOption = function filterOption(_ref2, input) {
  var data = _ref2.data;
  return data.text.toLowerCase().includes(input.toLowerCase());
};

exports.filterOption = filterOption;

var isOptionSelected = function isOptionSelected(option, selected) {
  if (!selected || !selected.length) return false;
  return option.id === selected[0].id;
};

exports.isOptionSelected = isOptionSelected;

var getOptionValue = function getOptionValue(option) {
  return option.id;
}; // ==============================
// Custom Components
// ==============================


exports.getOptionValue = getOptionValue;

var Control = function Control(_ref3) {
  var _ref3$innerProps = _ref3.innerProps,
      innerRef = _ref3$innerProps.innerRef,
      innerProps = (0, _objectWithoutProperties2.default)(_ref3$innerProps, ["innerRef"]),
      props = (0, _objectWithoutProperties2.default)(_ref3, ["innerProps"]);
  return (0, _core.jsx)("div", {
    ref: innerRef,
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      boxShadow: "0 2px 0 ".concat(_colors.N40A),
      padding: gridSize,
      position: 'relative'
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1N3aXRjaGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFSSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9Td2l0Y2hlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgY2xvbmVFbGVtZW50LCB0eXBlIEVsZW1lbnRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm9kZVJlc29sdmVyIGZyb20gJ3JlYWN0LW5vZGUtcmVzb2x2ZXInO1xuaW1wb3J0IHNoYWxsb3dFcXVhbE9iamVjdHMgZnJvbSAnc2hhbGxvdy1lcXVhbC9vYmplY3RzJztcbmltcG9ydCB7IGNvbXBvbmVudHMsIFBvcHVwU2VsZWN0LCBtZXJnZVN0eWxlcyB9IGZyb20gJ0BhdGxhc2tpdC9zZWxlY3QnO1xuaW1wb3J0IHsgZ3JpZFNpemUgYXMgZ3JpZFNpemVGbiB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgTjMwLCBCNTAsIE40MEEsIE4yMDAsIEIzMDAgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BhdGxhc2tpdC9pY29uL2dseXBoL2FkZCc7XG5cbmltcG9ydCB7XG4gIHR5cGUgU3dpdGNoZXJTdGF0ZSxcbiAgdHlwZSBTd2l0Y2hlclByb3BzLFxuICB0eXBlIFN3aXRjaGVyQmFzZVByb3BzLFxuICB0eXBlIFNlbGVjdFN0eWxlcyxcbiAgdHlwZSBPcHRpb25UeXBlLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyU3Vic2NyaWJlciB9IGZyb20gJy4uLy4uLy4uL3VpLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ09OVEVOVF9OQVZfV0lEVEggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgZ3JpZFNpemUgPSBncmlkU2l6ZUZuKCk7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIG9wdGlvbjogKHByb3ZpZGVkLCB7IGlzQWN0aXZlLCBpc0ZvY3VzZWQgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA/IE4zMCA6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiBncmlkU2l6ZSAqIDYsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBwYWRkaW5nUmlnaHQ6IGdyaWRTaXplLFxuICAgICAgcGFkZGluZ0xlZnQ6IGdyaWRTaXplLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC4uLihpc0FjdGl2ZSAmJiB7IGJhY2tncm91bmRDb2xvcjogQjUwIH0pLFxuICAgIH07XG4gIH0sXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEN1c3RvbSBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3R5bGVzID0gKHN0eWxlczogU2VsZWN0U3R5bGVzID0ge30pOiBPYmplY3QgPT5cbiAgbWVyZ2VTdHlsZXMoZGVmYXVsdFN0eWxlcywgc3R5bGVzKTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlck9wdGlvbiA9ICh7IGRhdGEgfTogeyBkYXRhOiBPcHRpb25UeXBlIH0sIGlucHV0OiBzdHJpbmcpID0+XG4gIGRhdGEudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0LnRvTG93ZXJDYXNlKCkpO1xuXG5leHBvcnQgY29uc3QgaXNPcHRpb25TZWxlY3RlZCA9IChcbiAgb3B0aW9uOiBPcHRpb25UeXBlLFxuICBzZWxlY3RlZDogQXJyYXk8T3B0aW9uVHlwZT4gfCB2b2lkLFxuKSA9PiB7XG4gIGlmICghc2VsZWN0ZWQgfHwgIXNlbGVjdGVkLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gb3B0aW9uLmlkID09PSBzZWxlY3RlZFswXS5pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRPcHRpb25WYWx1ZSA9IChvcHRpb246IE9wdGlvblR5cGUpID0+IG9wdGlvbi5pZDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDdXN0b20gQ29tcG9uZW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBDb250cm9sID0gKHtcbiAgaW5uZXJQcm9wczogeyBpbm5lclJlZiwgLi4uaW5uZXJQcm9wcyB9LFxuICAuLi5wcm9wc1xufTogKikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtpbm5lclJlZn1cbiAgICBjc3M9e3tcbiAgICAgIGJveFNoYWRvdzogYDAgMnB4IDAgJHtONDBBfWAsXG4gICAgICBwYWRkaW5nOiBncmlkU2l6ZSxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH19XG4gID5cbiAgICA8Y29tcG9uZW50cy5Db250cm9sIHsuLi5wcm9wc30gaW5uZXJQcm9wcz17aW5uZXJQcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7IHRleHQsIG9uQ2xpY2sgfTogKikgPT4gKFxuICA8YnV0dG9uXG4gICAgY3NzPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm94U2hhZG93OiBgMCAtMnB4IDAgJHtONDBBfWAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGNvbG9yOiBOMjAwLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiBgJHtncmlkU2l6ZSAqIDEuNX1weCAke2dyaWRTaXplfXB4YCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuXG4gICAgICAnOmhvdmVyLCA6Zm9jdXMnOiB7XG4gICAgICAgIGNvbG9yOiBCMzAwLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgICB9LFxuICAgIH19XG4gICAgb25DbGljaz17b25DbGlja31cbiAgPlxuICAgIDxBZGRJY29uIGxhYmVsPVwiQWRkIGljb25cIiBzaXplPVwic21hbGxcIiAvPlxuICAgIDxzcGFuIGNzcz17eyBtYXJnaW5MZWZ0OiBncmlkU2l6ZSB9fT57dGV4dH08L3NwYW4+XG4gIDwvYnV0dG9uPlxuKTtcblxuY29uc3QgZGVmYXVsdENvbXBvbmVudHMgPSB7IENvbnRyb2wsIE9wdGlvbiB9O1xuY29uc3QgaXNFbXB0eSA9IG9iaiA9PiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxTd2l0Y2hlclByb3BzLCBTd2l0Y2hlclN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIG1lcmdlZENvbXBvbmVudHM6IGRlZmF1bHRDb21wb25lbnRzLFxuICB9O1xuXG4gIHNlbGVjdFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIHRhcmdldFJlZjogRWxlbWVudFJlZjwqPjtcblxuICB0YXJnZXRXaWR0aCA9IDA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbG9zZU1lbnVPbkNyZWF0ZTogdHJ1ZSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBuYXZXaWR0aDogQ09OVEVOVF9OQVZfV0lEVEgsXG4gICAgaXNOYXZSZXNpemluZzogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wczogU3dpdGNoZXJQcm9wcywgc3RhdGU6IFN3aXRjaGVyU3RhdGUpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgLy8gTWVyZ2UgY29uc3VtZXIgYW5kIGRlZmF1bHQgY29tcG9uZW50c1xuICAgIGNvbnN0IG1lcmdlZENvbXBvbmVudHMgPSB7IC4uLmRlZmF1bHRDb21wb25lbnRzLCAuLi5wcm9wcy5jb21wb25lbnRzIH07XG4gICAgaWYgKCFzaGFsbG93RXF1YWxPYmplY3RzKG1lcmdlZENvbXBvbmVudHMsIHN0YXRlLm1lcmdlZENvbXBvbmVudHMpKSB7XG4gICAgICBuZXdTdGF0ZS5tZXJnZWRDb21wb25lbnRzID0gbWVyZ2VkQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICBpZiAoIWlzRW1wdHkobmV3U3RhdGUpKSByZXR1cm4gbmV3U3RhdGU7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSh7IGlzTmF2UmVzaXppbmcgfTogU3dpdGNoZXJQcm9wcykge1xuICAgIGlmIChcbiAgICAgIGlzTmF2UmVzaXppbmcgJiZcbiAgICAgIHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQgJiZcbiAgICAgIHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQuc3RhdGUuaXNPcGVuXG4gICAgKSB7XG4gICAgICB0aGlzLnNlbGVjdFJlZi5jdXJyZW50LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVRhcmdldFJlZiA9IChwb3B1cFJlZjogRWxlbWVudFJlZjwqPikgPT4gKHJlZjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAvLyBhdm9pZCB0aHJhc2hpbmcgZm4gY2FsbHNcbiAgICBpZiAoIXRoaXMudGFyZ2V0UmVmICYmIHBvcHVwUmVmICYmIHJlZikge1xuICAgICAgdGhpcy50YXJnZXRSZWYgPSByZWY7XG4gICAgICBwb3B1cFJlZihyZWYpO1xuICAgIH1cbiAgfTtcblxuICBnZXRGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjbG9zZU1lbnVPbkNyZWF0ZSwgY3JlYXRlLCBmb290ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZm9vdGVyKSByZXR1cm4gZm9vdGVyO1xuICAgIGlmICghY3JlYXRlKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB7IG9uQ2xpY2sgfSA9IGNyZWF0ZTtcbiAgICBpZiAoY2xvc2VNZW51T25DcmVhdGUpIHtcbiAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFJlZi5jdXJyZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlLm9uQ2xpY2soZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiA8Rm9vdGVyIHRleHQ9e2NyZWF0ZS50ZXh0fSBvbkNsaWNrPXtvbkNsaWNrfSAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjcmVhdGUsIG9wdGlvbnMsIHRhcmdldCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZXJnZWRDb21wb25lbnRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRhcmdldFdpZHRoID0gdGhpcy5wcm9wcy5uYXZXaWR0aCAtIGdyaWRTaXplICogMjtcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wdXBTZWxlY3RcbiAgICAgICAgcmVmPXt0aGlzLnNlbGVjdFJlZn1cbiAgICAgICAgZmlsdGVyT3B0aW9uPXtmaWx0ZXJPcHRpb259XG4gICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQ9e2lzT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgIGZvb3Rlcj17dGhpcy5nZXRGb290ZXIoKX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2dldE9wdGlvblZhbHVlfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBtYXhNZW51V2lkdGg9e3RhcmdldFdpZHRofVxuICAgICAgICBtaW5NZW51V2lkdGg9e3RhcmdldFdpZHRofVxuICAgICAgICB0YXJnZXQ9eyh7IHJlZiwgaXNPcGVuIH0pID0+IChcbiAgICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLnJlc29sdmVUYXJnZXRSZWYocmVmKX0+XG4gICAgICAgICAgICB7Y2xvbmVFbGVtZW50KHRhcmdldCwgeyBpc1NlbGVjdGVkOiBpc09wZW4gfSl9XG4gICAgICAgICAgPC9Ob2RlUmVzb2x2ZXI+XG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgc3R5bGVzPXtjcmVhdGVTdHlsZXModGhpcy5wcm9wcy5zdHlsZXMpfVxuICAgICAgICBjb21wb25lbnRzPXttZXJnZWRDb21wb25lbnRzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IFN3aXRjaGVyIGFzIEJhc2VTd2l0Y2hlciB9O1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFN3aXRjaGVyQmFzZVByb3BzKSA9PiAoXG4gIDxVSUNvbnRyb2xsZXJTdWJzY3JpYmVyPlxuICAgIHsoeyBzdGF0ZSB9KSA9PiAoXG4gICAgICA8U3dpdGNoZXJcbiAgICAgICAgbmF2V2lkdGg9e3N0YXRlLnByb2R1Y3ROYXZXaWR0aH1cbiAgICAgICAgaXNOYXZSZXNpemluZz17c3RhdGUuaXNSZXNpemluZ31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApfVxuICA8L1VJQ29udHJvbGxlclN1YnNjcmliZXI+XG4pO1xuIl19 */")
  }, (0, _core.jsx)(_select.components.Control, (0, _extends2.default)({}, props, {
    innerProps: innerProps
  })));
};

exports.Control = Control;

var Footer = function Footer(_ref4) {
  var text = _ref4.text,
      onClick = _ref4.onClick;
  return (0, _core.jsx)("button", {
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      background: 0,
      border: 0,
      boxShadow: "0 -2px 0 ".concat(_colors.N40A),
      boxSizing: 'border-box',
      color: _colors.N200,
      cursor: 'pointer',
      alignItems: 'center',
      display: 'flex',
      fontSize: 'inherit',
      padding: "".concat(gridSize * 1.5, "px ").concat(gridSize, "px"),
      position: 'relative',
      textAlign: 'left',
      width: '100%',
      ':hover, :focus': {
        color: _colors.B300,
        outline: 0,
        textDecoration: 'underline'
      }
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1N3aXRjaGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGSSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9Td2l0Y2hlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgY2xvbmVFbGVtZW50LCB0eXBlIEVsZW1lbnRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm9kZVJlc29sdmVyIGZyb20gJ3JlYWN0LW5vZGUtcmVzb2x2ZXInO1xuaW1wb3J0IHNoYWxsb3dFcXVhbE9iamVjdHMgZnJvbSAnc2hhbGxvdy1lcXVhbC9vYmplY3RzJztcbmltcG9ydCB7IGNvbXBvbmVudHMsIFBvcHVwU2VsZWN0LCBtZXJnZVN0eWxlcyB9IGZyb20gJ0BhdGxhc2tpdC9zZWxlY3QnO1xuaW1wb3J0IHsgZ3JpZFNpemUgYXMgZ3JpZFNpemVGbiB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgTjMwLCBCNTAsIE40MEEsIE4yMDAsIEIzMDAgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BhdGxhc2tpdC9pY29uL2dseXBoL2FkZCc7XG5cbmltcG9ydCB7XG4gIHR5cGUgU3dpdGNoZXJTdGF0ZSxcbiAgdHlwZSBTd2l0Y2hlclByb3BzLFxuICB0eXBlIFN3aXRjaGVyQmFzZVByb3BzLFxuICB0eXBlIFNlbGVjdFN0eWxlcyxcbiAgdHlwZSBPcHRpb25UeXBlLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyU3Vic2NyaWJlciB9IGZyb20gJy4uLy4uLy4uL3VpLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ09OVEVOVF9OQVZfV0lEVEggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgZ3JpZFNpemUgPSBncmlkU2l6ZUZuKCk7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIG9wdGlvbjogKHByb3ZpZGVkLCB7IGlzQWN0aXZlLCBpc0ZvY3VzZWQgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA/IE4zMCA6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiBncmlkU2l6ZSAqIDYsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBwYWRkaW5nUmlnaHQ6IGdyaWRTaXplLFxuICAgICAgcGFkZGluZ0xlZnQ6IGdyaWRTaXplLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC4uLihpc0FjdGl2ZSAmJiB7IGJhY2tncm91bmRDb2xvcjogQjUwIH0pLFxuICAgIH07XG4gIH0sXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEN1c3RvbSBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3R5bGVzID0gKHN0eWxlczogU2VsZWN0U3R5bGVzID0ge30pOiBPYmplY3QgPT5cbiAgbWVyZ2VTdHlsZXMoZGVmYXVsdFN0eWxlcywgc3R5bGVzKTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlck9wdGlvbiA9ICh7IGRhdGEgfTogeyBkYXRhOiBPcHRpb25UeXBlIH0sIGlucHV0OiBzdHJpbmcpID0+XG4gIGRhdGEudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0LnRvTG93ZXJDYXNlKCkpO1xuXG5leHBvcnQgY29uc3QgaXNPcHRpb25TZWxlY3RlZCA9IChcbiAgb3B0aW9uOiBPcHRpb25UeXBlLFxuICBzZWxlY3RlZDogQXJyYXk8T3B0aW9uVHlwZT4gfCB2b2lkLFxuKSA9PiB7XG4gIGlmICghc2VsZWN0ZWQgfHwgIXNlbGVjdGVkLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gb3B0aW9uLmlkID09PSBzZWxlY3RlZFswXS5pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRPcHRpb25WYWx1ZSA9IChvcHRpb246IE9wdGlvblR5cGUpID0+IG9wdGlvbi5pZDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDdXN0b20gQ29tcG9uZW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBDb250cm9sID0gKHtcbiAgaW5uZXJQcm9wczogeyBpbm5lclJlZiwgLi4uaW5uZXJQcm9wcyB9LFxuICAuLi5wcm9wc1xufTogKikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtpbm5lclJlZn1cbiAgICBjc3M9e3tcbiAgICAgIGJveFNoYWRvdzogYDAgMnB4IDAgJHtONDBBfWAsXG4gICAgICBwYWRkaW5nOiBncmlkU2l6ZSxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH19XG4gID5cbiAgICA8Y29tcG9uZW50cy5Db250cm9sIHsuLi5wcm9wc30gaW5uZXJQcm9wcz17aW5uZXJQcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7IHRleHQsIG9uQ2xpY2sgfTogKikgPT4gKFxuICA8YnV0dG9uXG4gICAgY3NzPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm94U2hhZG93OiBgMCAtMnB4IDAgJHtONDBBfWAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGNvbG9yOiBOMjAwLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiBgJHtncmlkU2l6ZSAqIDEuNX1weCAke2dyaWRTaXplfXB4YCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuXG4gICAgICAnOmhvdmVyLCA6Zm9jdXMnOiB7XG4gICAgICAgIGNvbG9yOiBCMzAwLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgICB9LFxuICAgIH19XG4gICAgb25DbGljaz17b25DbGlja31cbiAgPlxuICAgIDxBZGRJY29uIGxhYmVsPVwiQWRkIGljb25cIiBzaXplPVwic21hbGxcIiAvPlxuICAgIDxzcGFuIGNzcz17eyBtYXJnaW5MZWZ0OiBncmlkU2l6ZSB9fT57dGV4dH08L3NwYW4+XG4gIDwvYnV0dG9uPlxuKTtcblxuY29uc3QgZGVmYXVsdENvbXBvbmVudHMgPSB7IENvbnRyb2wsIE9wdGlvbiB9O1xuY29uc3QgaXNFbXB0eSA9IG9iaiA9PiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxTd2l0Y2hlclByb3BzLCBTd2l0Y2hlclN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIG1lcmdlZENvbXBvbmVudHM6IGRlZmF1bHRDb21wb25lbnRzLFxuICB9O1xuXG4gIHNlbGVjdFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIHRhcmdldFJlZjogRWxlbWVudFJlZjwqPjtcblxuICB0YXJnZXRXaWR0aCA9IDA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbG9zZU1lbnVPbkNyZWF0ZTogdHJ1ZSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBuYXZXaWR0aDogQ09OVEVOVF9OQVZfV0lEVEgsXG4gICAgaXNOYXZSZXNpemluZzogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wczogU3dpdGNoZXJQcm9wcywgc3RhdGU6IFN3aXRjaGVyU3RhdGUpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgLy8gTWVyZ2UgY29uc3VtZXIgYW5kIGRlZmF1bHQgY29tcG9uZW50c1xuICAgIGNvbnN0IG1lcmdlZENvbXBvbmVudHMgPSB7IC4uLmRlZmF1bHRDb21wb25lbnRzLCAuLi5wcm9wcy5jb21wb25lbnRzIH07XG4gICAgaWYgKCFzaGFsbG93RXF1YWxPYmplY3RzKG1lcmdlZENvbXBvbmVudHMsIHN0YXRlLm1lcmdlZENvbXBvbmVudHMpKSB7XG4gICAgICBuZXdTdGF0ZS5tZXJnZWRDb21wb25lbnRzID0gbWVyZ2VkQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICBpZiAoIWlzRW1wdHkobmV3U3RhdGUpKSByZXR1cm4gbmV3U3RhdGU7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSh7IGlzTmF2UmVzaXppbmcgfTogU3dpdGNoZXJQcm9wcykge1xuICAgIGlmIChcbiAgICAgIGlzTmF2UmVzaXppbmcgJiZcbiAgICAgIHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQgJiZcbiAgICAgIHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQuc3RhdGUuaXNPcGVuXG4gICAgKSB7XG4gICAgICB0aGlzLnNlbGVjdFJlZi5jdXJyZW50LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVRhcmdldFJlZiA9IChwb3B1cFJlZjogRWxlbWVudFJlZjwqPikgPT4gKHJlZjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAvLyBhdm9pZCB0aHJhc2hpbmcgZm4gY2FsbHNcbiAgICBpZiAoIXRoaXMudGFyZ2V0UmVmICYmIHBvcHVwUmVmICYmIHJlZikge1xuICAgICAgdGhpcy50YXJnZXRSZWYgPSByZWY7XG4gICAgICBwb3B1cFJlZihyZWYpO1xuICAgIH1cbiAgfTtcblxuICBnZXRGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjbG9zZU1lbnVPbkNyZWF0ZSwgY3JlYXRlLCBmb290ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZm9vdGVyKSByZXR1cm4gZm9vdGVyO1xuICAgIGlmICghY3JlYXRlKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB7IG9uQ2xpY2sgfSA9IGNyZWF0ZTtcbiAgICBpZiAoY2xvc2VNZW51T25DcmVhdGUpIHtcbiAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFJlZi5jdXJyZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlLm9uQ2xpY2soZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiA8Rm9vdGVyIHRleHQ9e2NyZWF0ZS50ZXh0fSBvbkNsaWNrPXtvbkNsaWNrfSAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjcmVhdGUsIG9wdGlvbnMsIHRhcmdldCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZXJnZWRDb21wb25lbnRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRhcmdldFdpZHRoID0gdGhpcy5wcm9wcy5uYXZXaWR0aCAtIGdyaWRTaXplICogMjtcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wdXBTZWxlY3RcbiAgICAgICAgcmVmPXt0aGlzLnNlbGVjdFJlZn1cbiAgICAgICAgZmlsdGVyT3B0aW9uPXtmaWx0ZXJPcHRpb259XG4gICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQ9e2lzT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgIGZvb3Rlcj17dGhpcy5nZXRGb290ZXIoKX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2dldE9wdGlvblZhbHVlfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBtYXhNZW51V2lkdGg9e3RhcmdldFdpZHRofVxuICAgICAgICBtaW5NZW51V2lkdGg9e3RhcmdldFdpZHRofVxuICAgICAgICB0YXJnZXQ9eyh7IHJlZiwgaXNPcGVuIH0pID0+IChcbiAgICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLnJlc29sdmVUYXJnZXRSZWYocmVmKX0+XG4gICAgICAgICAgICB7Y2xvbmVFbGVtZW50KHRhcmdldCwgeyBpc1NlbGVjdGVkOiBpc09wZW4gfSl9XG4gICAgICAgICAgPC9Ob2RlUmVzb2x2ZXI+XG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgc3R5bGVzPXtjcmVhdGVTdHlsZXModGhpcy5wcm9wcy5zdHlsZXMpfVxuICAgICAgICBjb21wb25lbnRzPXttZXJnZWRDb21wb25lbnRzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IFN3aXRjaGVyIGFzIEJhc2VTd2l0Y2hlciB9O1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFN3aXRjaGVyQmFzZVByb3BzKSA9PiAoXG4gIDxVSUNvbnRyb2xsZXJTdWJzY3JpYmVyPlxuICAgIHsoeyBzdGF0ZSB9KSA9PiAoXG4gICAgICA8U3dpdGNoZXJcbiAgICAgICAgbmF2V2lkdGg9e3N0YXRlLnByb2R1Y3ROYXZXaWR0aH1cbiAgICAgICAgaXNOYXZSZXNpemluZz17c3RhdGUuaXNSZXNpemluZ31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApfVxuICA8L1VJQ29udHJvbGxlclN1YnNjcmliZXI+XG4pO1xuIl19 */"),
    onClick: onClick
  }, (0, _core.jsx)(_add.default, {
    label: "Add icon",
    size: "small"
  }), (0, _core.jsx)("span", {
    css:
    /*#__PURE__*/
    (0, _css2.default)({
      marginLeft: gridSize
    }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1N3aXRjaGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdIVSIsImZpbGUiOiIuLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9Td2l0Y2hlci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCwgY2xvbmVFbGVtZW50LCB0eXBlIEVsZW1lbnRSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTm9kZVJlc29sdmVyIGZyb20gJ3JlYWN0LW5vZGUtcmVzb2x2ZXInO1xuaW1wb3J0IHNoYWxsb3dFcXVhbE9iamVjdHMgZnJvbSAnc2hhbGxvdy1lcXVhbC9vYmplY3RzJztcbmltcG9ydCB7IGNvbXBvbmVudHMsIFBvcHVwU2VsZWN0LCBtZXJnZVN0eWxlcyB9IGZyb20gJ0BhdGxhc2tpdC9zZWxlY3QnO1xuaW1wb3J0IHsgZ3JpZFNpemUgYXMgZ3JpZFNpemVGbiB9IGZyb20gJ0BhdGxhc2tpdC90aGVtZS9jb25zdGFudHMnO1xuaW1wb3J0IHsgTjMwLCBCNTAsIE40MEEsIE4yMDAsIEIzMDAgfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29sb3JzJztcbmltcG9ydCBBZGRJY29uIGZyb20gJ0BhdGxhc2tpdC9pY29uL2dseXBoL2FkZCc7XG5cbmltcG9ydCB7XG4gIHR5cGUgU3dpdGNoZXJTdGF0ZSxcbiAgdHlwZSBTd2l0Y2hlclByb3BzLFxuICB0eXBlIFN3aXRjaGVyQmFzZVByb3BzLFxuICB0eXBlIFNlbGVjdFN0eWxlcyxcbiAgdHlwZSBPcHRpb25UeXBlLFxufSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCBPcHRpb24gZnJvbSAnLi9PcHRpb24nO1xuaW1wb3J0IHsgVUlDb250cm9sbGVyU3Vic2NyaWJlciB9IGZyb20gJy4uLy4uLy4uL3VpLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ09OVEVOVF9OQVZfV0lEVEggfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgZ3JpZFNpemUgPSBncmlkU2l6ZUZuKCk7XG5cbmNvbnN0IGRlZmF1bHRTdHlsZXMgPSB7XG4gIG9wdGlvbjogKHByb3ZpZGVkLCB7IGlzQWN0aXZlLCBpc0ZvY3VzZWQgfSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm92aWRlZCxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRm9jdXNlZCA/IE4zMCA6ICd0cmFuc3BhcmVudCcsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhTaHJpbms6IDAsXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiBncmlkU2l6ZSAqIDYsXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICBwYWRkaW5nUmlnaHQ6IGdyaWRTaXplLFxuICAgICAgcGFkZGluZ0xlZnQ6IGdyaWRTaXplLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC4uLihpc0FjdGl2ZSAmJiB7IGJhY2tncm91bmRDb2xvcjogQjUwIH0pLFxuICAgIH07XG4gIH0sXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEN1c3RvbSBGdW5jdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3R5bGVzID0gKHN0eWxlczogU2VsZWN0U3R5bGVzID0ge30pOiBPYmplY3QgPT5cbiAgbWVyZ2VTdHlsZXMoZGVmYXVsdFN0eWxlcywgc3R5bGVzKTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlck9wdGlvbiA9ICh7IGRhdGEgfTogeyBkYXRhOiBPcHRpb25UeXBlIH0sIGlucHV0OiBzdHJpbmcpID0+XG4gIGRhdGEudGV4dC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGlucHV0LnRvTG93ZXJDYXNlKCkpO1xuXG5leHBvcnQgY29uc3QgaXNPcHRpb25TZWxlY3RlZCA9IChcbiAgb3B0aW9uOiBPcHRpb25UeXBlLFxuICBzZWxlY3RlZDogQXJyYXk8T3B0aW9uVHlwZT4gfCB2b2lkLFxuKSA9PiB7XG4gIGlmICghc2VsZWN0ZWQgfHwgIXNlbGVjdGVkLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gb3B0aW9uLmlkID09PSBzZWxlY3RlZFswXS5pZDtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRPcHRpb25WYWx1ZSA9IChvcHRpb246IE9wdGlvblR5cGUpID0+IG9wdGlvbi5pZDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDdXN0b20gQ29tcG9uZW50c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBDb250cm9sID0gKHtcbiAgaW5uZXJQcm9wczogeyBpbm5lclJlZiwgLi4uaW5uZXJQcm9wcyB9LFxuICAuLi5wcm9wc1xufTogKikgPT4gKFxuICA8ZGl2XG4gICAgcmVmPXtpbm5lclJlZn1cbiAgICBjc3M9e3tcbiAgICAgIGJveFNoYWRvdzogYDAgMnB4IDAgJHtONDBBfWAsXG4gICAgICBwYWRkaW5nOiBncmlkU2l6ZSxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIH19XG4gID5cbiAgICA8Y29tcG9uZW50cy5Db250cm9sIHsuLi5wcm9wc30gaW5uZXJQcm9wcz17aW5uZXJQcm9wc30gLz5cbiAgPC9kaXY+XG4pO1xuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7IHRleHQsIG9uQ2xpY2sgfTogKikgPT4gKFxuICA8YnV0dG9uXG4gICAgY3NzPXt7XG4gICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm94U2hhZG93OiBgMCAtMnB4IDAgJHtONDBBfWAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGNvbG9yOiBOMjAwLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICBwYWRkaW5nOiBgJHtncmlkU2l6ZSAqIDEuNX1weCAke2dyaWRTaXplfXB4YCxcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuXG4gICAgICAnOmhvdmVyLCA6Zm9jdXMnOiB7XG4gICAgICAgIGNvbG9yOiBCMzAwLFxuICAgICAgICBvdXRsaW5lOiAwLFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXG4gICAgICB9LFxuICAgIH19XG4gICAgb25DbGljaz17b25DbGlja31cbiAgPlxuICAgIDxBZGRJY29uIGxhYmVsPVwiQWRkIGljb25cIiBzaXplPVwic21hbGxcIiAvPlxuICAgIDxzcGFuIGNzcz17eyBtYXJnaW5MZWZ0OiBncmlkU2l6ZSB9fT57dGV4dH08L3NwYW4+XG4gIDwvYnV0dG9uPlxuKTtcblxuY29uc3QgZGVmYXVsdENvbXBvbmVudHMgPSB7IENvbnRyb2wsIE9wdGlvbiB9O1xuY29uc3QgaXNFbXB0eSA9IG9iaiA9PiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBDbGFzc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNsYXNzIFN3aXRjaGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxTd2l0Y2hlclByb3BzLCBTd2l0Y2hlclN0YXRlPiB7XG4gIHN0YXRlID0ge1xuICAgIG1lcmdlZENvbXBvbmVudHM6IGRlZmF1bHRDb21wb25lbnRzLFxuICB9O1xuXG4gIHNlbGVjdFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIHRhcmdldFJlZjogRWxlbWVudFJlZjwqPjtcblxuICB0YXJnZXRXaWR0aCA9IDA7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBjbG9zZU1lbnVPbkNyZWF0ZTogdHJ1ZSxcbiAgICBjb21wb25lbnRzOiB7fSxcbiAgICBuYXZXaWR0aDogQ09OVEVOVF9OQVZfV0lEVEgsXG4gICAgaXNOYXZSZXNpemluZzogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyhwcm9wczogU3dpdGNoZXJQcm9wcywgc3RhdGU6IFN3aXRjaGVyU3RhdGUpIHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHt9O1xuXG4gICAgLy8gTWVyZ2UgY29uc3VtZXIgYW5kIGRlZmF1bHQgY29tcG9uZW50c1xuICAgIGNvbnN0IG1lcmdlZENvbXBvbmVudHMgPSB7IC4uLmRlZmF1bHRDb21wb25lbnRzLCAuLi5wcm9wcy5jb21wb25lbnRzIH07XG4gICAgaWYgKCFzaGFsbG93RXF1YWxPYmplY3RzKG1lcmdlZENvbXBvbmVudHMsIHN0YXRlLm1lcmdlZENvbXBvbmVudHMpKSB7XG4gICAgICBuZXdTdGF0ZS5tZXJnZWRDb21wb25lbnRzID0gbWVyZ2VkQ29tcG9uZW50cztcbiAgICB9XG5cbiAgICBpZiAoIWlzRW1wdHkobmV3U3RhdGUpKSByZXR1cm4gbmV3U3RhdGU7XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSh7IGlzTmF2UmVzaXppbmcgfTogU3dpdGNoZXJQcm9wcykge1xuICAgIGlmIChcbiAgICAgIGlzTmF2UmVzaXppbmcgJiZcbiAgICAgIHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQgJiZcbiAgICAgIHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQuc3RhdGUuaXNPcGVuXG4gICAgKSB7XG4gICAgICB0aGlzLnNlbGVjdFJlZi5jdXJyZW50LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVzb2x2ZVRhcmdldFJlZiA9IChwb3B1cFJlZjogRWxlbWVudFJlZjwqPikgPT4gKHJlZjogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAvLyBhdm9pZCB0aHJhc2hpbmcgZm4gY2FsbHNcbiAgICBpZiAoIXRoaXMudGFyZ2V0UmVmICYmIHBvcHVwUmVmICYmIHJlZikge1xuICAgICAgdGhpcy50YXJnZXRSZWYgPSByZWY7XG4gICAgICBwb3B1cFJlZihyZWYpO1xuICAgIH1cbiAgfTtcblxuICBnZXRGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjbG9zZU1lbnVPbkNyZWF0ZSwgY3JlYXRlLCBmb290ZXIgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoZm9vdGVyKSByZXR1cm4gZm9vdGVyO1xuICAgIGlmICghY3JlYXRlKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB7IG9uQ2xpY2sgfSA9IGNyZWF0ZTtcbiAgICBpZiAoY2xvc2VNZW51T25DcmVhdGUpIHtcbiAgICAgIG9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdFJlZi5jdXJyZW50LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlLm9uQ2xpY2soZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiA8Rm9vdGVyIHRleHQ9e2NyZWF0ZS50ZXh0fSBvbkNsaWNrPXtvbkNsaWNrfSAvPjtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjcmVhdGUsIG9wdGlvbnMsIHRhcmdldCwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtZXJnZWRDb21wb25lbnRzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRhcmdldFdpZHRoID0gdGhpcy5wcm9wcy5uYXZXaWR0aCAtIGdyaWRTaXplICogMjtcblxuICAgIHJldHVybiAoXG4gICAgICA8UG9wdXBTZWxlY3RcbiAgICAgICAgcmVmPXt0aGlzLnNlbGVjdFJlZn1cbiAgICAgICAgZmlsdGVyT3B0aW9uPXtmaWx0ZXJPcHRpb259XG4gICAgICAgIGlzT3B0aW9uU2VsZWN0ZWQ9e2lzT3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgIGZvb3Rlcj17dGhpcy5nZXRGb290ZXIoKX1cbiAgICAgICAgZ2V0T3B0aW9uVmFsdWU9e2dldE9wdGlvblZhbHVlfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICBtYXhNZW51V2lkdGg9e3RhcmdldFdpZHRofVxuICAgICAgICBtaW5NZW51V2lkdGg9e3RhcmdldFdpZHRofVxuICAgICAgICB0YXJnZXQ9eyh7IHJlZiwgaXNPcGVuIH0pID0+IChcbiAgICAgICAgICA8Tm9kZVJlc29sdmVyIGlubmVyUmVmPXt0aGlzLnJlc29sdmVUYXJnZXRSZWYocmVmKX0+XG4gICAgICAgICAgICB7Y2xvbmVFbGVtZW50KHRhcmdldCwgeyBpc1NlbGVjdGVkOiBpc09wZW4gfSl9XG4gICAgICAgICAgPC9Ob2RlUmVzb2x2ZXI+XG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgc3R5bGVzPXtjcmVhdGVTdHlsZXModGhpcy5wcm9wcy5zdHlsZXMpfVxuICAgICAgICBjb21wb25lbnRzPXttZXJnZWRDb21wb25lbnRzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IFN3aXRjaGVyIGFzIEJhc2VTd2l0Y2hlciB9O1xuXG5leHBvcnQgZGVmYXVsdCAocHJvcHM6IFN3aXRjaGVyQmFzZVByb3BzKSA9PiAoXG4gIDxVSUNvbnRyb2xsZXJTdWJzY3JpYmVyPlxuICAgIHsoeyBzdGF0ZSB9KSA9PiAoXG4gICAgICA8U3dpdGNoZXJcbiAgICAgICAgbmF2V2lkdGg9e3N0YXRlLnByb2R1Y3ROYXZXaWR0aH1cbiAgICAgICAgaXNOYXZSZXNpemluZz17c3RhdGUuaXNSZXNpemluZ31cbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgLz5cbiAgICApfVxuICA8L1VJQ29udHJvbGxlclN1YnNjcmliZXI+XG4pO1xuIl19 */")
  }, text));
};

exports.Footer = Footer;
var defaultComponents = {
  Control: Control,
  Option: _Option.default
};

var isEmpty = function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}; // ==============================
// Class
// ==============================


var Switcher =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Switcher, _PureComponent);

  function Switcher() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Switcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Switcher)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      mergedComponents: defaultComponents
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectRef", _react.default.createRef());
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "targetRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "targetWidth", 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "resolveTargetRef", function (popupRef) {
      return function (ref) {
        // avoid thrashing fn calls
        if (!_this.targetRef && popupRef && ref) {
          _this.targetRef = ref;
          popupRef(ref);
        }
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getFooter", function () {
      var _this$props = _this.props,
          closeMenuOnCreate = _this$props.closeMenuOnCreate,
          create = _this$props.create,
          footer = _this$props.footer;
      if (footer) return footer;
      if (!create) return null;
      var onClick = create.onClick;

      if (closeMenuOnCreate) {
        onClick = function onClick(e) {
          if (_this.selectRef.current) {
            _this.selectRef.current.close();
          }

          create.onClick(e);
        };
      }

      return (0, _core.jsx)(Footer, {
        text: create.text,
        onClick: onClick
      });
    });
    return _this;
  }

  (0, _createClass2.default)(Switcher, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref5) {
      var isNavResizing = _ref5.isNavResizing;

      if (isNavResizing && this.selectRef.current && this.selectRef.current.state.isOpen) {
        this.selectRef.current.close();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          create = _this$props2.create,
          options = _this$props2.options,
          _target = _this$props2.target,
          props = (0, _objectWithoutProperties2.default)(_this$props2, ["create", "options", "target"]);
      var mergedComponents = this.state.mergedComponents;
      var targetWidth = this.props.navWidth - gridSize * 2;
      return (0, _core.jsx)(_select.PopupSelect, (0, _extends2.default)({
        ref: this.selectRef,
        filterOption: filterOption,
        isOptionSelected: isOptionSelected,
        footer: this.getFooter(),
        getOptionValue: getOptionValue,
        options: options,
        maxMenuWidth: targetWidth,
        minMenuWidth: targetWidth,
        target: function target(_ref6) {
          var ref = _ref6.ref,
              isOpen = _ref6.isOpen;
          return (0, _core.jsx)(_reactNodeResolver.default, {
            innerRef: _this2.resolveTargetRef(ref)
          }, (0, _react.cloneElement)(_target, {
            isSelected: isOpen
          }));
        }
      }, props, {
        styles: createStyles(this.props.styles),
        components: mergedComponents
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var newState = {}; // Merge consumer and default components

      var mergedComponents = (0, _objectSpread2.default)({}, defaultComponents, props.components);

      if (!(0, _objects.default)(mergedComponents, state.mergedComponents)) {
        newState.mergedComponents = mergedComponents;
      }

      if (!isEmpty(newState)) return newState;
      return null;
    }
  }]);
  return Switcher;
}(_react.PureComponent);

exports.BaseSwitcher = Switcher;
(0, _defineProperty2.default)(Switcher, "defaultProps", {
  closeMenuOnCreate: true,
  components: {},
  navWidth: _constants2.CONTENT_NAV_WIDTH,
  isNavResizing: false
});

var _default = function _default(props) {
  return (0, _core.jsx)(_uiController.UIControllerSubscriber, null, function (_ref7) {
    var state = _ref7.state;
    return (0, _core.jsx)(Switcher, (0, _extends2.default)({
      navWidth: state.productNavWidth,
      isNavResizing: state.isResizing
    }, props));
  });
};

exports.default = _default;