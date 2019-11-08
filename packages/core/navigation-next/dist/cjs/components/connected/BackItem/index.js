"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _css2 = _interopRequireDefault(require("@emotion/css"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _arrowLeftCircle = _interopRequireDefault(require("@atlaskit/icon/glyph/arrow-left-circle"));

var _constants = require("@atlaskit/theme/constants");

var _ConnectedItem = _interopRequireDefault(require("../ConnectedItem"));

var gridSize = (0, _constants.gridSize)();

var ArrowLeft = function ArrowLeft() {
  return (0, _core.jsx)(_arrowLeftCircle.default, {
    primaryColor: "currentColor",
    secondaryColor: "inherit"
  });
};

var BackItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(BackItem, _Component);

  function BackItem() {
    (0, _classCallCheck2.default)(this, BackItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BackItem).apply(this, arguments));
  }

  (0, _createClass2.default)(BackItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          beforeProp = _this$props.before,
          text = _this$props.text,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["before", "text"]);
      var before = beforeProp;

      if (!before) {
        before = ArrowLeft;
      }

      return (0, _core.jsx)("div", {
        css:
        /*#__PURE__*/
        (0, _css2.default)({
          marginBottom: gridSize * 2
        }, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Nvbm5lY3RlZC9CYWNrSXRlbS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QlciLCJmaWxlIjoiLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY29ubmVjdGVkL0JhY2tJdGVtL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBcnJvd0xlZnRDaXJjbGVJY29uIGZyb20gJ0BhdGxhc2tpdC9pY29uL2dseXBoL2Fycm93LWxlZnQtY2lyY2xlJztcbmltcG9ydCB7IGdyaWRTaXplIGFzIGdyaWRTaXplRm4gfSBmcm9tICdAYXRsYXNraXQvdGhlbWUvY29uc3RhbnRzJztcblxuaW1wb3J0IENvbm5lY3RlZEl0ZW0gZnJvbSAnLi4vQ29ubmVjdGVkSXRlbSc7XG5pbXBvcnQgdHlwZSB7IEJhY2tJdGVtUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZ3JpZFNpemUgPSBncmlkU2l6ZUZuKCk7XG5cbmNvbnN0IEFycm93TGVmdCA9ICgpID0+IChcbiAgPEFycm93TGVmdENpcmNsZUljb24gcHJpbWFyeUNvbG9yPVwiY3VycmVudENvbG9yXCIgc2Vjb25kYXJ5Q29sb3I9XCJpbmhlcml0XCIgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tJdGVtIGV4dGVuZHMgQ29tcG9uZW50PEJhY2tJdGVtUHJvcHM+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB0ZXh0OiAnQmFjaycsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYmVmb3JlOiBiZWZvcmVQcm9wLCB0ZXh0LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgYmVmb3JlID0gYmVmb3JlUHJvcDtcbiAgICBpZiAoIWJlZm9yZSkge1xuICAgICAgYmVmb3JlID0gQXJyb3dMZWZ0O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNzcz17eyBtYXJnaW5Cb3R0b206IGdyaWRTaXplICogMiB9fT5cbiAgICAgICAgPENvbm5lY3RlZEl0ZW0gey4uLnByb3BzfSBhZnRlcj17bnVsbH0gYmVmb3JlPXtiZWZvcmV9IHRleHQ9e3RleHR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */")
      }, (0, _core.jsx)(_ConnectedItem.default, (0, _extends2.default)({}, props, {
        after: null,
        before: before,
        text: text
      })));
    }
  }]);
  return BackItem;
}(_react.Component);

exports.default = BackItem;
(0, _defineProperty2.default)(BackItem, "defaultProps", {
  text: 'Back'
});