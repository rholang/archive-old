"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GatewayRegistry = _interopRequireDefault(require("./GatewayRegistry"));

var GatewayProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GatewayProvider, _Component);

  function GatewayProvider(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, GatewayProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GatewayProvider).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "gatewayRegistry", void 0);
    _this.gatewayRegistry = new _GatewayRegistry.default();
    return _this;
  }

  (0, _createClass2.default)(GatewayProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        gatewayRegistry: this.gatewayRegistry
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Tag = _this$props.component;
      return _react.default.createElement(Tag, null, children);
    }
  }]);
  return GatewayProvider;
}(_react.Component);

exports.default = GatewayProvider;
(0, _defineProperty2.default)(GatewayProvider, "childContextTypes", {
  gatewayRegistry: _propTypes.default.instanceOf(_GatewayRegistry.default).isRequired
});
(0, _defineProperty2.default)(GatewayProvider, "defaultProps", {
  component: 'div'
});