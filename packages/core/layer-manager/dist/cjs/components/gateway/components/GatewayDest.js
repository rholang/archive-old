"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GatewayRegistry = _interopRequireDefault(require("./GatewayRegistry"));

var GatewayDest =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GatewayDest, _Component);

  function GatewayDest(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, GatewayDest);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GatewayDest).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "gatewayRegistry", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      children: null
    });
    _this.gatewayRegistry = context.gatewayRegistry;
    return _this;
  }

  (0, _createClass2.default)(GatewayDest, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      this.gatewayRegistry.addContainer(this.props.name, this);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.gatewayRegistry.removeContainer(this.props.name);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          component = _this$props.component,
          attrs = (0, _objectWithoutProperties2.default)(_this$props, ["component"]);
      delete attrs.name;
      return (0, _react.createElement)(component, attrs, this.state.children);
    }
  }]);
  return GatewayDest;
}(_react.Component);

exports.default = GatewayDest;
(0, _defineProperty2.default)(GatewayDest, "contextTypes", {
  gatewayRegistry: _propTypes.default.instanceOf(_GatewayRegistry.default).isRequired
});
(0, _defineProperty2.default)(GatewayDest, "defaultProps", {
  component: 'div'
});