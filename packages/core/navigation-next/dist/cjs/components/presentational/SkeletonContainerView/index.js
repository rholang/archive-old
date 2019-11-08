"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _Section = _interopRequireDefault(require("../Section"));

var _SkeletonContainerHeader = _interopRequireDefault(require("../SkeletonContainerHeader"));

var _SkeletonItem = _interopRequireDefault(require("../SkeletonItem"));

var _primitives = require("../ContentNavigation/primitives");

var _primitives2 = require("./primitives");

var SkeletonContainerView =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SkeletonContainerView, _Component);

  function SkeletonContainerView() {
    (0, _classCallCheck2.default)(this, SkeletonContainerView);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SkeletonContainerView).apply(this, arguments));
  }

  (0, _createClass2.default)(SkeletonContainerView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataset = _this$props.dataset,
          type = _this$props.type,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["dataset", "type"]);

      if (!type) {
        return null;
      }

      var Theme = type === 'product' ? _primitives.ProductNavigationTheme : _primitives.ContainerNavigationTheme;
      return (0, _core.jsx)(Theme, null, (0, _core.jsx)(_primitives2.Container, (0, _extends2.default)({}, dataset, props), (0, _core.jsx)(_Section.default, null, function (_ref) {
        var css = _ref.css;
        return (0, _core.jsx)(_primitives2.HeaderContainer, {
          styles: css
        }, (0, _core.jsx)(_SkeletonContainerHeader.default, {
          hasBefore: true
        }));
      }), (0, _core.jsx)(_Section.default, null, function (_ref2) {
        var className = _ref2.className;
        return (0, _core.jsx)("div", {
          className: className
        }, (0, _core.jsx)(_SkeletonItem.default, {
          hasBefore: true
        }), (0, _core.jsx)(_SkeletonItem.default, {
          hasBefore: true
        }), (0, _core.jsx)(_SkeletonItem.default, {
          hasBefore: true
        }), (0, _core.jsx)(_SkeletonItem.default, {
          hasBefore: true
        }), (0, _core.jsx)(_SkeletonItem.default, {
          hasBefore: true
        }));
      })));
    }
  }]);
  return SkeletonContainerView;
}(_react.Component);

exports.default = SkeletonContainerView;
(0, _defineProperty2.default)(SkeletonContainerView, "defaultProps", {
  dataset: {
    'data-testid': 'ContextualNavigationSkeleton'
  }
});