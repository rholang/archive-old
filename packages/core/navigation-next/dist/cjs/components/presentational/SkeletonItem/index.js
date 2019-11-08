"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _theme = require("../../../theme");

var SkeletonItem =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SkeletonItem, _PureComponent);

  function SkeletonItem() {
    (0, _classCallCheck2.default)(this, SkeletonItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonItem).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          hasBefore = _this$props.hasBefore,
          styleReducer = _this$props.styles,
          theme = _this$props.theme;
      var mode = theme.mode,
          context = theme.context;
      var defaultStyles = mode.skeletonItem()[context];
      var styles = styleReducer(defaultStyles);
      return (0, _core.jsx)("div", {
        css:
        /*#__PURE__*/
        (0, _css2.default)({
          '&&': styles.wrapper
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFsL1NrZWxldG9uSXRlbS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlciLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvU2tlbGV0b25JdGVtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IHdpdGhDb250ZW50VGhlbWUsIHN0eWxlUmVkdWNlck5vT3AgfSBmcm9tICcuLi8uLi8uLi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7IFNrZWxldG9uSXRlbVByb3BzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNsYXNzIFNrZWxldG9uSXRlbSBleHRlbmRzIFB1cmVDb21wb25lbnQ8U2tlbGV0b25JdGVtUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYXNCZWZvcmU6IGZhbHNlLFxuICAgIHN0eWxlczogc3R5bGVSZWR1Y2VyTm9PcCxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBoYXNCZWZvcmUsIHN0eWxlczogc3R5bGVSZWR1Y2VyLCB0aGVtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHsgbW9kZSwgY29udGV4dCB9ID0gdGhlbWU7XG4gICAgY29uc3QgZGVmYXVsdFN0eWxlcyA9IG1vZGUuc2tlbGV0b25JdGVtKClbY29udGV4dF07XG4gICAgY29uc3Qgc3R5bGVzID0gc3R5bGVSZWR1Y2VyKGRlZmF1bHRTdHlsZXMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY3NzPXt7ICcmJic6IHN0eWxlcy53cmFwcGVyIH19PlxuICAgICAgICB7aGFzQmVmb3JlICYmIDxkaXYgY3NzPXtzdHlsZXMuYmVmb3JlfSAvPn1cbiAgICAgICAgPGRpdiBjc3M9e3N0eWxlcy5jb250ZW50fSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQ29udGVudFRoZW1lKFNrZWxldG9uSXRlbSk7XG4iXX0= */")
      }, hasBefore && (0, _core.jsx)("div", {
        css: styles.before
      }), (0, _core.jsx)("div", {
        css: styles.content
      }));
    }
  }]);
  return SkeletonItem;
}(_react.PureComponent);

(0, _defineProperty2.default)(SkeletonItem, "defaultProps", {
  hasBefore: false,
  styles: _theme.styleReducerNoOp
});

var _default = (0, _theme.withContentTheme)(SkeletonItem);

exports.default = _default;